import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../redux/missions/missions';

const Mission = (props) => {
  const dispatch = useDispatch();
  const { data } = props;
  const { description, status } = data;
  const id = data.mission_id;
  const name = data.mission_name;

  const joinButton = () => {
    dispatch(joinMission(id));
  };

  const changeStatus = () => {
    if (status === true) {
      return null;
    }
    return joinButton();
  };

  return (
    <tr>
      <td className="mission-name">
        <b>{name}</b>
      </td>
      <td className="description">{description}</td>
      <td>
        <span className="badge">Not a Member</span>
      </td>
      <td><button type="button">Join Mission</button></td>
    </tr>
  );
};

Mission.propTypes = {
  data: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool,
  }).isRequired,
};

export default Mission;
