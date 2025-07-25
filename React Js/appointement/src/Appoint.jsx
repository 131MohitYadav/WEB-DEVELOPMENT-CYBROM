import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3001';

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
  const [searchToken, setSearchToken] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [filteredAppointment, setFilteredAppointment] = useState(null);
  const [autoHideTimer, setAutoHideTimer] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load data from JSON server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appointmentsRes, counterRes] = await Promise.all([
          fetch(`${API_URL}/appointments`),
          fetch(`${API_URL}/tokenCounter`)
        ]);
        
        const appointmentsData = await appointmentsRes.json();
        const counterData = await counterRes.json();
        
        setAppointments(appointmentsData);
        setTokenCounter(counterData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ... (trainers and services arrays remain the same)

  const saveAppointment = async (appointment) => {
    try {
      const method = editIndex !== null ? 'PUT' : 'POST';
      const url = editIndex !== null 
        ? `${API_URL}/appointments/${appointment.id}`
        : `${API_URL}/appointments`;
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointment),
      });
      
      return response.ok;
    } catch (error) {
      console.error("Error saving appointment:", error);
      return false;
    }
  };

  const deleteAppointment = async (id) => {
    try {
      const response = await fetch(`${API_URL}/appointments/${id}`, {
        method: 'DELETE',
      });
      return response.ok;
    } catch (error) {
      console.error("Error deleting appointment:", error);
      return false;
    }
  };

  const updateTokenCounter = async (newValue) => {
    try {
      const response = await fetch(`${API_URL}/tokenCounter`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newValue),
      });
      return response.ok;
    } catch (error) {
      console.error("Error updating token counter:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ... (validation and duplicate checks remain the same)

    if (editIndex !== null) {
      const success = await saveAppointment(formData);
      if (success) {
        alert('Appointment updated successfully!');
        clearForm();
      } else {
        alert('Failed to update appointment. Please try again.');
      }
    } else {
      const newAppointment = {
        ...formData,
        id: crypto.randomUUID(),
        token: tokenCounter,
        createdAt: new Date().toISOString()
      };
      
      const [saveSuccess, counterSuccess] = await Promise.all([
        saveAppointment(newAppointment),
        updateTokenCounter(tokenCounter + 1)
      ]);
      
      if (saveSuccess && counterSuccess) {
        setTokenCounter(prev => prev + 1);
        alert(`Appointment booked successfully! Your token number is ${newAppointment.token}`);
        clearForm();
      } else {
        alert('Failed to book appointment. Please try again.');
      }
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      const success = await deleteAppointment(filteredAppointment.id);
      if (success) {
        setFilteredAppointment(null);
      } else {
        alert('Failed to delete appointment. Please try again.');
      }
    }
  };

  // ... (rest of the component remains the same)
};

export default Appoint;