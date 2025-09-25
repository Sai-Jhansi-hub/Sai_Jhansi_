// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./redux/themeSlice"; // ✅ make sure this path is correct

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
