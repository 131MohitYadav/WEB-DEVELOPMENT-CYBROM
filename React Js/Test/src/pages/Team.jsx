import React, { useState, useEffect } from "react";
import axios from "axios";


const Team = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    plan: "",
    start: "",
    expiry: "",
    weight: "",
    bmi: "",
    fat: "",
  });

  // Fetch profile data from backend (GET)
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/profile")
      .then((res) => {
        if (res.data) {
          setProfile(res.data);
        }
      })
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  // Save profile data to backend (POST)
  const saveProfile = () => {
    axios
      .post("http://localhost:5000/api/profile", profile)
      .then((res) => alert(res.data.message))
      .catch((err) => console.error("Error saving profile:", err));
  };

  return (
    <div className="profileContainer_51">
      {/* Left Section */}
      <div className="profileLeft_51">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profileImage_51"
        />
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          placeholder="Full Name"
        />
        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="Email"
        />
        <button className="editBtn_51" onClick={saveProfile}>
          Save Profile
        </button>
      </div>

      {/* Right Section */}
      <div className="profileRight_51">
        <div className="profileCard_51">
          <h3>Membership Plan Details</h3>
          <input
            type="text"
            value={profile.plan}
            onChange={(e) => setProfile({ ...profile, plan: e.target.value })}
            placeholder="Plan"
          />
          <input
            type="text"
            value={profile.start}
            onChange={(e) => setProfile({ ...profile, start: e.target.value })}
            placeholder="Start Date"
          />
          <input
            type="text"
            value={profile.expiry}
            onChange={(e) => setProfile({ ...profile, expiry: e.target.value })}
            placeholder="Expiry Date"
          />
        </div>

        <div className="profileCard_51">
          <h3>Fitness Progress</h3>
          <input
            type="text"
            value={profile.weight}
            onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
            placeholder="Weight"
          />
          <input
            type="text"
            value={profile.bmi}
            onChange={(e) => setProfile({ ...profile, bmi: e.target.value })}
            placeholder="BMI"
          />
          <input
            type="text"
            value={profile.fat}
            onChange={(e) => setProfile({ ...profile, fat: e.target.value })}
            placeholder="Body Fat %"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
