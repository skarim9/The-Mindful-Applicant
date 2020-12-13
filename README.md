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


## Deploy to Firebase
To start using our application, set up a firebase project and put your config in the src/firebase-db/config.js file of this repository. Then [follow these instructions for deploying to firebase](https://www.robinwieruch.de/firebase-deploy-react-js)

## Known Issues:
* When user first submits the quiz, there is a lag between when they press the submit button and when the quiz results page comes up. This is due to the async nature of the write-to-database operations. Possible future fixes include making a loading button when it is pressed.
* Points Allocation page with Polar Chart are not entirely responsive - when polar chart is squished too small by a small window, it does not display at all. (There will be an error in the log about negative radius)
* The user's 'reason for point reallocation' that they type into the prompt box when reallocating their points is not displayed. In the future, there will be a place that displays the text that they entered as well (It is currently only stored in the database)


## [Our App is Deployed] (https://quickstart-1573950019598.web.app/)

## Sources/ Modules Used
* [text-area-autosize](https://www.npmjs.com/package/react-textarea-autosize)
* [chartJS](https://www.chartjs.org/)
* [reactChartJS2](https://www.npmjs.com/package/react-chartjs-2)
* [reactChartJS2 Sample Code](https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/polar.js)
* [firebase docs](https://firebase.google.com/docs)
* [Firebase OAuth Tutorial](https://blog.logrocket.com/user-authentication-firebase-react-apps/)
* [Firebase OAuth Tutorial 2](https://levelup.gitconnected.com/authentication-using-firebase-and-react-js-99392c6fa58b)
* [Firebase OAuth Tutorial 3](https://dev.to/itnext/user-auth-with-firebase-and-react-1725)
* [Material UI Templates](https://material-ui.com/getting-started/templates/)
* [Material UI Sign In Template](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in)
* [Material UI Sign In Side Template](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in-side)
* [Material UI Bootstrap Input](https://material-ui.com/components/text-fields/)
* [Material UI AppBar](https://material-ui.com/components/app-bar/)
* [Material UI Drawer](https://material-ui.com/components/drawers/)
* [Travis CI NodeJS](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)
* [Travis CI Auto-Merge](https://medium.com/@allmonty/automerge-with-travis-ci-and-coveralls-to-elixir-248d1c6d2531)
* [Travis CI Merge Specific Branch](https://stackoverflow.com/questions/31338562/travisci-run-after-success-on-a-specific-branch)
* [Deploy to Firebase](https://www.robinwieruch.de/firebase-deploy-react-js)

## [Our App is Deployed] (https://quickstart-1573950019598.web.app/)

