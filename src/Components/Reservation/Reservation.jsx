import React, { useState } from 'react';
import './reservation.css'; // Import the corresponding CSS file

const Reservation = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission logic here
    window.alert(`Reservation submitted: name: ${name}, date: ${date}, time: ${time}`);
    // Reset form fields
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <div className="reservation-container">
      <h2>Opening Hours:</h2>
      <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
      <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={handleTimeChange}
          required
        />

        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default Reservation;
