import React from 'react';
import './Profile.css';

const Profile = () => (
  <div className="container">
    <div className="my-profile">
      <section>
        <h2>My Missions</h2>
        <ul>
          <li>Telstar</li>
          <li>SES</li>
          <li>AsiaSat</li>
          <li>ABS</li>
        </ul>
      </section>
      <section>
        <h2>My Rockets</h2>
        <ul>
          <li>Falcon 9</li>
          <li>Falcon Heavy</li>
          <li>Starship</li>
        </ul>
      </section>
    </div>
  </div>
);

export default Profile;
