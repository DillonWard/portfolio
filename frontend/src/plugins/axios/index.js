import axios from "axios";

export const httpClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: import.meta.env.VITE_API_URL,
});

export const githubClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: import.meta.env.VITE_GITHUB_REPOS_URL,
});
