import React from "react";
import "./Bookingform.css";
import AttachmentIcon from "@mui/icons-material/Attachment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useForm } from "react-hook-form";
import { closebooking } from "../features/Booking/BookingSlice";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { serverTimestamp } from "firebase/firestore/lite";
import { addDoc, collection } from "firebase/firestore/lite";

const Bookingform = () => {
  const dispatch = useDispatch();

  const closeBookingHandler = () => {
    dispatch(closebooking());
  };

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const addjob = collection(db, "bookings");
    addDoc(addjob, {
      fullname: data.fullname,
      address: data.address,
      date: data.date,
      description: data.description,
      timestamp: serverTimestamp(),
    })
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    reset();
  };

  return (
    <div className="booking-container">
      <div className="booking">
        <div className="person">
          <div className="person-image">
            <AccountCircleIcon className="avatar-icon" />
          </div>
          <h2>name</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-worker">
          <h3>Personal Details</h3>
          <div className="booking-form">
            <input
              name="fullname"
              type="text"
              placeholder="Full name"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="fullname">Fullname is required</span>
            )}
            <input
              name="address"
              type="text"
              placeholder="Address"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="address">Address is required</span>
            )}
          </div>
          <h3>Booking Details</h3>
          <div className="booking-details">
            <div className="details-right">
              <input
                name="date"
                type="text"
                placeholder="Booking date"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <span className="date">Booking Date is required</span>
              )}
              <a className="attach">
                <AttachmentIcon className="attach-icon" />
                <div className="include">Include an image</div>
              </a>
            </div>
            <textarea
              name="description"
              placeholder="Description the problem"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && (
              <span className="description">description is required</span>
            )}
          </div>
          <div className="booking-btn">
            <button onClick={handleSubmit(onSubmit)} className="btn">
              Book
            </button>
            <button className="btn" onClick={closeBookingHandler}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bookingform;
