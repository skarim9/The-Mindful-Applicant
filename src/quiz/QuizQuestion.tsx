import React, { Component } from 'react';
import './quiz.scss'
import NumberTickSlider from './NumberTickSlider'
import {Category} from './quiz-questions-data'
import { number } from 'prop-types';
import { ViewArraySharp } from '@material-ui/icons';

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
            <td width = "50%"><NumberTickSlider handleValue = {this.handleSelectedValue}/></td>
            <td width = "25%">{this.props.question.option2.statement}</td>            
        </tr>
        </tbody>
        </table>
    )
  }
  /**
   * Handles value that was selected from number tick bar.
   * WARNING: Code is specific to the scale used in number tick slider
   * @param selectedValue H
   */
  handleSelectedValue(selectedValue:number|number[], minValue:number, maxValue:number){
    (selectedValue?:number)=>{//if selected value is number
      if(selectedValue !== undefined)//if selected value is not undefined
      {
        //updates category score according to values
        this.props.updateCategoryScore(this.props.question.option1.category,selectedValue+minValue);
        this.props.updateCategoryScore(this.props.question.option2.category,maxValue-(selectedValue+minValue));
      
      }
    
    }
    (selectedValue?:number[])=>{//if selected value is number
      if(selectedValue !== undefined&&selectedValue.length)//if selected value is not undefined
      {
        //updates category score according to values
        this.props.updateCategoryScore(this.props.question.option1.category,selectedValue[0]+minValue);
        this.props.updateCategoryScore(this.props.question.option2.category,maxValue-(selectedValue[0]+minValue));
      
      }
    
    }
    
      
  }
}
interface IAppProps{
  updateCategoryScore:(category:Category, addPoints:number) =>void
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

