import { create } from 'zustand';

interface UIState {
  isScrollAtTop: boolean;
  isScrollAtBottom: boolean;
  scrollProgress: number;
  isMenuOpen: boolean;
  setScrollState: (state: Partial<Omit<UIState, 'setScrollState' | 'toggleMenu' | 'closeMenu'>>) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isScrollAtTop: true,
  isScrollAtBottom: false,
  scrollProgress: 0,
  isMenuOpen: false,

  setScrollState: (newState) => set(state => ({ ...state, ...newState })),

  toggleMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
  
  closeMenu: () => set({ isMenuOpen: false }),
}));
