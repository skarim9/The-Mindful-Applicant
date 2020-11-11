import React, { Component } from 'react';
import './quiz.scss'
import NumberTickSlider from './NumberTickSlider'
import {Category} from './quiz-questions-data'

export default class QuizQuestion extends Component <IAppProps,IAppState>{
  
constructor(props: IAppProps){
    super(props);
    this.state = {name:""}
}

  render() {
    
    return (
      <table width = "100%">
        <tbody>
          <tr className = "question-container">
            <td width = "25%">{this.props.question.option1.statement}</td>
            <td width = "50%"><NumberTickSlider /></td>
            <td width = "25%">{this.props.question.option2.statement}</td>            
        </tr>
        </tbody>
        </table>
    )
  }
}
interface IAppProps{
    question:{
      option1:{
          statement:string
          category:Category
      },
      option2:{
          statement:string
          category:Category
      }
  }
    
}
interface IAppState{
    name:string;
}

