import { atom } from "recoil";

const LoginState = atom({
  key: "login",
  default: {
    isLogin: false,
    token: "",
  },
});

export { LoginState };
