import React, { Component } from 'react';
import './quiz.scss'
import NumberTickSlider from './NumberTickSlider'
import {Category} from './quiz-questions-data'
import { number } from 'prop-types';
import { ViewArraySharp } from '@material-ui/icons';

export default class QuizQuestion extends Component <IAppProps,IAppState>{
  
constructor(props: IAppProps){
    super(props);
    // console.log(`Props is ${this.props}`)
    this.state = {isAnswered:false}
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
  handleSelectedValue = async(selectedValue:number|number[], minValue:number, maxValue:number)=>{
    if(!this.state.isAnswered){
      if (typeof selectedValue === "number") {
          //updates category score according to values
        await this.props.updateCategoryScore(this.props.question.option1.category,maxValue-(selectedValue));
        await this.props.updateCategoryScore(this.props.question.option2.category,selectedValue);
      }
        this.setState({isAnswered:true})
        this.props.updateAnsweredCount();
    }    
    else{
      console.log( `This question has already been answered.`);
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
  },
  updateAnsweredCount:Function
    
}
interface IAppState{
    isAnswered:boolean
}

