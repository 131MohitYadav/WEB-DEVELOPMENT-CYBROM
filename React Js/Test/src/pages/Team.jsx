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
  const [searchId, setSearchId] = useState("");
  const [isEditing, setIsEditing] = useState(false); // ✅ check edit mode

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save / Update profile
  const handleSubmit = (e) => {
    e.preventDefault();

    let id;
    if (isEditing && profile) {
      // ✅ if editing, keep same ID
      id = profile.id;
    } else {
      // ✅ new profile
      id = uuid().slice(0, 6);
    }

    const newProfile = { id, ...formData };

    // Save in localStorage
    localStorage.setItem(id, JSON.stringify(newProfile));

    alert(
      isEditing
        ? "Profile Updated ✅"
        : `Profile Saved ✅ Your ID is: ${id}`
    );

    setProfile(newProfile);
    setIsEditing(false);
  };

  // Search profile using ID
  const handleSearch = () => {
    const saved = localStorage.getItem(searchId);
    if (saved) {
      const parsed = JSON.parse(saved);
      setProfile(parsed);
      setFormData(parsed); // ✅ also keep in formData
    } else {
      alert("❌ No profile found with this ID");
    }
  };

  // Edit profile
  const handleEdit = () => {
    setFormData(profile); // pre-fill form
    setIsEditing(true);
    setProfile(null); // hide profile, show form
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
      {profile && !isEditing ? (
        <>
          <div className="profileLeft_51">
            <img
              src="/img/Unknown.png"
              alt="Profile"
              className="profileImage_51"
            />
            <h2>{profile.name}</h2>
            <p>
              <b>E-MAIL: </b>
              {profile.email}
            </p>
            <p>
              <b>ID:</b> {profile.id}
            </p>
            <p className="note">Note : Remember Your Profile Id</p>
            <button className="editBtn_51" onClick={handleEdit}>
              Edit Profile
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
        </>
      ) : (
        <form className="profileForm_51" onSubmit={handleSubmit}>
          <p className="pid">If Profile Id already exists , do not enter profile details</p>
          <h2>{isEditing ? "Update Profile" : "Enter Profile Details"}</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="plan"
            value={formData.plan}
            placeholder="Plan (e.g. Monthly - Annually)"
            onChange={handleChange}
          />
          <input
            type="date"
            name="start"
            value={formData.start}
            onChange={handleChange}
          />
          <input
            type="date"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
          />
          <input
            type="text"
            name="weight"
            value={formData.weight}
            placeholder="Weight (e.g. 72kg)"
            onChange={handleChange}
          />
          <input
            type="text"
            name="bmi"
            value={formData.bmi}
            placeholder="BMI (e.g. 23.5)"
            onChange={handleChange}
          />
          <input
            type="text"
            name="fat"
            value={formData.fat}
            placeholder="Body Fat %"
            onChange={handleChange}
          />

          <button type="submit" className="saveBtn_52">
            {isEditing ? "Update " : "Save Profile"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Team;
