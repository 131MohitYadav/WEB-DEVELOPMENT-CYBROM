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
    console.log('Appointment Booked:', formData);
    // Add your form submission logic here (API call, etc.)
    alert(`Appointment booked successfully with ${formData.trainer} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div className="appointment-form-container">
      <h2>Book Gym Appointment</h2>
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
            Book Appointment
          </button>
          <p className="disclaimer">
            *We'll confirm your appointment via call/SMS
          </p>
        </div>
      </form>
    </div>
  );
};

export default Appoint;