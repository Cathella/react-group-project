import React, { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { fetchRockets } from '../../redux/rockets/rockets';
import RocketCard from './RocketCard';

const useStyles = makeStyles((theme) => ({
  paperTitle: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const index = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.paperTitle}>
              <Typography component="h4" variant="h4">
                Rockets
              </Typography>
            </div>
          </Grid>
          {rockets.map((rocket) => (
            <Grid item xs={12} key={rocket.id}>
              <RocketCard data={rocket} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default index;
