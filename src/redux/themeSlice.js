// src/slices/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  background: "#f5f5f5", // ✅ default global background color
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      state.background = state.mode === "dark" ? "#121212" : "#f5f5f5";
    },
    setBackground: (state, action) => {
      state.background = action.payload; // ✅ manually set background
    },
  },
});

export const { toggleTheme, setBackground } = themeSlice.actions;
export default themeSlice.reducer;
