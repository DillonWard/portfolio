import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Remote from "@/assets/remote.jpeg";
import HPE from "@/assets/hpe.jpeg";
import AKKA from "@/assets/akka.jpeg";
import { getExperiences } from "../services";

export const fetchExperiences = createAsyncThunk(
  "experience/fetchExperiences",
  async (_, { rejectWithValue }) => {
    const { data, error } = await getExperiences();
    if (error) {
      return rejectWithValue(error);
    }
    return data;
  }
);

const experienceStore = createSlice({
  name: "experiences",
  initialState: {
    loading: true,
    error: null,
    experiences: [],
  },
  reducers: {
    setExperiences: (state, action) => [...state, action.payload],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExperiences.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchExperiences.fulfilled, (state, action) => {
      state.experiences = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchExperiences.rejected, (state, action) => {
      console.log(action.error);
      state.error = action.error;
    });
  },
});

export const { setExperiences } = experienceStore.actions;
export default experienceStore.reducer;
