import React, { Component } from 'react';
import './quiz.scss'
import QuizQuestion from './QuizQuestion'
import Slider from '@material-ui/core/Slider';

export default class Quiz extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        this.state = {name:""}
    }

    createQuestion =(_question:string,_index:number) => {

       
            return <div> 
                        <QuizQuestion question = {_question}/>
                    </div>
    }
    createQuizQuestions=(_questions: string[])=>{
        return(<div className="quiz-question-container">
            {_questions.map(this.createQuestion)}
        </div>)
    }
    

    render() {
        const questions = ["This is Q1","This is Q2","This is Q3"];
        return (
        <div className = "quiz-container">
            
            <div>This is the Quiz page</div>
            {
                this.createQuizQuestions(questions)
            }
                 
        </div>
        )
    }
}
interface IAppProps{
    numQuestions:number
}
interface IAppState{
    name:string;
}
