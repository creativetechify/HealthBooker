import React, { useState } from "react";
import "../styles/bookappointment.css";
import axios from "axios";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { CardElement } from "react-stripe-elements";

const BookAppointment = ({ setModalOpen, ele }) => {
  const [formDetails, setFormDetails] = useState({
    date: "",
    time: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const bookAppointment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await toast.promise(
        axios.post(
          "/appointment/bookappointment",
          {
            doctorId: ele?.userId?._id,
            date: formDetails.date,
            time: formDetails.time,
            doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Appointment booked successfully",
          error: "Unable to book appointment",
          loading: "Booking appointment...",
        }
      );
      setModalOpen(false);
    } catch (error) {
      return error;
    }
  };

  const bookAppointmenttest = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Create a Payment Intent on the server
      const paymentResponse = await axios.post(
        "/payment/create-payment",
        {
          amount: 200000, // The amount in cents (e.g., 2000 for ₹20)
          currency: "inr", // The currency
          // Additional payment details if needed
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // Step 2: If the payment intent is created successfully, proceed to book the appointment
      if (paymentResponse.data.success) {
        const { data } = await toast.promise(
          axios.post(
            "/appointment/bookappointment",
            {
              doctorId: ele?.userId?._id,
              date: formDetails.date,
              time: formDetails.time,
              doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
              paymentIntentId: paymentResponse.data.paymentIntent.id, // Pass the payment intent ID to link the payment with the appointment
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          ),
          {
            success: "Appointment booked successfully",
            error: "Unable to book appointment",
            loading: "Booking appointment...",
          }
        );

        // Step 3: If the appointment is booked successfully, close the modal
        if (data.success) {
          setModalOpen(false);
        } else {
          // Handle appointment booking errors here
          // You might want to consider rolling back the payment in case of booking failure
        }
      } else {
        // Handle payment creation errors here
      }
    } catch (error) {
      // Handle general errors here
      return error;
    }
  };

  return (
    <>
      <div className="modal flex-center">
        <div className="modal__content">
          <h2 className="page-heading">Book Appointment</h2>
          <IoMdClose
            onClick={() => {
              setModalOpen(false);
            }}
            className="close-btn"
          />
          <div className="register-container flex-center book">
            <form
              action="https://formsubmit.co/learnwithfun4567@gmail.com"
              method="POST"
              className="register-form"
            >
              <input
                type="date"
                name="date"
                className="form-input"
                value={formDetails.date}
                onChange={inputChange}
              />
              <input
                type="time"
                name="time"
                className="form-input"
                value={formDetails.time}
                onChange={inputChange}
              />

              <button
                type="submit"
                className="btn form-btn"
                onClick={bookAppointment}
              >
                book
              </button>
              <button
                type="submit"
                className="btn form-btn"
                onClick={bookAppointment}
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
