import { httpClient } from "@Plugins/axios";

export async function getProjects() {
  try {
    const { data } = await httpClient.get("/projects");
    return { data };
  } catch (error) {
    return { error };
  }
}
