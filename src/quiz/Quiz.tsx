import React, { Component } from 'react';
import './quiz.scss'
import QuizQuestion from './QuizQuestion'
import QuizResults from './quiz-results/QuizResults';

export default class Quiz extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        this.state = {
            name:"",
            isShowResults:false, 
            questions:[
                {
                    option1:'I know myself. I can react well to different situations.',
                    option2:'I dismiss negative thoughts I have about myself when they arise.'
                },
                {
                    option1:'I understand how to use my strengths and weaknesses to make future plans.',
                    option2:'I ask people in school and in my community for help when I face a problem.'
                },
                {
                    option1:'I overcome setbacks and failures.',
                    option2:'I do not let my peers push me into things I do not want to do.'
                },
                {
                    option1:'I do not doubt myself, and I also do not overestimate my abilities.',
                    option2:'I keep my friends safe and healthy when I have invited them somewhere.'
                },
                {
                    option1:'I control my emotions.',
                    option2:'I understand how others feel.'
                },
                {
                    option1:'I take small steps every day to achieve my goals.',
                    option2:'I confront friends about problems, even if it sucks.'
                },
                {
                    option1:'I do well in events (like competitions, presentations or events) when I am asked to perform under pressure.',
                    option2:'I analyze a situation in order to anticipate what will happen next.'
                },
                {
                    option1:'I am aware of helping people that have less than me, and not feeling resentful of those that have more.',
                    option2:'I am comfortable giving and receiving feedback.'
                },
                {
                    option1:'I am often reading the room and alert to how others are feeling.',
                    option2:'I do what I think is right even when pressured not to.'
                },
                {
                    option1:'I am good at making my point clear when speaking to others.',
                    option2:'I am good at thinking through the impact of actions I take.'
                },
                {
                    option1:'I often think ahead to try to understand the impact of my behavior.',
                    option2:'I am helpful in group / team projects.'
                },
                {
                    option1:'I often reflect on decisions I have made to understand if I could have done something differently.',
                    option2:'I am often reading the room and alert to how others are feeling.'
                },
                {
                    option1:'I am good at making friends.',
                    option2:'I am good at showing appreciation for others.'
                },
                {
                    option1:'I have high standards for my own actions, morally speaking.',
                    option2:'I am good at managing my stress. It does not overwhelm or paralyze me.'
                },
                {
                    option1:'I am aware when I have hurt someone and I do not hesitate to apologize.',
                    option2:'My organization system helps me.'
                },
                {
                    option1:'na',
                    option2:'bo'
                },
                {
                    option1:'na',
                    option2:'bo'
                },
                {
                    option1:'na',
                    option2:'bo'
                },
                {
                    option1:'na',
                    option2:'bo'
                },
                {
                    option1:'na',
                    option2:'bo'
                }
            ]
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
                    
                        {this.createQuizQuestions(this.state.questions)}
                    
                    
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
        option1:string,
        option2:string
    },_index:number) => {

       
            return <li className = "invis-label" key = {_index}> 

                        <span className = "numberedList">
                            <div  className = "ol-label-container">
                                <div className="ol-label">{_index+1}</div>
                            </div>
                            <QuizQuestion question = {_question}/>
                        </span>
                    </li>
    }
    createQuizQuestions=(_questions: {
        option1:string,
        option2:string
    }[])=>{
        return(<ol className="quiz-questions-container">
            {_questions.map(this.createQuestion)}
        </ol>)
    }
    

    
}
interface IAppProps{
}
interface IAppState{
    isShowResults: boolean;
    
    name:string;
    questions:{
        option1:string,
        option2:string
    }[];
    
}
