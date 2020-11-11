import {db} from '../config'
interface Quiz{
	
	decision_making:number,
	relationship_skills:number, 
	self_awareness:number,
	social_awareness:number, 
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
	  .catch(error => {
		  
		console.log("ERROR IN ADDING NEW USER");
	  });
  }

export const addOriginalQuizResult = async(quiz_result:{date:Date,quiz:Quiz}, user_id:string)=>{
	addQuizResult(quiz_result,user_id,`users/${user_id}/quiz_results/${quiz_result.date.toString()}/original_results`);
}
export const addReallocatedQuizResult = async(quiz_result:{date:Date,quiz:Quiz}, user_id:string)=>{
	addQuizResult(quiz_result,user_id,`users/${user_id}/quiz_results/${quiz_result.date.toString()}/reallocation_results`);
}


const addQuizResult = async (quiz_result:{date:Date,quiz:{decision_making:number}}, user_id:string,db_path:string) => {//takes in a quiz object and a users special uid to create a quiz under the uid.
	const quizDataRef = db.collection(db_path).doc()

	await quizDataRef.get()
		.then(async (snapshot: { exists: any; id: any; data: () => any }) => {//needs to check if the snapshot exists or not
			if (snapshot.exists) {
				console.log("quiz data already exists")
				console.log(snapshot.id)//gets the docs id
				console.log(snapshot.data())//gets the docs data
			} else {//doc.data() here will be undefined in this case
				//console.log("initializing quiz " + quiz.title)
				await quizDataRef.set({
					decision_making:quiz_result.quiz.decision_making
				})
			}
			return true
		}).catch((e: string) => {
			console.log("Error getting from storing quiz: " + e)
			return false
		})
}