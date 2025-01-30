import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flightSlice";
import detailReucer from "./slices/detailSlice";

export default configureStore({
  reducer: {
    flight: flightReducer,
    detail: detailReucer,
  },
});
