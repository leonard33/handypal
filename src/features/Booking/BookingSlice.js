import { createSlice } from "@reduxjs/toolkit";

export const BookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookingstateopen: false,
  },
  reducers: {
    bookworker: (state) => {
      state.bookingstateopen = true;
    },
    closebooking: (state) => {
      state.bookingstateopen = false;
    },
  },
});

export const { bookworker, closebooking } = BookingSlice.actions;
export const selectformBooking = (state) => state.booking.bookingstateopen;

export default BookingSlice.reducer;
