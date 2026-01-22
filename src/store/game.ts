import { create } from "zustand";

interface StoreState {
  status: "running" | "over";
  score: number;
  topScore: number;
  updateScore: (rowIndex: number) => void;
  endGame: () => void;
  reset: () => void;
  updateTopScore: (score: number) => void;
}

const getInitialTopScore = (): number => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("topScore");
    return saved ? parseInt(saved, 10) : 0;
  }
  return 0;
};

const useStore = create<StoreState>((set) => ({
  status: "running",
  score: 0,
  topScore: getInitialTopScore(),

  updateScore: (rowIndex: number) => {
    set((state) => ({ score: Math.max(rowIndex, state.score) }));
  },

  endGame: () => {
    set((state) => {
      // Update top score if current score is higher
      const newTopScore = Math.max(state.score, state.topScore);
      
      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("topScore", newTopScore.toString());
      }
      
      return { 
        status: "over", 
        topScore: newTopScore 
      };
    });
  },

  reset: () => {
    set({
      status: "running",
      score: 0,
      // Keep the topScore from localStorage
      topScore: getInitialTopScore(),
    });
  },

  updateTopScore: (score: number) => {
    set(() => {
      const newTopScore = score;
      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("topScore", newTopScore.toString());
      }
      return { topScore: newTopScore };
    });
  },
}));

export default useStore;