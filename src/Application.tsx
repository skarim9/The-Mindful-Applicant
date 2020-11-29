import React, {Component, useContext } from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
// database imports
import {signInWithGoogle,db,auth} from './firebase-db/config'

import './App.css';
import Quiz from './quiz/Quiz';
import QuizResults from './quiz/quiz-results/QuizResults'
import {scoreToStat} from './quiz/QuizAdapterFunctions';
import {determineType} from './quiz/quiz-results/TypologyDeterminator';


import { UserContext } from "./providers/UserProvider";
import { createStyles, makeStyles,WithStyles, Theme } from '@material-ui/core/styles';

import Navbar from './profile/NavBar';
import Drawer from './profile/Drawer';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, withStyles } from '@material-ui/core';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6B9BC0',
      contrastText: '#fff',
    },
    secondary: {      
      main: '#97B695',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ['Montserrat'
    ].join(','),
  }
});


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignContent: 'column',
      backgroundColor: '#6B9BC0',
      height: '100%',
    },
    container: {
      height: '100%',
      width: '100%'
    }
  }),
);


class Application extends Component<Props>{
  
    state = {
      scores:[]
    };
  

  componentDidMount=()=>{
    let user = auth.currentUser;
    if(user!=null){
      db.collection(`users/${user.uid}/quiz_results`).get().then(
        snapshot =>{
          const quiz_results:{
            decision_making:number
            relationship_skills:number 
            self_awareness:number
            social_awareness:number 
            self_management:number
          }[] = [];
          snapshot.forEach(doc=>{
            let quizResult = {
              decision_making:doc.get(`decision_making`),
              relationship_skills:doc.get(`decision_making`), 
              self_awareness:doc.get(`decision_making`),
              social_awareness:doc.get(`decision_making`), 
              self_management:doc.get(`decision_making`)   
            };
            quiz_results.push(quizResult);
          })
          this.setState({scores:quiz_results});
        }
      )
    }
  }

  render(){
    const { classes } = this.props;

  return (
    
    <div >

        <div>
      <Navbar />
      <div className={classes.root}>
          <Drawer />
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
                <div style = {{width:"100%", marginRight:'10px'}}>
                    
     <BrowserRouter>
                <Switch>

                <Route path="/profile" >
                    <Typography variant="h5" style={{color: "#FFFFFF"}}>Overview</Typography>
                    <Typography variant="h4" style={{color: "#FFFFFF"}}>Social Emotional Profile</Typography>

                    <Paper style={{width: '100%', height:'80vh', alignContent: 'center', justifyContent: 'center', overflow: 'auto', borderRadius: '18px'}}>
                      {
                        this.renderResults()
                      }
                    <div style = {{margin:'10px', color:'#6B9BC0'}}>
    
                    </div> 
                    </Paper>
              </Route>

                <Route path="/quiz" >
                    {/* <Typography variant="h5" style={{color: "#FFFFFF"}}>Overview</Typography> */}
                    <Typography variant="h4" style={{color: "#FFFFFF"}}>Social Emotional Quiz</Typography>

                    <Paper style={{width: '100%', height:'80vh', alignContent: 'center', justifyContent: 'center', overflow: 'auto', borderRadius: '18px'}}>
                        <Quiz/>
                
                    <div style = {{margin:'10px', color:'#6B9BC0'}}>
    
                    </div> 
                    </Paper>
              </Route>
              
             </Switch>
      </BrowserRouter>
            </div>
          </MuiThemeProvider>
      </div>
    </div>

        
      </div>
  
    );
  }
  renderResults = () =>{
    let results = [];
    for(let i = 0; i<this.state.scores.length;i++){
      const stats = scoreToStat(this.state.scores[i]);
      const type = determineType(this.state.scores[i]);
      if(stats!=undefined)
        results.push(<QuizResults stats = {stats} typology = {type} />);
    }
                
  }
}
export default withStyles(useStyles, { withTheme: true })(Application);
interface Props extends WithStyles<typeof styles>{ }
interface IAppState{
    scores:{
        decision_making:number
        relationship_skills:number 
        self_awareness:number
        social_awareness:number 
        self_management:number
    }[]
}
