import { atom } from "recoil";

const ModeState = atom({
  key: "mode",
  default: 0,
});

export { ModeState };
