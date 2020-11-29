import React from 'react'
import {auth,db} from '../firebase-db/config'
import QuizResults from '../quiz/quiz-results/typologies/TypologyDisplay';
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
            let quizResult = {
              decision_making:doc.get(`decision_making`),
              relationship_skills:doc.get(`relationship_skills`), 
              self_awareness:doc.get(`self_awareness`),
              social_awareness:doc.get(`social_awareness`), 
              self_management:doc.get(`self_management`)   
            };
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
            result.push(
                <QuizResults stats = {scoreToStat(score)} typology = {determineType(score)}/>)
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
