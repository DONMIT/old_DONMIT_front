import { atom } from "recoil";

const ModeState = atom({
  key: "mode",
  default: false,
});

const LanguageState = atom({
  key: "language",
  default: 0,
});

export { ModeState };
