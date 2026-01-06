import { createContext, ReactNode, useContext, useState } from "react";

type GameProgress = {
  level1Completed: boolean;
  level2Completed: boolean;
  completeLevel1: () => void;
  completeLevel2: () => void;
};

const GameProgressContext = createContext<GameProgress | null>(null);

export function GameProgressProvider({ children }: { children: ReactNode }) {
  const [level1Completed, setLevel1Completed] = useState(false);
  const [level2Completed, setLevel2Completed] = useState(false);

  return (
    <GameProgressContext.Provider
      value={{
        level1Completed,
        level2Completed,
        completeLevel1: () => setLevel1Completed(true),
        completeLevel2: () => setLevel2Completed(true),
      }}
    >
      {children}
    </GameProgressContext.Provider>
  );
}

export function useGameProgress() {
  const context = useContext(GameProgressContext);
  if (!context) {
    throw new Error("useGameProgress must be used inside GameProgressProvider");
  }
  return context;
}
