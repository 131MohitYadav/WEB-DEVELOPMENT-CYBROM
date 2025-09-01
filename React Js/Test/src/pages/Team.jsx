import React from "react";


const Team = () => {
  return (
    <div className="profileContainer_51">
      {/* Left Section */}
      <div className="profileLeft_51">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profileImage_51"
        />
        <h2 className="profileName_51">Mohit Yadav</h2>
        <p className="profileEmail_51">Mohit@gmail.com</p>
        <button className="editBtn_51">Edit Profile</button>
      </div>

      {/* Right Section */}
      <div className="profileRight_51">
        <div className="profileCard_51">
          <h3>Membership Details</h3>
          <p>Plan: <strong>Gold - Monthly</strong></p>
          <p>Start Date: 01 Aug 2025</p>
          <p>Expiry Date: 31 Aug 2025</p>
          <button className="renewBtn_51">Renew Plan</button>
        </div>

        <div className="profileCard_51">
          <h3>Fitness Progress</h3>
          <p>Weight: 72kg</p>
          <p>BMI: 23.5</p>
          <p>Body Fat: 18%</p>
        </div>

        <div className="profileCard_51">
          <h3>Upcoming Classes</h3>
          <ul>
            <li>Yoga - 3rd Sep, 7AM</li>
            <li>Zumba - 5th Sep, 6PM</li>
            <li>Personal Training - 8th Sep, 5PM</li>
          </ul>
        </div>

        <div className="profileCard_51">
          <h3>Settings</h3>
          <button className="changePassBtn_51">Change Password</button>
          <button className="logoutBtn_51">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Team;
