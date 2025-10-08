import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRepositories } from "../services";

export const fetchRepositories = createAsyncThunk(
  "repositories/fetchRepositories",
  async (_, { rejectWithValue }) => {
    const { data, error } = await getRepositories();
    if (error) {
      return rejectWithValue(error);
    }
    return data;
  }
);

const repositoriesStore = createSlice({
  name: "repositories",
  initialState: {
    loading: true,
    error: null,
    repositories: [],
  },
  reducers: {
    setRepositories: (state, action) => [...state, action.payload],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepositories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      state.repositories = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchRepositories.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const { setRepositories } = repositoriesStore.actions;
export default repositoriesStore.reducer;
