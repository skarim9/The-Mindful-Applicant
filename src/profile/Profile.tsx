import React from 'react'
import { auth, db } from '../firebase-db/config'
import QuizResults from '../quiz/quiz-results/QuizResults';
import { scoreToStat } from '../quiz/QuizAdapterFunctions'
import { determineType, Typology } from '../quiz/quiz-results/TypologyDeterminator'
import { TransferWithinAStationSharp } from '@material-ui/icons';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export default class Profile extends React.Component<ResultsProps, IAppState>{
  constructor(props: ResultsProps) {
    super(props);
    this.state = {
      scores: [],
      scoreDates: [],
      typologies: []
    }
  }
  componentDidMount() {
    let user = auth.currentUser;
    if (user != null) {
      db.collection(`users/${user.uid}/quiz_results`).orderBy('date', 'desc').get().then(
        snapshot => {
          const quiz_results: {
            decision_making: number
            relationship_skills: number
            self_awareness: number
            social_awareness: number
            self_management: number
          }[] = [];
          const dates: Date[] = [];
          const types: Typology[] = [];
          snapshot.forEach(doc => {
            console.log(`Doc data in Profile is \n${doc.data().decision_making}`)
            let quizResult = doc.get(`quiz`);
            quiz_results.push(quizResult);

            let type = doc.get(`typology`);
            types.push(type);

            let date = doc.get(`date`);
            dates.push(date.toDate());
          })
          this.setState({ scores: quiz_results, typologies: types, scoreDates: dates });
        }
      )
    }
  }

  render() {
    return <div style={{ height: '100%' }}>
      {
        this.state.scores.length > 0 ?
          this.renderResult() :
          <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div><h1>Take our Social Emotional Quiz now</h1></div>
            <button>
              <Link to="/quiz">Begin</Link>
            </button>
          </div>
      }
    </div>
  }

  renderResult = () => {
    let result = [];
    for (let i = 0; i < this.state.scores.length; i++) {
      const score = this.state.scores[i];
      const date = this.state.scoreDates[i].toString();

      console.log(`Score is \ndec_mak: ${score.decision_making}\n social_awareness: ${score.social_awareness} \nrelation: ${score.relationship_skills} \n self_aware: ${score.self_awareness} \n self_manage: ${score.self_management}`)
      result.push(
        <div key={i + "QuizResultProfile"}>
          <h3>{date}</h3>
          <QuizResults date={null} stats={scoreToStat(score)} typology={this.state.typologies[i]} canReallocatePoints={false} />
        </div>);
      break;//break after one result has been added
    }
    return result;
  }
}

interface ResultsProps { }

interface IAppState {
  scores: {
    decision_making: number
    relationship_skills: number
    self_awareness: number
    social_awareness: number
    self_management: number
  }[],
  scoreDates: Date[],
  typologies: Typology[]
}
