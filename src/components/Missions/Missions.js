import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, listMissions } from '../../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    listMissions().then((result) => dispatch(getMissions(result)));
  }, [dispatch]);

  return (
    <div className="container">
      <section>
        <table className="table">
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              missions.map((mission) => (
                <Mission
                  key={mission.mission_id}
                  id={mission.mission_id}
                  name={mission.mission_name}
                  description={mission.description}
                />
              ))
            }
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Missions;
