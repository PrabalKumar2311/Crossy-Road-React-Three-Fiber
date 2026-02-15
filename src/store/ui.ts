import { create } from 'zustand';

interface UIState {
  selectedModelIndex: number;
  showSelector: boolean;
  hasMoved: boolean;
  setSelectedModelIndex: (index: number | ((prev: number) => number)) => void;
  setShowSelector: (show: boolean) => void;
  setHasMoved: (moved: boolean) => void;
  resetUI: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  selectedModelIndex: 0,
  showSelector: true,
  hasMoved: false,
  setSelectedModelIndex: (index) =>
    set((state) => ({
      selectedModelIndex:
        typeof index === 'function' ? index(state.selectedModelIndex) : index,
    })),
  setShowSelector: (show) => set({ showSelector: show }),
  setHasMoved: (moved) => set({ hasMoved: moved }),
  resetUI: () => set({ selectedModelIndex: 0, showSelector: true, hasMoved: false }),
}));