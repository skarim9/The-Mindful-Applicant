import React, { Component } from 'react';
import './quiz.scss'
import QuizQuestion from './QuizQuestion'
import QuizResults from './quiz-results/QuizResults';
import {questionsData,Category} from './quiz-questions-data'
import {scoreToStat} from './QuizAdapterFunctions'
export default class Quiz extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        this.state = {
            name:"",
            isShowResults:false, 
            answeredCount:0,
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
              <div><QuizResults stats = {scoreToStat(this.state.score)}/></div>
              :
                <div className = "quiz-container">
                    
                    {this.createQuizQuestions(questionsData)}
                    
                    
                <button onClick={(e) => this.showResults(true)} className = "submitBtn" >Submit</button> 
                
                </div>
              } 
        </div>
        )
    }

    showResults(_showResults:boolean){
        if(this.state.answeredCount<questionsData.length){
            alert('Not all questions have been answered.');
        }
        else{
            this.setState({
                isShowResults:_showResults
            })
        }
    }
    updateAnsweredCount=()=>{
        this.setState(prevState => ({
            answeredCount: prevState.answeredCount+1
        }));
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
                            <QuizQuestion question = {_question} updateAnsweredCount={this.updateAnsweredCount} updateCategoryScore = {this.updateCategoryScore}/>
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
    updateCategoryScore = async(category:Category, addPoints:number) =>{
        console.log(`Quiz is updating score ${category} to add ${addPoints}`)
        
        switch(category){
            case Category.Decision_Making:
                await this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        decision_making: prevState.score.decision_making+addPoints       // update the value of specific key
                    }
                }));
                
                console.log("Decision Making score updated to be "+this.state.score.decision_making);
                break;
            case Category.Self_Awareness:
                await this.setState({
                    score:{
                        decision_making:this.state.score.decision_making,
                        relationship_skills:this.state.score.relationship_skills, 
                        self_awareness:this.state.score.self_awareness+addPoints,
                        social_awareness:this.state.score.social_awareness, 
                        self_management:this.state.score.self_management,
                    }
                })
                await this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        self_awareness: prevState.score.decision_making+addPoints       // update the value of specific key
                    }
                }));
                console.log("Self Awareness score updated to be "+this.state.score.self_awareness);
                
                break;
            case Category.Relationship_Skills:
                await this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        relationship_skills: prevState.score.decision_making+addPoints       // update the value of specific key
                    }
                }));
                break;
            case Category.Social_Awareness:
                await this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        social_awareness: prevState.score.decision_making+addPoints       // update the value of specific key
                    }
                }));
                break;
            case Category.Self_Management:
                await  this.setState(prevState => ({
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
    answeredCount:number;
    
    score:{
        decision_making:number
        relationship_skills:number 
        self_awareness:number
        social_awareness:number 
        self_management:number
    }
}
export interface Score{
    
}
