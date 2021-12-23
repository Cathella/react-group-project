import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ name, description }) => (
  <tr>
    <th className="mission-name">{name}</th>
    <td className="description">{description}</td>
    <td><span className="badge">Not a Member</span></td>
    <td><button type="button">Join Mission</button></td>
  </tr>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
