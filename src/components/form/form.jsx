import React, { useState } from "react";
import "./form.css";

const FormField = ({ handleClose, filteredObj }) => {
  const [user, setUser] = useState({ name: "", age: "" });

  const handleBookingDetails = () => {
    localStorage.setItem("user");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-field">
      <p>show : {filteredObj.show.name}</p>
      <p>language : {filteredObj.show.language}</p>
      <label>
        name <input value={user.name} name="name" onChange={handleChange} />
      </label>
      <label>
        age <input value={user.age} name="age" onChange={handleChange} />
      </label>
      <button onClick={handleBookingDetails}>Booked</button>
      <button onClick={handleClose}>X</button>
    </div>
  );
};

export default FormField;
