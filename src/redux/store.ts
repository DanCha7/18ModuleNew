import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import recipesSlice from "./recipes/recipesSlice";
import factsSlice from "./facts/factsSlice";
import combinationsSlice from "./combinations/combinationsSlice";
import historySlice from "./history/historySlice";
import beanSlice from "./bean/beanSlice";
import beansSlice from "./beans/beansSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesSlice,
    facts : factsSlice,
    combinations : combinationsSlice,
    history :  historySlice ,
    bean : beanSlice ,
    beans : beansSlice ,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();