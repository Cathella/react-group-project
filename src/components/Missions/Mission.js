import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ id, name, description }) => (
  <article>
    <p>{id}</p>
    <p>{name}</p>
    <p>{description}</p>
  </article>
);

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
