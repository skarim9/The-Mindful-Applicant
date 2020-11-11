import React, { Component } from 'react';
import './quiz.scss'
import QuizQuestion from './QuizQuestion'
import QuizResults from './quiz-results/QuizResults';
import {questionsData,Category} from './quiz-questions-data'
export default class Quiz extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        this.state = {
            name:"",
            isShowResults:false, 
            score:{
                decision_making:0,
                relationship_skills:0,
                self_awareness:0,
                social_awareness:0,
                self_management:0
            }
        }
    }

    render() {
        return (
            <div>
                
                <h1 >Social Emotional Quiz</h1>
                    
              {  this.state.isShowResults?
              <div><QuizResults/></div>
              :
                <div className = "quiz-container">
                    
                    {this.createQuizQuestions(questionsData)}
                    
                    
                <button onClick={(e) => this.toggleResults(true)} className = "submitBtn" >Submit</button> 
                
                </div>
              } 
        </div>
        )
    }

    toggleResults(_showResults:boolean){
        this.setState({
            isShowResults:_showResults
        })
    }









    createQuestion =(_question:{
        option1:{
            statement:string
            category:Category
        },
        option2:{
            statement:string
            category:Category
        }
    },_index:number) => {

       
            return <li className = "invis-label" key = {_index}> 

                        <span className = "numberedList">
                            <div  className = "ol-label-container">
                                <div className="ol-label">{_index+1}</div>
                            </div>
                            <QuizQuestion question = {_question} updateCategoryScore = {this.updateCategoryScore}/>
                        </span>
                    </li>
    }
    createQuizQuestions=(_questions: {
        option1:{
            statement:string
            category:Category
        },
        option2:{
            statement:string
            category:Category
        }
    }[])=>{
        return(<ol className="quiz-questions-container">
            {_questions.map(this.createQuestion)}
        </ol>)
    }
    
    /**
     * updates the category by adding the points to the current number of points
     * @param category - category to add points to
     * @param addPoints - amount of points to add
     */
    updateCategoryScore(category:Category, addPoints:number){
        switch(category){
            case Category.Decision_Making:
                this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        decision_making: prevState.score.decision_making+addPoints       // update the value of specific key
                    }
                }));
                break;
            case Category.Self_Awareness:
                this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        self_awareness: prevState.score.decision_making+addPoints       // update the value of specific key
                    }
                }));
                break;
            case Category.Relationship_Skills:
                this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        relationship_skills: prevState.score.decision_making+addPoints       // update the value of specific key
                    }
                }));
                break;
            case Category.Social_Awareness:
                this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        social_awareness: prevState.score.decision_making+addPoints       // update the value of specific key
                    }
                }));
                break;
            case Category.Self_Management:
                this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        self_management: prevState.score.decision_making+addPoints       // update the value of specific key
                    }
                }));
                break;
                        
        }
    }


    
}
interface IAppProps{
}
interface IAppState{
    isShowResults: boolean;
    
    name:string;
    score:{
        decision_making:number
        relationship_skills:number 
        self_awareness:number
        social_awareness:number 
        self_management:number
    }
}
