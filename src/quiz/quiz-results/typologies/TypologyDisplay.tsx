import React, { Component } from 'react';
import { Typology } from '../TypologyDeterminator';
import './typology.scss'
export const colors = ["#ab8de0","#d34545","#45b0d3","#8fe891","#eac567","ac88ef"]

export default class QuizResults extends Component <ResultsProps,IAppState>{
  
    constructor(props: ResultsProps){
        super(props);
        
    }
    componentDidMount(){
     
    }

    render() {
        
        return (
            <div >
                <h1>{this.props.typology}</h1>
                <div className = "typology-container">
                  <div className = "typology-img-container">
                {this.getTypologyImage(this.props.typology)}
                </div>
                {this.renderTypology(this.props.typology)}
                </div>
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
    conscious(){
      return <div>
        <p>High: You feel comfortable in your skin. You recognize your strengths and weaknesses and enjoy thinking deeply about emotions. You are above average in terms of your reflection and introspection skills. Please note: just because you are self-aware does not mean you have it all figured out and know what you "want to do with your life."</p>
        <p>Low: Self-Management breaks into three key components and often time students who rank low in this area feel that they struggle with one particular component, while they may actually be good at others. The three components are organizational skills, self-motivation, and emotional management.</p>
        <ul>
          <li>If you struggle with organizational skills, you likely don't have systems and structures in place, you may run late, misplace things, or find that you aren't good with time management and have to rush to finish things at the last minute.</li>
          <li>If you struggle with self-motivation, you likely find it hard to plan long term and set goals. You struggle with procrastination and can't make yourself buckle down to do work unless you're really, really interested in the subject matter or you've waited until the last minute and feel a great deal of urgency.
</li>
          <li>Lastly, if emotional management is a weakness area for you, you may face impulse control issues (I have to buy that hat! I have to join that new club!), have trouble dismissing negative or irrational thoughts, and let your stress run a little bit wild.</li>
        </ul>
        <p>Taken Together: Your introspection and reflection skills help you to achieve clarity of mind, which can be very valuable to you and others. You are likely able to see things in the world uniquely. Lacking strong self-management skills that are more physically oriented, your unique view may come across as dream-like to others. One of the hard things about being self-aware is that you know your weaknesses well and therefore may focus on them to a fault. The old saying "ignorance is bliss" does not apply to you. Because of this, you might be extra hard on yourself about your self-management shortcomings.  </p>
      </div>
    }

    altruist(){
      return <div>
        <p>
        High: You are a keen observer and listener. You prioritize making others feel comfortable. Though you may be extroverted and extend yourself energetically to others in social situations, it isn't a given. Often times shy or more reserved individuals who are high in social-awareness are busy sensing the needs and wants of the people around them, rather than focusing their energy on speaking or entertaining.
        </p>
        <p>
        Low: You may find it difficult to understand and articulate your feelings to others. As a result, you avoid or try to ignore how you are feeling. You likely encounter situations in which you feel that people don't "get" you.
        </p>
        <p>
        Taken Together: Your inclination is to perceive and understand those around you more than to turn that attention inward and understand yourself. This creates a somewhat funny dynamic for you as you are a good collaborator and teammate, thoughtful and sensitive to others, while you may also have a tendency to take on their feelings and not articulate your own. This may result in feeling unsure of how you've fit into and contributed to the group.
        </p>
      </div>
    }

    ally(){
      return <div>
        <p>High: You are a keen observer and listener. You prioritize making others feel comfortable. Though you may be extroverted and extend yourself energetically to others in social situations, it isn't a given. Often times shy or more reserved individuals who are high in social-awareness are busy sensing the needs and wants of the people around them, rather than focusing their energy on speaking or entertaining.</p>
        <p>Low: It is not your preference to work in groups; it is easier for you to complete assignments or tasks individually. You may feel that you are misunderstood when you express a point-of-view or idea. Even though you have a number of close relationships you don't always feel good about standing up for yourself or addressing problems within the group.</p>
        <p>
        Taken Together:Yours is a most unusual combination! You are empathetic, thoughtful, and good at perceiving the needs and wants of others. You lead with your supportive nature in both daily interactions and when your friends or family face larger challenges. However, with lower relationship skills you may not often act on all of the information you've read from any given encounter. You may feel reserved articulating your point, speaking out, or networking. Because of your underlying social-awareness, you have the foundation to do these things quite well you simply haven't developed the skill set yet.
        </p>
      </div>
    }

    deliberator(){
      return <div>
        <p>High: You are a keen observer and listener. You prioritize making others feel comfortable. Though you may be extroverted and extend yourself energetically to others in social situations, it isn't a given. Often times shy or more reserved individuals who are high in social-awareness are busy sensing the needs and wants of the people around them, rather than focusing their energy on speaking or entertaining.</p>
        <p>
        Low: Decision making occurs not just when we decide if we like vanilla or chocolate, or when we decide on the job we want, or college we wish to attend. We make millions of small decisions every day, many of which go undetected by our conscious mind. The opposite of being good at decision-making isn't making bad decisions or being indecisiveness, though these can both be outcomes. Low decision-making is associated with a lack of ability to anticipate problems and adapt to new situations. Consequences of low decision-making are being surprised at how things happen (you don't see things coming) and/or being overly stressed by making a choice because you can't properly access the impact of your actions on yourself or others.
        </p>
        <p>Taken Together: The information about others that you read and absorb as a highly socially-aware person is pertinent for making decisions as the outcomes of our decisions impact those around us, however, you may be hesitant to push your decisions through because you are overly-focused on that impact and therefore overthink it.</p>
      </div>
    }

    giver(){
      return <div>
        <p>High: You are a keen observer and listener. You prioritize making others feel comfortable. Though you may be extroverted and extend yourself energetically to others in social situations, it isn't a given. Often times shy or more reserved individuals who are high in social-awareness are busy sensing the needs and wants of the people around them, rather than focusing their energy on speaking or entertaining.</p>
        <p>
        Low: Self-Management breaks into three key components and often time students who rank low in this area feel that they struggle with one particular component, while they may actually be good at others. The three components are organizational skills, self-motivation, and emotional management.
        </p>
        <ul>
          <li>
          If you struggle with organizational skills, you likely don't have systems and structures in place, you may run late, misplace things, or find that you aren't good with time management and have to rush to finish things at the last minute.
          </li>
          <li>
          If you struggle with self-motivation, you likely find it hard to plan long term and set goals. You struggle with procrastination and can't make yourself buckle down to do work unless you're really, really interested in the subject matter or you've waited until the last minute and feel a great deal of urgency.
          </li>
          <li>
          Lastly, if emotional management is a weakness area for you, you may face impulse control issues (I have to buy that hat! I have to join that new club!), have trouble dismissing negative or irrational thoughts, and let your stress run a little bit wild.
          </li>
        </ul>
        <p>
        Taken Together: You find it hard to say no and are constantly giving your time and energy to others. This can cause you to deprioritize your own needs. This focus on others may be causing you to sacrifice your organization, goals, and even emotional wellbeing which can, of course, add to any stress you are already experiencing.
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
