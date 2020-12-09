import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './prompt-box.scss'

class PromptBox extends Component<IAppProps> {
  constructor(props: IAppProps){
    super(props);
  }
  
  render() {
    
    return (
      <div className = "promptStyle">
      <label>Reason for Point Reallocation:</label>
      <TextareaAutosize  onChange={ev => this.props.callback(ev.target.value)} id="reallocation_details" />
      
      
      </div>
    )
  }
}
export default PromptBox;
interface IAppProps{
  callback:(Function)
}