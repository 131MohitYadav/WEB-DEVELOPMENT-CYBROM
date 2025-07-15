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
  const [tokenCounter, setTokenCounter] = useState(1);

  // Search states
  const [searchToken, setSearchToken] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [filteredAppointment, setFilteredAppointment] = useState(null);

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

    // Duplicate Check
    if (editIndex === null) {
      const duplicate = appointments.find(
        (appt) =>
          appt.phone === formData.phone ||
          (formData.email && appt.email && appt.email === formData.email)
      );
      if (duplicate) {
        alert(
          `An appointment already exists with ${
            duplicate.phone === formData.phone ? `phone number ${formData.phone}` : `email ${formData.email}`
          }.`
        );
        return;
      }
    } else {
      const duplicate = appointments.find(
        (appt, idx) =>
          idx !== editIndex &&
          (appt.phone === formData.phone ||
           (formData.email && appt.email && appt.email === formData.email))
      );
      if (duplicate) {
        alert(
          `Another appointment already exists with ${
            duplicate.phone === formData.phone ? `phone number ${formData.phone}` : `email ${formData.email}`
          }.`
        );
        return;
      }
    }

    if (editIndex !== null) {
      const updated = [...appointments];
      updated[editIndex] = formData;
      setAppointments(updated);
      setEditIndex(null);
      alert('Appointment updated successfully!');
    } else {
      const newAppointment = {
        ...formData,
        id: crypto.randomUUID(),
        token: tokenCounter
      };
      setAppointments(prev => [...prev, newAppointment]);
      setTokenCounter(prev => prev + 1);
      alert(`Appointment booked successfully! Your token number is ${newAppointment.token}`);
    }

    clearForm();

    setTimeout(() => {
      document.getElementById('appointments-search')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all appointments?')) {
      setAppointments([]);
      setTokenCounter(1);
      setFilteredAppointment(null);
    }
  };

  // ✅ NEW — Auto-hide after 10 seconds
  const handleSearch = () => {
    const tokenNum = parseInt(searchToken, 10);
    let found = null;

    if (!isNaN(tokenNum)) {
      found = appointments.find(appt => appt.token === tokenNum);
    }

    if (!found && searchPhone.trim() !== '') {
      found = appointments.find(appt => appt.phone === searchPhone.trim());
    }

    if (!found) {
      alert('No appointment found with this token number or phone number.');
      return;
    }

    setFilteredAppointment(found);

    // Auto-hide after 10 seconds
    setTimeout(() => {
      setFilteredAppointment(null);
      setSearchToken('');
      setSearchPhone('');
    }, 10000);
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
          <p className="disclaimer">*We’ll confirm your appointment via call/SMS</p>
        </div>
      </form>

      <hr />

      <div id="appointments-search" className="appointments-search">
        <h3>Check Your Appointment</h3>
        <input
          type="number"
          placeholder="Enter your token number"
          value={searchToken}
          onChange={(e) => setSearchToken(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Or enter mobile number"
          value={searchPhone}
          onChange={(e) => setSearchPhone(e.target.value)}
          pattern="[0-9]{10}"
        />
        <button onClick={handleSearch}>Show Appointment</button>
      </div>

      <div className="appointments-list">
        {filteredAppointment ? (
          <>
            <h3>Your Appointment Details</h3>
            <div className="appointment-card">
              <p><strong>Token:</strong> {filteredAppointment.token}</p>
              <p><strong>Name:</strong> {filteredAppointment.name}</p>
              <p><strong>Phone:</strong> {filteredAppointment.phone}</p>
              <p><strong>Email:</strong> {filteredAppointment.email || '-'}</p>
              <p><strong>Trainer:</strong> {filteredAppointment.trainer}</p>
              <p><strong>Service:</strong> {services.find(s => s.value === filteredAppointment.service)?.label}</p>
              <p><strong>Date:</strong> {filteredAppointment.date}</p>
              <p><strong>Time:</strong> {filteredAppointment.time}</p>
              <p><strong>Notes:</strong> {filteredAppointment.notes || '-'}</p>
            </div>
            <p style={{color: 'red'}}><em>Details will hide automatically after 10 seconds.</em></p>
          </>
        ) : (
          <p>No appointment to show. Enter valid token or phone number.</p>
        )}

        {appointments.length > 0 && (
          <button className="clear-btn" onClick={handleClearAll}>
            Clear All Appointments
          </button>
        )}
      </div>
    </div>
  );
};

export default Appoint;
