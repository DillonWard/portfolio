import { createSlice } from "@reduxjs/toolkit";

const overviewStore = createSlice({
  name: "overview",
  initialState: {
    frontend: [
      ["Vue", "Vuex", "Pinia"],
      ["React", "Redux"],
      ["Bulma", " Buefy", "Tailwind", "Bootstrap"],
      ["JavaScript"],
      ["Chart.js", "D3.js"],
    ],
    backend: [
      ["Python", "PHP", "Java", "Node", "MySQL"],
      ["Express", "FastAPI", "Django", "Laravel", "Spring"],
      ["MongoDB"],
      ["Scrapy"],
    ],
    infrastructure: [
      ["Docker", "Docker Compose"],
      ["Kubernetes"],
      ["Azure DevOps"],
      ["Pulsar", "RabbitMQ"],
    ],
  },
  reducers: {
    selectFrontend: (state) => state.frontend,
    selectBackend: (state) => state.backend,
    selectInfrastructure: (state) => state.infrastructure,
  },
});

export default overviewStore.reducer;
