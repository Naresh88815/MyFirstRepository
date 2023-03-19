import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/bookings', { name, email, date, time, partySize })
      .then((response) => {
        console.log(response);
        alert('Booking submitted successfully');
      })
      .catch((error) => {
        console.error(error);
        alert('Error submitting booking');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </div>
      <div>
        <label>Time:</label>
        <input type="time" value={time} onChange={(event) => setTime(event.target.value)} />
      </div>
      <div>
        <label>Party size:</label>
        <input type="number" value={partySize} onChange={(event) => setPartySize(event.target.value)} />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;




