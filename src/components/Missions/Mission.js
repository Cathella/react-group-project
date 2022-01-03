import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const Mission = (props) => {
  const { data } = props;
  const name = data.mission_name;
  const id = data.mission_id;
  const { description, status } = data;
  const dispatch = useDispatch();

  const joinButton = () => {
    dispatch(joinMission(id));
  };

  const leaveButton = () => {
    dispatch(leaveMission(id));
  };

  const changeStatus = () => {
    if (status === true) {
      leaveButton();
    } else {
      joinButton();
    }
  };

  return (
    <tr>
      <td className="mission-name">
        <b>{name}</b>
      </td>
      <td className="description">{description}</td>
      <td>
        <span className={status ? 'badge-active' : 'badge'}>
          {
            status ? 'Active Member' : 'NOT A MEMBER'
          }
        </span>
      </td>
      <td>
        <button
          type="button"
          className={status ? 'button-active' : 'button-join'}
          onClick={changeStatus}
        >
          <span>
            {
              status ? 'Leave Mission' : 'Join Mission'
            }
          </span>
        </button>
      </td>
    </tr>
  );
};

// Mission.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   status: PropTypes.bool.isRequired,
// };

Mission.propTypes = {
  data: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool,
  }).isRequired,
};

export default Mission;
