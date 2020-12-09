import React, { useContext,useState } from 'react';
import {useStyles} from './SignupStyles';
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
import {auth, generateUserDocument, signInWithGoogle} from '../firebase-db/config'


//   const BootstrapInput = withStyles((theme) =>
//   createStyles({
//     root: {
//       'label + &': {
//         marginTop: theme.spacing(3),
//       },
//     },
//     input: {
//       borderRadius: 6,
//       position: 'initial',
//       backgroundColor: theme.palette.common.white,
//       border: '1px solid #252525',
//       fontSize: 13,
//       fontWeight: 'normal',
//       width: '1',
//       padding: '10px 12vw 10px 12px',
//       transition: theme.transitions.create(['border-color', 'box-shadow']),
//       '&:focus': {
//         boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//         borderColor: theme.palette.primary.main,
//       },
//     },
//   }),
// )(InputBase);



const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },});


export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [grade, setGrade] = useState("");
  const [school, setSchool] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event: { preventDefault: () => void; }, email: string, password: string) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName,email,school,grade});
    }
    catch(error){
      console.log(`Error Signing up with email and password ${error}`);
    }
      
    setEmail("");
    setPassword("");
    setDisplayName("");
    setSchool("");
    setGrade("");
  };
  const onChangeHandler = (event: any) => {
    const { name, value } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    } else if (name=== "school"){
      setSchool(value);
    }
    else if (name==="grade"){
      setGrade(value);
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={6} md={9} className={classes.image} >
          <div className={classes.title}>
            {/* <p className={classes.titleText}>The Mindful Applicant</p> */}
            <Titlelogo/>
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
              <Mlogo/>
            </Avatar>
            <Typography component="h1" variant="h5" className={classes.signinMargin}>
              Sign Up
            </Typography>
            <form className={classes.form} noValidate >
              {/* <FormControl className={classes.margin}> */}
              <TextField
                className={classes.textField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                label="Your Name"
                placeholder="Enter your name"
                name="displayName"
                value={displayName}
                onChange={onChangeHandler}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                name="email"
                label="Your email"
                type="email"
                value={email}
                onChange={onChangeHandler}
              />
              <TextField
                className={classes.textField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                label="Your school"
                placeholder="Enter your school"
                name="school"
                value={school}
                onChange={onChangeHandler}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                name="grade"
                label="Your Grade"
                value={grade}
                onChange={onChangeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                name="password"
                label="Your Password"
                type="password"
                value={password}
                onChange={onChangeHandler}
              />

                {/* <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Your Name
                </InputLabel>
                <BootstrapInput id="name" placeholder="Enter your full name" autoComplete="off" type="text"/>
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Email
                </InputLabel>
                <BootstrapInput id="email" placeholder="Enter your email address" autoComplete="off"/>
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Your School
                </InputLabel>
                <BootstrapInput id="school" placeholder="Enter your current school" autoComplete="off"/>
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Your Grade
                </InputLabel>
                <BootstrapInput id="grade" placeholder="Enter your current grade"/>
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Choose a Password
                </InputLabel>
                <BootstrapInput id="password" placeholder="Enter desired password" autoComplete="off" type="password"/>
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Confirm your password
                </InputLabel>
                <BootstrapInput id="password_confirm" placeholder="Re-type your password" autoComplete="off" type="password"/>
              </FormControl> */}
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={event => {
                  createUserWithEmailAndPasswordHandler(event, email, password);
                }}
                href="/profile"
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" underline="none">
                    Forgot your password?
                  </Link>
                  

                  <p className={classes.signupP}>Already have an account? 
                  <Link href="/signin" variant="body2" className={classes.signupLink} underline="none">
                    {" Sign In"}
                  </Link>
                  
                </p>
                </Grid>
                
              </Grid>
              <button onClick = {() => { signInWithGoogle(); } }>
          Sign in with Google
        </button>
            </form>
          </div>
          
        </Grid>
        
      </Grid>
    </ThemeProvider>
      
  );
}