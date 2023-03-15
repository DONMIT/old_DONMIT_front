import axios from "axios";
import { GithubUserState } from "@/state/githubState";

export const fetchGithubUser = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const userData = response.data;
    set(GithubUserState, userData);
  } catch (error) {
    console.error(error);
  }
};
