import { configureStore } from "@reduxjs/toolkit";
import workerReducer from "../features/worker/WorkerSlice";
import BookingReducer from "../features/Booking/BookingSlice";

export const store = configureStore({
  reducer: { worker: workerReducer, booking: BookingReducer },
});
