import { atom, selector } from "recoil";

export const modeState = atom({
  key: "modeState",
  default: "browse" as "browse" | "pick",
});

export const isBrowseModeSelector = selector({
  key: "isBrowseModeSelector",
  get: ({ get }) => {
    const mode = get(modeState);
    return mode === "browse";
  },
});
