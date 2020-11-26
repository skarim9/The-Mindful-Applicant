export enum Typology {
    Maverick = "The Maverick",
    Thinker = "The Thinker",
    Philosopher = "The Philosopher",
    Conscious = "The Conscious",
    Altruist = "The Altruist",
    Ally = "The Ally",
    Deliberator = "The Deliberator",
    Giver = "The Giver",
    Networker = "The Networker",
    Doer = "The Doer",
    Free_Spirit = "The Free Spirit",
    Collaborator = "The Collaborator",
    Officer = "The Officer",
    Go_Getter = "The Go Getter",
    Planner = "The Planner",
    Proj_Manager = "The Project Manager",
    Engineer = "The Engineer",
    Lone_Wolf = "The Lone Wolf",
    Independent_Operator = "The Independent Operator",
    System_Maker = "The System Maker"

  }

/**
 * Given score, determines the type based on highest and lowest score
 * @param score 
 */
export const determineType = (score:{
    decision_making:number
    relationship_skills:number 
    self_awareness:number
    social_awareness:number 
    self_management:number
}) =>{
    let maxCategory;
    let maxScore = score.decision_making;
    let minCategory;
    let minScore = score.decision_making;
//https://effectivetypescript.com/2020/05/26/iterate-objects/
    for (const [k, v] of Object.entries(score)) {
        if(v>=maxScore){
            maxCategory = k;
            maxScore = v;
        }
        if(v<=minScore){
            minCategory = k;
            minScore = v;
        }
    }
    let typology = Typology.Ally;
    console.log(`Min category is ${minCategory} with score ${minScore}\nMax category is ${maxCategory} with score ${maxScore}`);
    if(maxCategory=='self_awareness' && minCategory=='social_awareness'){
        typology = Typology.Maverick;
    }
    if(maxCategory=='self_awareness' && minCategory=='relationship_skills'){
        typology = Typology.Thinker;
    }
    if(maxCategory=='self_awareness' && minCategory=='decision_making'){
        typology = Typology.Philosopher;
    }
    if(maxCategory=='self_awareness' && minCategory=='self_management'){
        typology = Typology.Conscious;
    }




    console.log(`Typology is determined to be ${typology}`);



}