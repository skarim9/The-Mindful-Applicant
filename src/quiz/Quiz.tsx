import React, { Component } from 'react';
import './quiz.scss'
import QuizQuestion from './QuizQuestion'
import Slider from '@material-ui/core/Slider';
import QuizResults from './quiz-results/QuizResults';
import TextButton from '../components/TextButton'
export default class Quiz extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        this.state = {
        name:"",
        isShowResults:false, 
        questions:[
            "I know myself. I can react well to different situations.", 
            "I dismiss negative thoughts I have about myself when they arise.",
            "I ask people in school and in my community for help when I face a problem.",
            "I don't let my peers push me into things I don't want to do.",
            "I keep my friends safe and healthy when I've invited them somewhere.",
            "I understand how to use my strengths and weaknesses to make future plans.",
            "I control my emotions.",
            "I understand how others feel.",
            "I confront friends about problems, even if it sucks.",
            "I analyze a situation in order to anticipate what will happen next.",
            "I overcome setbacks and failures.",
            "I take small steps every day to achieve my goals.",
            "I show respect for others, even those that think differently than I do.",
            "I am helpful in group / team projects. ",
            "I do what I think is right even when pressured not to. ",
        ]}
    }




    render() {
        return (
            <div>
                
                <h1 >Social Emotional Quiz</h1>
                    
              {  this.state.isShowResults?
              <div><QuizResults/></div>
              :
                <div className = "quiz-container">
                    
                        {this.createQuizQuestions(this.state.questions)}
                    
                    
                <TextButton onClick={()=>this.toggleResults(true)} textLabel="Submit" /> 
                
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
    

    
}
interface IAppProps{
}
interface IAppState{
    isShowResults: boolean;
    questions:string[];
    name:string;
}
