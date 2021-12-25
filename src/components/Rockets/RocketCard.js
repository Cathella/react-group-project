import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    flex: '1 1 auto',
  },
  cover: {
    width: 450,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const RocketCard = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={data.flickr_images[0]}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {data.rocket_name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {data.description}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <CardActions>
            <Button size="small" color="primary">
              Reserve Rocket
            </Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
};

RocketCard.propTypes = {
  data: PropTypes.isRequired,
};

export default RocketCard;
