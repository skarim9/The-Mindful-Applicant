import React, { Component } from 'react';
import { Typology } from '../TypologyDeterminator';

export const colors = ["#ab8de0","#d34545","#45b0d3","#8fe891","#eac567","ac88ef"]

export default class QuizResults extends Component <ResultsProps,IAppState>{
  
    constructor(props: ResultsProps){
        super(props);
        
    }
    componentDidMount(){
     
    }

    render() {
        
        return (
            <div>
                <h1>{this.props.typology}</h1>
                {this.getTypologyImage(this.props.typology)}
                {this.renderTypology(this.props.typology)}
            </div>
        )
    }
    renderTypology(typology: Typology){
        switch(typology) {
            case Typology.Maverick:
              return this.maverick();
              
            case Typology.Thinker:
                return this.thinker();
                
            case Typology.Philosopher:
                return this.philosopher();
                
            case Typology.Conscious:
                return <div></div>;
                
            case Typology.Altruist:
                return <div></div>;
                
            case Typology.Ally:
                return <div></div>;
                
            case Typology.Deliberator:
                return <div></div>;
                
            case Typology.Giver:
                return <div></div>;
                
            case Typology.Networker:
                return <div></div>;
                
            case Typology.Doer:
                return <div></div>;
                
            case Typology.Free_Spirit:
                return <div></div>;
                
            case Typology.Collaborator:
                return <div></div>;
                
            case Typology.Officer:
                return <div></div>;
                
            case Typology.Go_Getter:
                return <div></div>;
                
            case Typology.Planner:
                return <div></div>;
                
            case Typology.Proj_Manager:
                return <div></div>;
                
            case Typology.Engineer:
                return <div></div>;
                
            case Typology.Lone_Wolf:
                return <div></div>;
                
            case Typology.Independent_Operator:
                return <div></div>;
                
            case Typology.System_Maker:
                return <div></div>;

            default:
              return <div></div>;
        }
    }

    
    maverick(){
      return <div>
        <p>
        High: You feel comfortable in your skin. You recognize your strengths and weaknesses and enjoy thinking deeply about emotions. You are above average in terms of your reflection and introspection skills. Please note: just because you are self-aware does not mean you have it all figured out and know what you "want to do with your life."
        </p>
        <p>
        Low: You find it difficult to understand the perspectives of those that are different from you. This can often result in frustrations or conflicts when disagreements arise (for example in a group project or on a team).
        </p>
        <p>
        Taken Together: You have a high internal skill, self-awareness, and a low external skill, social-awareness. Well in tune with your own views, ideas, and emotional experiences, you are an independent thinker. You have a clear idea of the way that you want things. Your strong awareness and comfort with yourself make it hard for you to imagine the ideas of others; you hold your worldview closely and resist altering or setting aside your views in order to understand those of another. 
        </p>
      </div>;
    }
    thinker(){
      return <div>
        <p>
        High: You feel comfortable in your skin. You recognize your strengths and weaknesses and enjoy thinking deeply about emotions. You are above average in terms of your reflection and introspection skills. Please note: just because you are self-aware does not mean you have it all figured out and know what you "want to do with your life."
        </p>
        <p>
        Low: It is not your preference to work in groups; it is easier for you to complete assignments or tasks individually. You may feel that you are misunderstood when you express a point-of-view or idea. Even though you have a number of close relationships you don't always feel good about standing up for yourself or addressing problems within the group.
        </p>
        <p>
        Taken Together: You are aware that your relationship skills might not be the best and are okay with it. You've figured out how to "deal" with it. Your strength lies in your self-knowledge so you don't mind being alone and are comfortable spending time inside your own head. You are contemplative, engaged, and aware.
        </p>
      </div>
    }
    philosopher(){
      return <div>
        <p>
        High: You feel comfortable in your skin. You recognize your strengths and weaknesses and enjoy thinking deeply about emotions. You are above average in terms of your reflection and introspection skills. Please note: just because you are self-aware does not mean you have it all figured out and know what you "want to do with your life."
        </p>
        <p>
        Low: Decision making occurs not just when we decide if we like vanilla or chocolate, or when we decide on the job we want, or college we wish to attend. We make millions of small decisions every day, many of which go undetected by our conscious mind. The opposite of being good at decision-making isn't making bad decisions or being indecisiveness, though these can both be outcomes. Low decision-making is associated with a lack of ability to anticipate problems and adapt to new situations. Consequences of low decision-making are being surprised at how things happen (you don't see things coming) and/or being overly stressed by making a choice because you can't properly access the impact of your actions on yourself or others.
        </p>
        <p>
        Taken Together: Ironically, knowing yourself well does not always make decision making easy. This is because making good decisions often centers around things that are NOT in your sphere of awareness. Things happen spontaneously and unpredictably. In this way, good decision-making requires situational-awareness. Your strong sense of self may help you in making personal decisions (I like vanilla ice cream, not chocolate ice cream) but since most decisions have ripple effects among our families, classmates, teachers, and friends, you may still find those challenging. 
        </p>
      </div>
    }








    /**
     * Returns image associated with typology
     * @param typology 
     */
    getTypologyImage(typology: Typology){
      switch(typology) {
          case Typology.Maverick:
            return <img src = "./bitmoji/maverick.png"alt = {typology}/>;
            
          case Typology.Thinker:
            return <img src = "./bitmoji/thinker.png"alt = {typology}/>;
              
          case Typology.Philosopher:
            return <img src = "./bitmoji/philosopher.png"alt = {typology}/>;
              
          case Typology.Conscious:
            return <img src = "./bitmoji/conscious.png"alt = {typology}/>;
              
          case Typology.Altruist:
            return <img src = "./bitmoji/altruist.png"alt = {typology}/>;
              
          case Typology.Ally:
            return <img src = "./bitmoji/ally.png"alt = {typology}/>;
              
          case Typology.Deliberator:
            return <img src = "./bitmoji/deliberator.png"alt = {typology}/>;
              
          case Typology.Giver:
            return <img src = "./bitmoji/giver.png"alt = {typology}/>;
              
          case Typology.Networker:
            return <img src = "./bitmoji/networker.png" alt = {typology}/>;
              
          case Typology.Doer:
            return <img src = "./bitmoji/doer.png" alt = {typology}/>;
              
          case Typology.Free_Spirit:
            return <img src = "./bitmoji/free_spirit.png" alt = {typology}/>;
              
          case Typology.Collaborator:
            return <img src = "./bitmoji/collaborator.png" alt = {typology}/>;
              
          case Typology.Officer:
            return <img src = "./bitmoji/officer.png" alt = {typology}/>;
              
          case Typology.Go_Getter:
            return <img src = "./bitmoji/go_getter.png" alt = {typology}/>;
              
          case Typology.Planner:
            return <img src = "./bitmoji/planner.png" alt = {typology}/>;
              
          case Typology.Proj_Manager:
            return <img src = "./bitmoji/proj_manager.png" alt = {typology}/>;
              
          case Typology.Engineer:
            return <img src = "./bitmoji/engineer.png" alt = {typology}/>;
              
          case Typology.Lone_Wolf:
            return <img src = "./bitmoji/lone_wolf.png" alt = {typology}/>;
              
          case Typology.Independent_Operator:
            return <img src = "./bitmoji/independent_operator.png" alt = {typology}/>;
              
          case Typology.System_Maker:
            return <img src = "./bitmoji/system_maker.png" alt = {typology}/>;

          default:
            return <div></div>;
      }
  }


}
interface ResultsProps{
    
    typology: Typology
}
interface IAppState{
    
}
