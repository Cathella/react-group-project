import {
  List, ListItem, ListItemText, Divider,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const ListProfile = (props) => {
  const { data } = props;
  return (
    <List>
      {data.map((item) => (
        <div key={item.id}>
          <Divider />
          <ListItem>
            <ListItemText primary={item.name} />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

ListProfile.propTypes = {
  data: PropTypes.isRequired,
};

export default ListProfile;
