import { githubClient } from "@Plugins/axios";

export async function getRepositories() {
  try {
    const { data } = await githubClient.get();
    return { data };
  } catch (error) {
    return { error };
  }
}
