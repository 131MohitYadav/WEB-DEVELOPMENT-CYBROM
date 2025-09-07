import React, { useState } from "react";


const Team = () => {
  // Profile state (null = no profile yet)
  const [profile, setProfile] = useState(null);

  // Form data state
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

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData); // show data only after submit
    localStorage.setItem("profileData", JSON.stringify(formData)); // optional: save in storage
  };

  return (
    <div className="profileContainer_51">
      {/* Agar profile set hai to details dikhao */}
      {profile ? (
        <>
          <div className="profileLeft_51">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="profileImage_51"
            />
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
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
        // Agar profile empty hai to form dikhao
        <form className="profileForm_51" onSubmit={handleSubmit}>
          <h2>Enter Profile Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="plan"
            placeholder="Plan (e.g. Gold - Monthly)"
            onChange={handleChange}
          />
          <input
            type="date"
            name="start"
            onChange={handleChange}
          />
          <input
            type="date"
            name="expiry"
            onChange={handleChange}
          />
          <input
            type="text"
            name="weight"
            placeholder="Weight (e.g. 72kg)"
            onChange={handleChange}
          />
          <input
            type="text"
            name="bmi"
            placeholder="BMI (e.g. 23.5)"
            onChange={handleChange}
          />
          <input
            type="text"
            name="fat"
            placeholder="Body Fat %"
            onChange={handleChange}
          />

          <button type="submit" className="saveBtn_51">
            Save 
          </button>
        </form>
      )}
    </div>
  );
};

export default Team;
