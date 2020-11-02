import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    center: {
        textAlign: 'center',
    },
    media: {
        height: 150,
    }
}));
  
  export default function FallbackAvatars() {
    const classes = useStyles();
  
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography className={classes.center} gutterBottom variant="h5" component="h2">
                    Student Name
                </Typography>
                </CardContent>
            </CardActionArea>
    </Card>
    );
  }
  