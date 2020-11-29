import {db} from '../config'
interface Quiz{
	decision_making:number
	relationship_skills:number 
	self_awareness:number
	social_awareness:number 
	self_management:number
}
export const addNewUser = async(school_email:string) => {
	const data = {
	  email:school_email,
	  uid: new Date().getTime()
	};
  
	// adding data here
	db.collection("users")
	  .doc(data.email)
	  .set(data)
	  .then(() => {
		console.log("New user has been added ");
	  })
	  .catch(() => {
		  
		console.log("ERROR IN ADDING NEW USER");
	  });
  }

export const addOriginalQuizResult = async(quiz_result:{date:Date,quiz:Quiz}, user_id:string)=>{
	addQuizResult(quiz_result,user_id,`users/${user_id}/quiz_results/${quiz_result.date.toString()}`,false);
}
export const addReallocatedQuizResult = async(quiz_result:{date:Date,quiz:Quiz}, user_id:string)=>{
	addQuizResult(quiz_result,user_id,`users/${user_id}/quiz_results/${quiz_result.date.toString()}`,true);
}

const addQuizResult = async (quiz_result:{date:Date,quiz:Quiz}, user_id:string,db_path:string, isReallocated:boolean) => {//takes in a quiz object and a users special uid to create a quiz under the uid.
	const quizDataRef = db.doc(db_path);

	await quizDataRef.get()
		.then(async (snapshot: { exists: any; id: any; data: () => any }) => {//needs to check if the snapshot exists or not
			if (snapshot.exists) {
				console.log("quiz data already exists")
				console.log(snapshot.id)//gets the docs id
				console.log(snapshot.data())//gets the docs data
				await quizDataRef.update({
					quiz: quiz_result.quiz,
					isReallocated: isReallocated
				})
			} else {//doc.data() here will be undefined in this case
				//console.log("initializing quiz " + quiz.title)
				await quizDataRef.set({
					quiz: quiz_result.quiz,
					isReallocated: isReallocated
				})
			}
			return true
		}).catch((e: string) => {
			console.log("Error getting from storing quiz: " + e)
			return false
		})
}


export const getQuizReallocationResults = async (user_id:string) => {//returns an array of quiz objects for user from firestore.
	//console.log("updating profile with quizs from " + user_id)
	let quizs: Quiz[] = [];
	const quizDataRef = db.collection(`users/${user_id}/quiz_results`)
	await quizDataRef.get()
		.then(async (snapshot) => {
			
			console.log("iterating through user: " + user_id + " quizData")
			await snapshot.docs.forEach(quiz => {
				
				let quiz_result = {
					
					decision_making:quiz.get('decision_making'),
					relationship_skills:quiz.get('relationship_skills'), 
					self_awareness:quiz.get('self_awareness'),
					social_awareness:quiz.get('social_awareness'), 
					self_management:quiz.get('self_management')
				};
				quizs.push(quiz_result)
			})
			return quizs;
		}, e => {
			return e
		})
	return quizs;
}