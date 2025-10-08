import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProjects } from "../services";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (_, { rejectWithValue }) => {
    const { data, error } = await getProjects();
    if (error) {
      return rejectWithValue(error);
    }
    return data;
  }
);

const projectsStore = createSlice({
  name: "projects",
  initialState: {
    loading: true,
    error: null,
    projects: [],
  },
  reducers: {
    setProjects: (state, action) => [...state, action.payload],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const { setProjects } = projectsStore.actions;
export default projectsStore.reducer;
