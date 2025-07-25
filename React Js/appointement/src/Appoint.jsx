import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, remove } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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

  // Load from Firebase on mount
  useEffect(() => {
    const appointmentsRef = ref(database, 'appointments');
    const tokenCounterRef = ref(database, 'tokenCounter');
    
    // Load appointments
    onValue(appointmentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const appointmentsArray = Object.values(data);
        setAppointments(appointmentsArray);
      } else {
        setAppointments([]);
      }
      setLoading(false);
    });

    // Load token counter
    onValue(tokenCounterRef, (snapshot) => {
      const counter = snapshot.val();
      if (counter) setTokenCounter(counter);
    });

    return () => {
      // Cleanup if needed
    };
  }, [database]);

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
    setEditIndex(null);
  };

  const saveAppointmentToFirebase = async (appointment) => {
    try {
      await set(ref(database, `appointments/${appointment.id}`), appointment);
      return true;
    } catch (error) {
      console.error("Error saving appointment:", error);
      return false;
    }
  };

  const deleteAppointmentFromFirebase = async (id) => {
    try {
      await remove(ref(database, `appointments/${id}`));
      return true;
    } catch (error) {
      console.error("Error deleting appointment:", error);
      return false;
    }
  };

  const updateTokenCounter = async (newValue) => {
    try {
      await set(ref(database, 'tokenCounter'), newValue);
      return true;
    } catch (error) {
      console.error("Error updating token counter:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.trainer || !formData.date || !formData.time) {
      alert('Please fill all required fields');
      return;
    }

    // Duplicate check
    if (editIndex === null) {
      const duplicate = appointments.find(
        (appt) =>
          appt.phone === formData.phone ||
          (formData.email && appt.email && appt.email === formData.email)
      );
      if (duplicate) {
        alert(`An appointment already exists with ${duplicate.phone === formData.phone ? `phone number ${formData.phone}` : `email ${formData.email}`}.`);
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
        alert(`Another appointment already exists with ${duplicate.phone === formData.phone ? `phone number ${formData.phone}` : `email ${formData.email}`}.`);
        return;
      }
    }

    if (editIndex !== null) {
      const updatedAppointment = formData;
      const success = await saveAppointmentToFirebase(updatedAppointment);
      
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
      
      const saveSuccess = await saveAppointmentToFirebase(newAppointment);
      const counterSuccess = await updateTokenCounter(tokenCounter + 1);
      
      if (saveSuccess && counterSuccess) {
        setTokenCounter(prev => prev + 1);
        alert(`Appointment booked successfully! Your token number is ${newAppointment.token}`);
        clearForm();
      } else {
        alert('Failed to book appointment. Please try again.');
      }
    }
  };

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

    if (autoHideTimer) clearTimeout(autoHideTimer);

    const timer = setTimeout(() => {
      setFilteredAppointment(null);
      setSearchToken('');
      setSearchPhone('');
    }, 10000);

    setAutoHideTimer(timer);
  };

  const handleEdit = () => {
    setFormData(filteredAppointment);
    setEditIndex(filteredAppointment.id);
    setFilteredAppointment(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      const success = await deleteAppointmentFromFirebase(filteredAppointment.id);
      if (success) {
        setFilteredAppointment(null);
      } else {
        alert('Failed to delete appointment. Please try again.');
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading appointments...</div>;
  }

  return (
    <div className="appointment-form-container">
      <h2>{editIndex !== null ? 'Edit Gym Appointment' : 'Book Gym Appointment'}</h2>

      {/* Rest of your JSX remains the same */}
      {/* ... */}
    </div>
  );
};

export default Appoint;