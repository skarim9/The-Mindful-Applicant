import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './prompt-box.scss'

class PromptBox extends Component {
  
  render() {
    
    return (
      <div className = "promptStyle">
      <label>Reason for Point Reallocation:</label>
      <TextareaAutosize id="story_details" />
      
      <button className = "button">Submit</button>
      </div>
    )
  }
}
export default PromptBox;