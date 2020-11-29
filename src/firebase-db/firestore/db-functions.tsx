import {db} from '../config'
import {Typology} from '../../quiz/quiz-results/TypologyDeterminator'
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

export const addOriginalQuizResult = async(quiz_result:{date:Date,quiz:Quiz,typology:Typology}, user_id:string)=>{
	addQuizResult(quiz_result,user_id,`users/${user_id}/quiz_results/${quiz_result.date.toString()}`,false);
}
export const addReallocatedQuizResult = async(quiz_result:{date:Date,quiz:Quiz,typology:Typology}, user_id:string)=>{
	addQuizResult(quiz_result,user_id,`users/${user_id}/quiz_results/${quiz_result.date.toString()}`,true);
}

const addQuizResult = async (quiz_result:{date:Date,quiz:Quiz,typology:Typology}, user_id:string,db_path:string, isReallocated:boolean) => {//takes in a quiz object and a users special uid to create a quiz under the uid.
	const quizDataRef = db.doc(db_path);

	await quizDataRef.get()
		.then(async (snapshot: { exists: any; id: any; data: () => any }) => {//needs to check if the snapshot exists or not
			if (snapshot.exists) {
				console.log("quiz data already exists")
				console.log(snapshot.id)//gets the docs id
				console.log(snapshot.data())//gets the docs data
				await quizDataRef.update({
					quiz: quiz_result.quiz,
					typology: quiz_result.typology,
					isReallocated: isReallocated
				})
			} else {//doc.data() here will be undefined in this case
				//console.log("initializing quiz " + quiz.title)
				await quizDataRef.set({
					date: quiz_result.date,
					quiz: quiz_result.quiz,
					typology: quiz_result.typology,
					isReallocated: isReallocated
				})
			}
			return true
		}).catch((e: string) => {
			console.log("Error getting from storing quiz: " + e)
			return false
		})
}

