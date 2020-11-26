
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
    
    console.log(`Min category is ${minCategory} with score ${minScore}\nMax category is ${maxCategory} with score ${maxScore}`);
    if(maxCategory=='self_awareness'){
        console.log(`Success`);
    }



}