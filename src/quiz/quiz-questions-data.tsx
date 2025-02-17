export enum Category {
    Decision_Making = "Decision Making",
    Self_Awareness = "Self Awareness",
    Self_Management = "Self Management",
    Social_Awareness = "Social Awareness",
    Relationship_Skills = "Relationship Skills"
  }
export const getCategoryDefinition = (category:string)=>{
    switch(category){
        case Category.Self_Awareness:
            return "The ability to accurately recognize one’s own emotions, thoughts, and values and how they influence behavior. The ability to accurately assess one’s strengths and limitations, with a well-grounded sense of confidence, optimism, and a “growth mindset."
        case Category.Decision_Making:
            return "The ability to make constructive choices about personal behavior and social interactions based on ethical standards, safety concerns, and social norms. The realistic evaluation of consequences of various actions, and a consideration of the well-being of oneself and others."
        case Category.Self_Management:
            return "The ability to successfully regulate one’s emotions, thoughts, and behaviors in different situations — effectively managing stress, controlling impulses, and motivating oneself. The ability to set and work toward personal and academic goals."
        case Category.Social_Awareness:
            return "The ability to take the perspective of and empathize with others, including those from diverse backgrounds and cultures. The ability to understand social and ethical norms for behavior and to recognize family, school, and community resources and supports."
        case Category.Relationship_Skills:
            return "The ability to establish and maintain healthy and rewarding relationships with diverse individuals and groups. The ability to communicate clearly, listen well, cooperate with others, resist inappropriate social pressure, negotiate conflict constructively, and seek and offer help when needed."

    }
    return "";
}
export const questionsData = [
    {
        option1:
        {
            statement:'I know myself. I can react well to different situations.',
            category:Category.Self_Awareness
        },
        option2:
        {
            statement:'I dismiss negative thoughts I have about myself when they arise.',
            category:Category.Self_Management
        }
    },
    {
        option1:{
            statement:'I understand how to use my strengths and weaknesses to make future plans.',
            category:Category.Self_Awareness
        },
        option2:{
            statement:'I ask people in school and in my community for help when I face a problem.',
            category: Category.Social_Awareness
        }
    },
    
    {
        option1:{
            statement:'I overcome setbacks and failures.',
            category:Category.Self_Awareness
        },
        option2:{
            statement:'I don\'t let my peers push me into things I don\'t want to do.',
            category: Category.Relationship_Skills
        }
    },
    
    {
        option1:{
            statement:'I don\'t doubt myself, and I also don\'t overestimate my abilities.',
            category:Category.Self_Awareness
        },
        option2:{
            statement:'I keep my friends safe and healthy when I\'ve invited them somewhere.',
            category: Category.Decision_Making
        }
    },
    
    {
        option1:{
            statement:'I control my emotions.',
            category:Category.Self_Management
        },
        option2:{
            statement:'I understand how others feel.',
            category: Category.Social_Awareness
        }
    },
    
    {
        option1:{
            statement:'I take small steps every day to achieve my goals.',
            category:Category.Self_Management
        },
        option2:{
            statement:'I confront friends about problems, even if it sucks.',
            category: Category.Relationship_Skills
        }
    },
    
    {
        option1:{
            statement:'I do well in events like competitions or presentations) when I\'m asked to perform under pressure.',
            category:Category.Self_Management
        },
        option2:{
            statement:'I analyze a situation in order to anticipate what will happen next.',
            category: Category.Decision_Making
        }
    },
    
    {
        option1:{
            statement:'I\'m aware of helping people that have less than me, and not feeling resentful of those that have more.',
            category:Category.Social_Awareness
        },
        option2:{
            statement:'I am comfortable giving and receiving feedback.',
            category: Category.Relationship_Skills
        }
    },
    
    {
        option1:{
            statement:'I am often reading the room and alert to how others are feeling.',
            category:Category.Social_Awareness
        },
        option2:{
            statement:'I do what I think is right even when pressured not to.',
            category: Category.Decision_Making
        }
    },
    
    {
        option1:{
            statement:'I am good at making my point clear when speaking to others.',
            category:Category.Relationship_Skills
        },
        option2:{
            statement:'I am good at thinking through the impact of actions I take.',
            category: Category.Decision_Making
        }
    },
    
    {
        option1:{
            statement:'I\'m good at solving problems (either mechanical or human in nature.)',
            category:Category.Decision_Making
        },
        option2:{
            statement:'I am helpful in group / team projects.',
            category: Category.Relationship_Skills
        }
    },
    
    {
        option1:{
            statement:'I often reflect on decisions I\'ve made to understand if I could have done something differently.',
            category:Category.Decision_Making
        },
        option2:{
            statement:'I am often reading the room and alert to how others are feeling.',
            category: Category.Social_Awareness
        }
    },
    
    {
        option1:{
            statement:'I am good at making friends.',
            category:Category.Relationship_Skills
        },
        option2:{
            statement:'I\'m good at showing appreciation for others.',
            category: Category.Social_Awareness
        }
    },
    
    {
        option1:{
            statement:'I have high standards for my own actions, morally speaking.',
            category:Category.Decision_Making
        },
        option2:{
            statement:'I am good at managing my stress. It doesn\'t overwhelm or paralyze me.',
            category: Category.Self_Management
        }
    },
    
    {
        option1:{
            statement:'I\'m aware when I\'ve hurt someone and I don\'t hesitate to apologize.',
            category:Category.Relationship_Skills
        },
        option2:{
            statement:'My organization system helps me.',
            category: Category.Self_Management
        }
    },
    
    {
        option1:{
            statement:'It is easy for me to imagine myself in another person\'s position and understand how they feel.',
            category:Category.Social_Awareness
        },
        option2:{
            statement:'I have good habits and practices in my life to help me care for myself.',
            category: Category.Self_Management
        }
    },
    
    {
        option1:{
            statement:'I\'m good at coming up with possible solutions to problems.',
            category:Category.Decision_Making
        },
        option2:{
            statement:'I\'m good at advocating for myself.',
            category: Category.Self_Awareness
        }
    },
    
    {
        option1:{
            statement:'I\'m aware when people need help and reach out to them.',
            category:Category.Relationship_Skills
        },
        option2:{
            statement:'I\'m confident in my abilities.',
            category: Category.Self_Awareness
        }
    },
    
    {
        option1:{
            statement:'I appreciate people\'s differences (that can be race, religion, gender, politics, geography, ideas, etc.)',
            category:Category.Social_Awareness
        },
        option2:{
            statement:'I know how my values influence my behavior.',
            category: Category.Self_Awareness
        }
    },
    
    {
        option1:{
            statement:'When I\'m working on a long term project I can keep myself motivated.',
            category:Category.Self_Management
        },
        option2:{
            statement:'I have a positive outlook. I believe things will work out (even when times are hard.)',
            category: Category.Self_Awareness
        }
    }
    
];

export const MAX_POINTS_PER_CATEGORY = 24;

