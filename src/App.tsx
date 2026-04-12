import { useState } from 'react';
import type { GameState, BirthProfile } from './types';
import { createInitialState, drawEvent, applyChoice, getNextAge, determineEnding, AGE_TIMELINE } from './engine/gameEngine';
import { BirthScreen } from './pages/BirthScreen';
import { GameScreen } from './pages/GameScreen';
import { EndingScreen } from './pages/EndingScreen';
import { AnalysisScreen } from './pages/AnalysisScreen';
import { ENDINGS } from './data/endings';

export default function App() {
  const [gameState, setGameState] = useState<GameState | null>(null);

  function handleBirthComplete(birth: BirthProfile) {
    const state = createInitialState(birth);
    const event = drawEvent(state);
    setGameState({ ...state, currentEvent: event, phase: event ? 'event' : 'result' });
  }

  function handleChoice(choiceId: string) {
    if (!gameState?.currentEvent) return;
    const choice = gameState.currentEvent.choices.find(c => c.id === choiceId);
    if (!choice) return;
    const newState = applyChoice(gameState, gameState.currentEvent, choice);
    setGameState(newState);
  }

  function handleContinue() {
    if (!gameState) return;
    const nextAge = getNextAge(gameState.age);
    if (!nextAge) {
      const endingId = determineEnding(gameState);
      setGameState({ ...gameState, phase: 'ending', endingId });
      return;
    }
    const updatedState: GameState = { ...gameState, age: nextAge, phase: 'playing' };
    const event = drawEvent(updatedState);
    setGameState({ ...updatedState, currentEvent: event, phase: event ? 'event' : 'result' });
  }

  function handleViewAnalysis() {
    setGameState(prev => prev ? { ...prev, phase: 'analysis' } : prev);
  }

  function handleRestart() {
    setGameState(null);
  }

  if (!gameState) {
    return <BirthScreen onComplete={handleBirthComplete} />;
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
      onChoice={handleChoice}
      onContinue={handleContinue}
    />
  );
}
