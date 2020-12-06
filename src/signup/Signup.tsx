import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
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
import {auth, generateUserDocument, signInWithGoogle} from '../firebase-db/config';


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



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    overflowX: "hidden",
  },
  image: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#6B9BC0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: "#FFFFFF",
    position: 'relative',
  },
  right: {
    width: "100%",
    position: "relative",
  },
  paper: {
    margin: theme.spacing(9, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    left: '2.5vw',
    [theme.breakpoints.down('sm')]: {
      top: '-1.5vh',
    },
    [theme.breakpoints.up('md')]: {
      top: '-2.6vh',
    },
    [theme.breakpoints.up('lg')]: {
      top: '-3.5vh'
    },
    [theme.breakpoints.up('xl')]: {
      top: '-2.5vh',
    },
    
  },
  titleSize: {
    width: "65em",
  },
  ellipse: {
    borderRadius: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      height: "282px",
      width: "244.6px",
    },
    [theme.breakpoints.up('md')]: {
      height: "364px",
      width: "315.75px",
    },
    [theme.breakpoints.up('lg')]: {
      height: "440px",
      width: "381.7px",
    },
    [theme.breakpoints.up('xl')]: {
      height: "480px",
      width: "427px",
    },
    borderRadius: '100%',
  },
  captionLogo: {
    marginTop: "8%",
    position:'relative',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, 8%)',
  },
  captionText: {
    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.2',
      fontSize: '26px',
    },
    [theme.breakpoints.up('md')]: {
      lineHeight: '1.4',
      fontSize: '28px',
    },
    [theme.breakpoints.up('lg')]: {
      lineHeight: '1.6',
      fontSize: '31px',
    },
    [theme.breakpoints.up('xl')]: {
      lineHeight: '1.8',
      fontSize: '35px',
    },
  },
  captionBlock: {
    display: 'block',
  },
  margin: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(2),
    borderRadius: '0',
    border: '4px solid #252525',
    boxSizing: 'border-box',
    color: "#252525",
    backgroundColor: "#FFFFFF",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  signinMargin: {
    marginTop: theme.spacing(-1),
    marginBottom: theme.spacing(3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  textField: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#252525"
    },
  },
  inputLabel: {
    fontSize: 20,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#6B9BC0',
    fontFamily: "Montserrat",
    borderRadius: 6,
    width: '90%',
    '&:hover': {
      backgroundColor: "#DBD8D4",
      color: "#6B9BC0",
    },
  },
  signupP: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: '17px',
    position: "relative",
    bottom: '-0.5vh',
    justifyContent: 'center',
    marginBottom: "25px",
  },
  signupLink: {
    fontSize: 16,
  },
  box: {
    position: "relative",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [newUser,setUSer] = useState<{displayName:string,email:string,password:string, grade: string | number, school: string}>({displayName:"",email:"",password:"", grade:"", school:""});

  const {displayName,email,password, grade, school}=newUser;


  const onChange =(e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUSer({ ...newUser,[name]:value });
  }

  const onSubmit = async (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const {user} =  await auth.createUserWithEmailAndPassword(newUser?.email,newUser.password);
    if(user) {
      await generateUserDocument(user,{ displayName:newUser.displayName });
      setUSer({displayName:"",email:"",password:"", grade:"", school:""});
    }
  }

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
            <form className={classes.form} noValidate onSubmit={onSubmit}>
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Your Name
                </InputLabel>
                <BootstrapInput id="name" placeholder="Enter your full name" autoComplete="off" type="text" onChange={onChange} fullWidth value={displayName}/>
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Email
                </InputLabel>
                <BootstrapInput id="email" placeholder="Enter your email address" autoComplete="off" type="email" onChange={onChange} fullWidth value={email}/>
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Your School
                </InputLabel>
                <BootstrapInput id="school" placeholder="Enter your current school" autoComplete="off" onChange={onChange} fullWidth value={school}/>
              </FormControl>
              <FormControl className={classes.margin}>
              {/* <InputLabel htmlFor="grade-native">Grade</InputLabel>
                <Select
                  native
                  value={state.grade}
                  onChange={handleChange}
                  inputProps={{
                    name: 'grade',
                    id: 'grade-native',
                  }}
                >
                  <option aria-label="None" value="Please Select a Grade" />
                  <option value={9}>9th Grade/Freshamn</option>
                  <option value={10}>10th Grade/Sophomore</option>
                  <option value={11}>11th Grade/Junior</option>
                  <option value={12}>12th Grade/Senior</option>
                </Select> */}
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Your Grade
                </InputLabel>
                <BootstrapInput id="grade" placeholder="Enter your current grade" onChange={onChange} fullWidth value={grade}/>
              </FormControl>
              <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Choose a Password
                </InputLabel>
                <BootstrapInput id="password" placeholder="Enter desired password" autoComplete="off" type="password" onChange={onChange} fullWidth value={password}/>
              </FormControl>
              {/* <FormControl className={classes.margin}>
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.inputLabel} >
                  Confirm your password
                </InputLabel>
                <BootstrapInput id="password_confirm" placeholder="Re-type your password" autoComplete="off" type="password"/>
              </FormControl> */}
              {/* <TextField
                className={classes.textField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                id="email"
                label="Email Address"
                placeholder="Enter your email address"
                name="email"
                autoComplete="email"
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
                id="password"
                autoComplete="current-password"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
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
            </form>
          </div>
        </Grid>
        
      </Grid>
    </ThemeProvider>
      
  );
}