import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listMissions, getMissions } from '../../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    listMissions().then((result) => dispatch(getMissions(result)));
  }, []);

  return (
    <div className="container">
      <section>
        <table className="table">
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th aria-label="none" />
            </tr>
          </thead>
          <tbody>
            {
              missions.map((mission) => (
                <Mission
                  key={missions.id}
                  data={mission}
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
