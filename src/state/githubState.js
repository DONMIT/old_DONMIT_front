import { atom } from "recoil";

const GithubUserState = atom({
  key: "githubuser",
  default: null,
});

export { GithubUserState };
