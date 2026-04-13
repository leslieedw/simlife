import { useState } from 'react';
import type { GameState, BirthProfile } from './types';
import { createInitialState, drawEvent, applyChoice, getNextAge, determineEnding, AGE_TIMELINE, simulateFullGame } from './engine/gameEngine';
import { BirthScreen } from './pages/BirthScreen';
import { GameScreen } from './pages/GameScreen';
import { EndingScreen } from './pages/EndingScreen';
import { AnalysisScreen } from './pages/AnalysisScreen';
import { ENDINGS } from './data/endings';

// 从当前年龄向前快进，直到找到有事件的年份或游戏结束
// 返回：跳过的年份列表 + 落脚的新状态
function advanceToNextEvent(state: GameState): {
  newState: GameState;
  skippedAges: number[];
} {
  const skippedAges: number[] = [];
  let current = state;

  while (true) {
    const nextAge = getNextAge(current.age);
    if (!nextAge) {
      // 到头了，触发结局
      const endingId = determineEnding(current);
      return { newState: { ...current, phase: 'ending', endingId }, skippedAges };
    }

    const candidate: GameState = { ...current, age: nextAge };
    const event = drawEvent(candidate);

    if (event) {
      return {
        newState: { ...candidate, currentEvent: event, phase: 'event' },
        skippedAges,
      };
    }

    // 这一年也没事件，继续跳
    skippedAges.push(nextAge);
    current = candidate;
  }
}

export default function App() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  // 记录被跳过的年份，用于在 result 页展示"平静地过了 X 年"
  const [skippedAges, setSkippedAges] = useState<number[]>([]);

  function handleBirthComplete(birth: BirthProfile) {
    const state = createInitialState(birth);
    const event = drawEvent(state);
    if (event) {
      setGameState({ ...state, currentEvent: event, phase: 'event' });
    } else {
      // 出生年也没事件，直接快进
      const { newState, skippedAges: s } = advanceToNextEvent(state);
      setSkippedAges(s);
      setGameState(newState);
    }
  }

  function handleChoice(choiceId: string) {
    if (!gameState?.currentEvent) return;
    const choice = gameState.currentEvent.choices.find(c => c.id === choiceId);
    if (!choice) return;
    const newState = applyChoice(gameState, gameState.currentEvent, choice);
    setSkippedAges([]);
    setGameState(newState);
  }

  function handleContinue() {
    if (!gameState) return;
    const { newState, skippedAges: s } = advanceToNextEvent(gameState);
    setSkippedAges(s);
    setGameState(newState);
  }

  function handleSkip() {
    if (!gameState) return;
    // 跳过当前事件，直接快进到下一个事件
    const stateWithoutEvent: GameState = { ...gameState, currentEvent: null, phase: 'playing' };
    const { newState, skippedAges: s } = advanceToNextEvent(stateWithoutEvent);
    setSkippedAges([gameState.age, ...s]);
    setGameState(newState);
  }

  function handleEndEarly() {
    if (!gameState) return;
    const endingId = determineEnding(gameState);
    setGameState({ ...gameState, phase: 'ending', endingId, currentEvent: null });
  }

  function handleViewAnalysis() {
    setGameState(prev => prev ? { ...prev, phase: 'analysis' } : prev);
  }

  function handleDebugSimulate() {
    const finalState = simulateFullGame();
    setGameState(finalState);
    setSkippedAges([]);
  }

  function handleRestart() {
    setGameState(null);
    setSkippedAges([]);
  }

  if (!gameState) {
    return <BirthScreen onComplete={handleBirthComplete} onDebugSimulate={handleDebugSimulate} />;
  }

  if (gameState.phase === 'ending') {
    const endingId = gameState.endingId ?? determineEnding(gameState);
    const ending = ENDINGS.find(e => e.id === endingId) ?? ENDINGS[ENDINGS.length - 1];
    return (
      <EndingScreen
        ending={ending}
        history={gameState.lifeHistory}
        onViewAnalysis={handleViewAnalysis}
        onRestart={handleRestart}
      />
    );
  }

  if (gameState.phase === 'analysis') {
    return (
      <AnalysisScreen
        personality={gameState.personality}
        tags={gameState.hiddenTags}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <GameScreen
      state={gameState}
      totalAges={AGE_TIMELINE.length}
      currentAgeIndex={AGE_TIMELINE.indexOf(gameState.age)}
      skippedAges={skippedAges}
      onChoice={handleChoice}
      onContinue={handleContinue}
      onSkip={handleSkip}
      onEndEarly={handleEndEarly}
    />
  );
}
