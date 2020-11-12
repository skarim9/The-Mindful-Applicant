import {Category} from './quiz-questions-data'
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
    let max = 100;
    let arr = [];
    arr.push({
        category:Category.Decision_Making,
        progress:score.decision_making,
        total:max
    });
    arr.push({
        category:Category.Relationship_Skills,
        progress:score.relationship_skills,
        total:max
    });
    arr.push({
        category:Category.Self_Awareness,
        progress:score.self_awareness,
        total:max
    });
    arr.push({
        category:Category.Self_Management,
        progress:score.self_management,
        total:max
    });
    arr.push({
        category:Category.Social_Awareness,
        progress:score.social_awareness,
        total:max
    });
    return arr;
}