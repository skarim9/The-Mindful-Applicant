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
            questions:questionsData
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
        option1:{
            statement:string
            category:Category
        },
        option2:{
            statement:string
            category:Category
        }
    }[];
    
}
