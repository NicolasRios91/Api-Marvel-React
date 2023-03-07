import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "../features/characters";
import comicsSlice from "../features/comics";

const store = configureStore({
  reducer: {
    characters: characterSlice,
    comics: comicsSlice,
  },
});

export default store;
