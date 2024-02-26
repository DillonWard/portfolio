import { httpClient } from "@Plugins/axios";

export async function getExperiences() {
  try {
    const { data } = await httpClient.get("/experiences");
    return { data };
  } catch (error) {
    return { error };
  }
}
