import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
// import ListProfile from './ListProfile';

const useStyles = makeStyles((theme) => ({
  paperTitle: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const Profile = () => {
  const classes = useStyles();
  const rockets = useSelector((state) => state.rocketsReducer.rockets.reduce((acc, item) => {
    if (item.reserved) return acc.concat({ id: item.id, name: item.rocket_name });
    return acc;
  },
  []));
  const dr = useSelector((state) => (state.dragons.filter((dragon) => dragon.reserved === true)));
  const missions = useSelector((state) => state.missions.reduce((acc, item) => {
    if (item.reserved) return acc.concat({ id: item.mission_id, name: item.mission_name });
    return acc;
  },
  []));

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.paperTitle}>
              <Typography component="h4" variant="h4">
                My profile
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={1}>
              <Typography component="h4" variant="h4">
                My Rockets
              </Typography>
              <ListProfile data={rockets} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={1}>
              <Typography component="h4" variant="h4">
                My Dragons
              </Typography>
              <ListProfile data={dr} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={1}>
              <Typography component="h4" variant="h4">
                My Missions
              </Typography>
              <ListProfile data={missions} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
