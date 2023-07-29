import { create } from "zustand";

interface BearState {
  bears: number;
  increase: (by?: number) => void;
  decrease: (by?: number) => void;
  reset: () => void;
}

const useBearState = create<BearState>((set) => ({
  bears: 0,
  increase: (by = 1) => set((state) => ({ bears: state.bears + by })),
  decrease: (by = 1) => set((state) => ({ bears: state.bears - by })),
  reset: () => set({ bears: 0 }),
}));

export default function useModal() {
  const { increase, reset } = useBearState();

  const { bears, decrease } = useBearState((state) => ({
    bears: state.bears,
    decrease: state.decrease,
  }));

  return { increase, reset, bears, decrease };
}
