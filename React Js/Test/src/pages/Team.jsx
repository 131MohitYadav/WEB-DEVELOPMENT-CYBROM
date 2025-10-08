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
    image: "", // ✅ store image as Base64
  });
  const [searchId, setSearchId] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Handle text input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result }); // store as Base64
      };
      reader.readAsDataURL(file);
    }
  };

  // Save / Update profile
  const handleSubmit = (e) => {
    e.preventDefault();

    let id = isEditing && profile ? profile.id : uuid().slice(0, 6);
    const newProfile = { id, ...formData };

    localStorage.setItem(id, JSON.stringify(newProfile));

    alert(
      isEditing
        ? "Profile Updated ✅"
        : `Profile Saved ✅ Your ID is: ${id}`
    );

    setProfile(newProfile);
    setIsEditing(false);
  };

  // Search profile
  const handleSearch = () => {
    const saved = localStorage.getItem(searchId);
    if (saved) {
      const parsed = JSON.parse(saved);
      setProfile(parsed);
      setFormData(parsed);
    } else {
      alert("❌ No profile found with this ID");
    }
  };

  // Edit profile
  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
    setProfile(null);
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
              src={profile.image || "/img/Unknown.png"} // ✅ show uploaded image or default
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
            <p className="note">Note: Remember Your Profile ID</p>
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
          <p className="pid">
            If Profile ID already exists, do not enter profile details
          </p>
          <h2>{isEditing ? "Update Profile" : "Enter Profile Details"}</h2>

          {/* ✅ Image Upload Field */}
          <label className="imageUploadLabel_51">
            <span>Choose Profile Image:</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>

          {/* ✅ Image Preview */}
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="profilePreview_51"
            />
          )}

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
            {isEditing ? "Update" : "Save Profile"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Team;
