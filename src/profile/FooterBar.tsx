import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Todo from './Todo'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={4}>
            <Grid item xs={3}>
                <Todo />
            </Grid>
            <Grid item xs={3}>
                <Todo />
            </Grid>
            <Grid item xs={3}>
                <Todo />
            </Grid>
                <Grid item xs={3}>
            <Todo />
            </Grid>
        </Grid>
      </div>
  );
}
