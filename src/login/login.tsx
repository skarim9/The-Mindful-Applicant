import React, {useState} from 'react';
import {auth, signInWithGoogle} from '../firebase-db/config'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, 
  ThemeProvider, 
  createMuiTheme,
  withStyles,
  Theme,
  fade,
  createStyles } from '@material-ui/core/styles';
import { relative } from 'path';
import { url } from 'inspector';
import logo from '../icons/welcome_logo.png';
import {ReactComponent as Mlogo} from '../icons/logo_black.svg';
import {ReactComponent as Titlelogo} from '../icons/mindfulwordmarkwhite.svg';
import {  } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import '../App.css';
import InputLabel from '@material-ui/core/InputLabel';
import { withWidth } from '@material-ui/core';
import { useStyles } from './LoginStyles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://www.mindfulapplicant.com/">
//         The Mindful Applicant
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },});

  const BootstrapInput = withStyles((theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 6,
      position: 'initial',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #252525',
      fontSize: 13,
      fontWeight: 'normal',
      width: '1',
      padding: '10px 12vw 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }),
)(InputBase);


export default function SignIn() {
  const classes = useStyles();

  const [user, setUser] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const { email, password } = user;
    await auth.signInWithEmailAndPassword(email, password);
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={6} md={9} className={classes.image} >
          <div className={classes.title}>
            {/* <p className={classes.titleText}>The Mindful Applicant</p> */}
            <Titlelogo className = {classes.titleSize}/>
          </div>
          <div className={classes.ellipse}>
            <img src={logo} alt="Welcome logo" className= {classes.logo}/>
          </div>
          <div className={classes.captionLogo}>
            <p className= {classes.captionText}><span className= {classes.captionBlock}>Helping students pave intentional,</span><span className= {classes.captionBlock}>joyful paths to college and career</span></p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} component={Paper} elevation={6} square className={classes.right}>
          <div className={classes.paper}>
            <Avatar className={`${classes.avatar} ${classes.large}`}>
              <Mlogo />
            </Avatar>
            <Typography component="h1" variant="h5" className={classes.signinMargin}>
              Sign in
            </Typography>
            <form className={classes.form} noValidate onSubmit={onSubmit}>
              {/* <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Email
                </InputLabel>
                <BootstrapInput id="email" placeholder="Enter your email address" autoComplete="None"/>
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Password
                </InputLabel>
                <BootstrapInput id="password" placeholder="Enter your password" autoComplete="None"/>
              </FormControl> */}
              <TextField
                className={classes.textField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                label="Email Address"
                placeholder="Enter your email address"
                name="email"
                autoComplete="email"
                onChange={onChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={onChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                href="/profile"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" underline="none">
                    Forgot your password?
                  </Link>
                  <p className={classes.signupP}>Don't have an account? 
                  <Link href="/signup" variant="body2" className={classes.signupLink} underline="none">
                    {" Sign Up"}
                  </Link>
                </p>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
      
  );
}