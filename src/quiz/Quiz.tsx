import React, { Component } from 'react';
import './quiz.scss'
import QuizQuestion from './QuizQuestion'
import QuizResults from './quiz-results/QuizResults';
import {questionsData,Category} from './quiz-questions-data'
import {scoreToStat} from './QuizAdapterFunctions'
import {maxValue} from './NumberTickSlider'
import {determineType} from './quiz-results/TypologyDeterminator'
export default class Quiz extends Component <IAppProps,IAppState>{
  
    constructor(props: IAppProps){
        super(props);
        this.state = {
            name:"",
            isShowResults:false, 
            answeredCount:0,
            isFinishedQuiz: false,
            score:{
                decision_making:0,
                relationship_skills:0,
                self_awareness:0,
                social_awareness:0,
                self_management:0
            },
            maxScorePerQuestion:maxValue,
            selectedAnswers:[] //holds the numbers that the user selected from quiz questions
        }
    }

    render() {
        return (
            <div>
                
              {  this.state.isShowResults?
              <div><QuizResults date = {new Date()} stats = {scoreToStat(this.state.score)} typology = {determineType(this.state.score)} canReallocatePoints = {true}/></div>
              :
                <div className = "quiz-container">
                    
                    {this.createQuizQuestions(questionsData)}
                    
                    
                <button onClick={(e) => this.getResults()} >Submit</button> 
                
                </div>
              } 
        </div>
        )
    }
    getResults = () =>{
        this.setState({
            isFinishedQuiz: this.state.answeredCount>=questionsData.length
        },this.calculateResults);
        
    }
    /**
     * Calculates the results of the quiz
     * WARNING: fragile code, might cause mismatching of question and selected answer if anything changes
     */
    calculateResults=async()=>{
        if(!this.state.isFinishedQuiz){
            alert('Not all questions have been answered.');
            return;
        }
        for(let i in this.state.selectedAnswers){
            let selectedValue = this.state.selectedAnswers[i];
            await this.updateCategoryScore(questionsData[i].option1.category,this.state.maxScorePerQuestion-(selectedValue));
            await this.updateCategoryScore(questionsData[i].option2.category,selectedValue);
        }
        this.showResults(true);
    }

    /**
     * calculates and shows the results
     * @param _showResults 
     */
    showResults(_showResults:boolean){
        console.log(`Answered ${this.state.answeredCount} out of ${questionsData.length} questions`)
        if(!this.state.isFinishedQuiz){
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
                            <QuizQuestion id = {_index} question = {_question} updateAnsweredCount={this.updateAnsweredCount} updateQuestionState = {this.updateQuestionState}/>
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
    
    updateQuestionState=(id:number, selectedNum:number)=>{
        this.state.selectedAnswers[id] = selectedNum;
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
                await this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        self_awareness: prevState.score.self_awareness+addPoints       // update the value of specific key
                    }
                }));
                console.log("Self Awareness score updated to be "+this.state.score.self_awareness);
                
                break;
            case Category.Relationship_Skills:
                await this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        relationship_skills: prevState.score.relationship_skills+addPoints       // update the value of specific key
                    }
                }));
                break;
            case Category.Social_Awareness:
                await this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        social_awareness: prevState.score.social_awareness+addPoints       // update the value of specific key
                    }
                }));
                break;
            case Category.Self_Management:
                await  this.setState(prevState => ({
                    score: {                   // object that we want to update
                        ...prevState.score,    // keep all other key-value pairs
                        self_management: prevState.score.self_management+addPoints       // update the value of specific key
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
    isFinishedQuiz:boolean;
    selectedAnswers:number[];
    score:{
        decision_making:number
        relationship_skills:number 
        self_awareness:number
        social_awareness:number 
        self_management:number
    }
    maxScorePerQuestion:number
}
export interface Score{
    
}
