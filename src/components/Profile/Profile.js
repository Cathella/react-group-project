import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const allMissions = useSelector((state) => state.missions);

  const missionsJoined = allMissions.filter((mission) => {
    if (mission.status === true) {
      return mission;
    }
    return null;
  });

  return (
    <div className="container">
      <div className="my-profile">
        <section>
          <h2>My Missions</h2>
          <ul>
            {/* <li>Telstar</li>
            <li>SES</li>
            <li>AsiaSat</li>
            <li>ABS</li> */}
            {
              missionsJoined.map((mission) => (
                <li key={mission.mission_id}>
                  {mission.mission_name}
                </li>
              ))
            }
          </ul>
        </section>
        <section>
          <h2>My Rockets</h2>
        </section>
      </div>
    </div>
  );
};

export default Profile;
