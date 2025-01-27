import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice, uiSlice } from "./";

export const store = configureStore({
    reducer: { //maneja el estado global de la aplicación
     ui: uiSlice.reducer,
     calendar: calendarSlice.reducer
    }
})