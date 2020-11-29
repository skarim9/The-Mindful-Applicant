import {Category,MAX_POINTS_PER_CATEGORY} from './quiz-questions-data'
/**
 * Few adapter functions to handle the way I coded up original quiz scores vs stats
 */
export const scoreToStat = (score:{
    decision_making:number,
    relationship_skills:number, 
    self_awareness:number,
    social_awareness:number, 
    self_management:number
}) =>{
    
    let max = MAX_POINTS_PER_CATEGORY;
    let arr:{
        category: string,
        progress:number,
        total:number
    }[] = [];
    arr.push({
        category:Category.Decision_Making.toString(),
        progress:score.decision_making,
        total:max
    });
    arr.push({
        category:Category.Relationship_Skills.toString(),
        progress:score.relationship_skills,
        total:max
    });
    arr.push({
        category:Category.Self_Awareness.toString(),
        progress:score.self_awareness,
        total:max
    });
    arr.push({
        category:Category.Self_Management.toString(),
        progress:score.self_management,
        total:max
    });
    arr.push({
        category:Category.Social_Awareness.toString(),
        progress:score.social_awareness,
        total:max
    });
    return arr;
}

export const statToScore=(stats:{
    category: string,
    progress:number,
    total:number
}[])=>{
    let score = {
        decision_making:0,
        relationship_skills:0, 
        self_awareness:0,
        social_awareness:0, 
        self_management:0
    }
    for(let i = 0 ; i< stats.length; i++){
        switch(stats[i].category){
            case Category.Decision_Making.toString():
                score.decision_making = stats[i].progress;
                break;
            case Category.Relationship_Skills.toString():
                score.relationship_skills = stats[i].progress;
                break;
            case Category.Self_Awareness.toString():
                score.self_awareness = stats[i].progress;
                break;
            case Category.Self_Management.toString():
                score.self_management = stats[i].progress;
                break;
            case Category.Social_Awareness.toString():
                score.social_awareness = stats[i].progress;
                break;
        }
    }
    return score;
}