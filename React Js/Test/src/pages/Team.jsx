import React, { useState } from "react";
import { v4 as uuid } from "uuid"; 


const Team = () => {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "",
    start: "",
    expiry: "",
    weight: "",
    bmi: "",
    fat: "",
  });
  const [searchId, setSearchId] = useState(""); // for checking later

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save profile with unique ID
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid().slice(0, 6); // unique 6-char ID
    const newProfile = { id, ...formData };

    // Save in localStorage

    localStorage.setItem(id, JSON.stringify(newProfile));

    alert(`Profile Saved ✅ Your ID is: ${id}`);
    setProfile(newProfile);
  };

  // Search profile using ID

  const handleSearch = () => {
    const saved = localStorage.getItem(searchId);
    if (saved) {
      setProfile(JSON.parse(saved));
    } else {
      alert("❌ No profile found with this ID");
    }
  };

  return (
    <div className="profileContainer_51">
    
      {/* Profile Search */}

      <div className="searchBox_51">
        <input
          type="text"
          placeholder="Enter your ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Check Profile</button>
      </div>

      {/* Show profile or form */}

      {profile ? (
        <>
          <div className="profileLeft_51">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="profileImage_51"
            />

            {/* through props ( properties) */}
            
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
            <p><b>ID:</b> {profile.id}</p>
          </div>

          <div className="profileRight_51">
            <div className="profileCard_51">
              <h3>Membership Plan</h3>
              <p>Plan: {profile.plan}</p>
              <p>Start: {profile.start}</p>
              <p>Expiry: {profile.expiry}</p>
            </div>

            <div className="profileCard_51">
              <h3>Fitness Progress</h3>
              <p>Weight: {profile.weight}</p>
              <p>BMI: {profile.bmi}</p>
              <p>Body Fat: {profile.fat}</p>
            </div>
          </div>
        </>
      ) : (
        <form className="profileForm_51" onSubmit={handleSubmit}>
          <h2>Enter Profile Details</h2>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="text" name="plan" placeholder="Plan (e.g. Monthly - Annually)" onChange={handleChange} />
          <input type="date" name="start" onChange={handleChange} />
          <input type="date" name="expiry" onChange={handleChange} />
          <input type="text" name="weight" placeholder="Weight (e.g. 72kg)" onChange={handleChange} />
          <input type="text" name="bmi" placeholder="BMI (e.g. 23.5)" onChange={handleChange} />
          <input type="text" name="fat" placeholder="Body Fat %" onChange={handleChange} />

          <button type="submit" className="saveBtn_51">
            Save Profile
          </button>
        </form>
      )}
    </div>
  );
};

export default Team;
