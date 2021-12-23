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
        {
          missions.map((mission) => (
            <Mission
              key={mission.mission_id}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Missions;
