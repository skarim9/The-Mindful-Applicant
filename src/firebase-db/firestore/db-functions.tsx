import {db} from '../config'

export const addQuizResult = async (quiz_result:{date:Date,quiz:{decision_making:number}}, user_id:string) => {//takes in a quiz object and a users special uid to create a quiz under the uid.
	const quizDataRef = db.collection(`users/${user_id}/quiz_results/${quiz_result.date.toString()}/original_results`).doc()

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