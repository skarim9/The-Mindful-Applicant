import React from 'react'
import {auth,db} from '../firebase-db/config'
import QuizResults from '../quiz/quiz-results/QuizResults';
import {scoreToStat} from '../quiz/QuizAdapterFunctions'
import {determineType} from '../quiz/quiz-results/TypologyDeterminator'
export default class History extends React.Component<ResultsProps,IAppState>{
    constructor(props:ResultsProps){
        super(props);
        this.state = {
            scores:[]
        }
    }
    componentDidMount(){
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
              console.log(`Doc data in history is \n${doc.data().decision_making}`)
            let quizResult = doc.get(`quiz`);
            quiz_results.push(quizResult);
            })


            this.setState({scores:quiz_results});
            }
        )
        }
    }


    render(){
        return <div>
            {
                this.renderResult()
            }
        </div>
    }

    renderResult = () =>{
        let result = [];
        for(let i = 0; i<this.state.scores.length;i++){
            const score = this.state.scores[i];
            console.log(`Score is \ndec_mak: ${score.decision_making}\n social_awareness: ${score.social_awareness} \nrelation: ${score.relationship_skills} \n self_aware: ${score.self_awareness} \n self_manage: ${score.self_management}`)
            result.push(
                <div key = {i+"QuizResultHIstory"}><QuizResults date = {null} stats = {scoreToStat(score)} typology = {determineType(score)} canReallocatePoints = {false}/></div>)
        }
        return result;
    }


}
interface ResultsProps{
    
}
interface IAppState{
    scores:{
        decision_making:number
        relationship_skills:number 
        self_awareness:number
        social_awareness:number 
        self_management:number
    }[]
    
}
