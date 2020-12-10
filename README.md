# The Mindful Applicant 
This app contains a personality quiz that assesses its user in five core categories: Decision Making, Self-Management, Social-Awareness, Self-Awareness, and Relationship Skills. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).        

[![Build Status](https://travis-ci.com/skarim9/The-Mindful-Applicant.svg?token=EQsqRwKgMytt4RipPrDc&branch=main)](https://travis-ci.com/skarim9/The-Mindful-Applicant)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



If you decide to change any comparative questions, go to the quiz-questions-data.tsx file



## Known Issues:
* When user first submits the quiz, there is a lag between when they press the submit button and when the quiz results page comes up. This is due to the async nature of the write-to-database operations. Possible future fixes include making a loading button when it is pressed. 
* The user's 'reason for point reallocation' that they type into the prompt box when reallocating their points is not displayed. In the future, there will be a place that displays the text that they entered as well (It is currently only stored in the database)

## Sources



## [Our App is Deployed] (https://quickstart-1573950019598.web.app/)
