import "../styles/doctorcard.css";
import React, { useState } from "react";
import BookAppointment from "../components/BookAppointment";
import { toast } from "react-hot-toast";

const DoctorCard = ({ ele }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleModal = () => {
    if (token == "") {
      return toast.error("You must log in first");
    }
    setModalOpen(true);
  };

  return (
    <div className={`card`}>
      <div className={`card-img flex-center`}>
        <img
          src={
            ele?.userId?.pic ||
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="profile"
        />
      </div>
      <h3 className="card-name">
        Mr. {ele?.userId?.firstname + " " + ele?.userId?.lastname}
      </h3>
      <p className="certification">
        <strong>Certification: </strong>
        {ele?.certification}
      </p>
      <p className="specialization">
        <strong>Specialization: </strong>
        {ele?.specialization}
      </p>
      <p className="experience">
        <strong>Experience: </strong>
        {ele?.experience}yrs
      </p>
      <p className="phone">
        <strong>Phone: </strong>
        {ele?.userId?.mobile}
      </p>
      <p className="fees">
        <strong>Fees per consultation: </strong>₹ {ele?.fees}
      </p>
      <p className="timing1">
        <strong>Session Duration: </strong>
        {ele?.timing1}
      </p>

      <button className="btn appointment-btn" onClick={handleModal}>
        Book Appointment
      </button>
      {modalOpen && <BookAppointment setModalOpen={setModalOpen} ele={ele} />}
    </div>
  );
};

export default DoctorCard;
