import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
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
      left: '1.5vw',
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
        top: '-2vh',
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
      textAlign: "center",
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
      marginBottom: theme.spacing(2),
    },
    avatar: {
      margin: theme.spacing(3),
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
      marginBottom: theme.spacing(4),
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
      '&:hover': {
        backgroundColor: "#DBD8D4",
        color: "#6B9BC0",
      },
    },
    signupP: {
      textAlign: 'center',
      fontSize: 16,
      lineHeight: '17px',
      marginTop: "55%",
    },
    signupLink: {
      fontSize: 16,
    },
    box: {
      position: "relative",
    },
  }));