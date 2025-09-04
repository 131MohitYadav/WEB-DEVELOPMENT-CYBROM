import React, { useState, useEffect } from "react";


const Team = () => {
  const [profile, setProfile] = useState({
    name: "Mohit Yadav",
    email: "mohit@gmail.com",
    plan: "Gold - Monthly",
    start: "01 Aug 2025",
    expiry: "31 Aug 2025",
    weight: "72kg",
    bmi: "23.5",
    fat: "18%",
  });

  // Load from localStorage if available
  useEffect(() => {
    const savedProfile = localStorage.getItem("profileData");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Save into localStorage
  const saveProfile = () => {
    localStorage.setItem("profileData", JSON.stringify(profile));
    alert("Profile Saved ✅");
  };

  return (
    <div className="profileContainer_51">
      <div className="profileLeft_51">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profileImage_51"
        />
        <h2>{profile.name}</h2>
        <p>{profile.email}</p>
        <button className="editBtn_51" onClick={saveProfile}>
          Save Profile
        </button>
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
    </div>
  );
};

export default Team;
