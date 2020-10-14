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

       
            return <li className = "invis-label" key = {_index}> 

                        <span>
                            <div  className = "ol-label-container">
                                <div className="ol-label">{_index+1}</div>
                            </div>
                            <QuizQuestion question = {_question}/>
                        </span>
                    </li>
    }
    createQuizQuestions=(_questions: string[])=>{
        return(<ol className="quiz-questions-container">
            {_questions.map(this.createQuestion)}
        </ol>)
    }
    

    render() {
        return (
        <div className = "quiz-container">
            
            <div>This is the Quiz page</div>
            {
                this.createQuizQuestions(this.props.questions)
            }
                 
        </div>
        )
    }
}
interface IAppProps{
    questions:string[];
}
interface IAppState{
    name:string;
}
