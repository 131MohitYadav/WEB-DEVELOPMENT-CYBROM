import React, { useState } from 'react';

const Appoint = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    trainer: '',
    date: '',
    time: '',
    service: 'personal_training',
    notes: ''
  });

  const [appointments, setAppointments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const trainers = [
    { id: 'trainer1', name: 'Rajesh Kumar (Fitness Expert)' },
    { id: 'trainer2', name: 'Priya Sharma (Yoga Specialist)' },
    { id: 'trainer3', name: 'Vikram Singh (Weightlifting Coach)' }
  ];

  const services = [
    { value: 'personal_training', label: 'Personal Training' },
    { value: 'diet_consultation', label: 'Diet Consultation' },
    { value: 'body_assessment', label: 'Body Assessment' },
    { value: 'group_class', label: 'Group Class' },
    { value: 'rehabilitation', label: 'Rehabilitation' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Update existing
      const updated = [...appointments];
      updated[editIndex] = formData;
      setAppointments(updated);
      setEditIndex(null);
      alert('Appointment updated successfully!');
    } else {
      // Add new
      setAppointments(prev => [...prev, formData]);
      alert(`Appointment booked successfully with ${formData.trainer} on ${formData.date} at ${formData.time}`);
    }
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      trainer: '',
      date: '',
      time: '',
      service: 'personal_training',
      notes: ''
    });
  };

  const handleEdit = (index) => {
    setFormData(appointments[index]);
    setEditIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all appointments?')) {
      setAppointments([]);
    }
  };

  return (
    <div className="appointment-form-container">
      <h2>{editIndex !== null ? 'Edit Gym Appointment' : 'Book Gym Appointment'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="10 digit mobile number"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Type*</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              {services.map(service => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="trainer">Preferred Trainer*</label>
            <select
              id="trainer"
              name="trainer"
              value={formData.trainer}
              onChange={handleChange}
              required
            >
              <option value="">Select Trainer</option>
              {trainers.map(trainer => (
                <option key={trainer.id} value={trainer.name}>
                  {trainer.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date*</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="time">Preferred Time*</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              min="06:00"
              max="21:00"
            />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Special Requirements</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="2"
            />
          </div>
        </div>

        <div className="form-footer">
          <button type="submit" className="submit-btn">
            {editIndex !== null ? 'Update Appointment' : 'Book Appointment'}
          </button>
          <p className="disclaimer">
            *We'll confirm your appointment via call/SMS
          </p>
        </div>
      </form>

      <hr />

      <div className="appointments-list">
        <h3>Booked Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments booked yet.</p>
        ) : (
          <>
            <button className="clear-btn" onClick={handleClearAll}>Clear All Appointments</button>
            <ul>
              {appointments.map((appt, index) => (
                <li key={index} className="appointment-card">
                  <p><strong>Name:</strong> {appt.name}</p>
                  <p><strong>Phone:</strong> {appt.phone}</p>
                  <p><strong>Email:</strong> {appt.email || '-'}</p>
                  <p><strong>Trainer:</strong> {appt.trainer}</p>
                  <p><strong>Service:</strong> {services.find(s => s.value === appt.service)?.label}</p>
                  <p><strong>Date:</strong> {appt.date}</p>
                  <p><strong>Time:</strong> {appt.time}</p>
                  <p><strong>Notes:</strong> {appt.notes || '-'}</p>
                  <button onClick={() => handleEdit(index)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Appoint;
