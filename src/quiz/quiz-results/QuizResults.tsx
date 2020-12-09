import React, { Component, useContext } from 'react';
import PolarAreaChart from '../../components/PolarAreaChart';
import { addOriginalQuizResult, addReallocatedQuizResult } from '../../firebase-db/firestore/db-functions'
import { statToScore } from '../QuizAdapterFunctions'
import './quiz-results.scss'
import PointsAllocation from '../../points-allocation/PointsAllocation';
import { Typology } from './TypologyDeterminator';
import TypologyDisplay from './typologies/TypologyDisplay';
import { UserContext } from '../../providers/UserProvider';
import { auth } from '../../firebase-db/config';
import ScrollToTop from '../../utils/ScrollToTop';
import { Category, getCategoryDefinition } from '../quiz-questions-data'

import ElementsAccordion from './ElementsAccordion'

// export const colors = ["#b4a7d6","#97B695 ","#6B9BC0","#FCD4bD","#F37F7F","#b4a7d6"];
export const colors = ["#ab8de0", "#d34545", "#45b0d3", "#8fe891", "#eac567", "ac88ef"];
export default class QuizResults extends Component<ResultsProps, IAppState>{

  constructor(props: ResultsProps) {
    super(props);
    this.state = {
      isAllocatePoints: false,
    }
  }
  componentDidMount() {
    let a = "";

    for (let k in this.props.stats) {
      a += "\n" + this.props.stats[k].category + ":" + this.props.stats[k].progress;

    }
    //add result to user
    const user = auth.currentUser;
    if (user != null && this.props.date != null) {
      console.log(`User is not null. Saving results now for user ${user}`);
      addOriginalQuizResult({
        date: this.props.date,
        typology: this.props.typology,
        quiz: statToScore(this.props.stats)
      }, user.uid);
    }
    else {
      console.log("User is null");
    }




    console.log(`Quiz Results are  is ${a}`);

  }

  polarChartData(stats: {
    category: string,
    progress: number,
    total: number
  }[]) {
    let values = [];
    let categories = [];
    let categoriesDescription = [];
    for (let i = 0; i < stats.length; i++) {
      values.push(stats[i].progress);
      categories.push(stats[i].category);
      categoriesDescription.push(getCategoryDefinition(stats[i].category));
    }

    let data = {
      datasets: [{ data: values, backgroundColor: colors, label: 'Results', borderColor: '#ffffff', borderWidth: 1 }],
      labels: categories,
      customLabelCaption: categoriesDescription
    };
    return data;
  }

  render() {
    let data = this.polarChartData(this.props.stats);

    return (
      <div>
        <ScrollToTop />
        { this.state.isAllocatePoints ?

          <PointsAllocation date={this.props.date} polarChartData={this.polarChartData} stats={this.props.stats} initTypology={this.props.typology} /> :
          <div className="quiz-results-container">
              <div className="snapshot">
                {/* <Grid container>
                  <Grid item xs={6}>
                    {this.renderDefinitions()}
                  </Grid> */}

                  {/* <Grid item xs={6}> */}
                    <h2>Your Elements</h2>
                    <PolarAreaChart data={data} />

                    <ElementsAccordion />

                  {/* </Grid>
                </Grid> */}
              </div>
              <div className="snapshot">
                <h2>Your Type</h2>
                <TypologyDisplay typology={this.props.typology} />
              </div>

              
            {
              this.props.canReallocatePoints ?
                <button onClick={(e) => { this.setState({ isAllocatePoints: true }) }}>Reallocate Points</button>
                :
                <div></div>
            }
          </div>
        }
      </div>
    )
  }
  renderDefinitions() {
    let defs = [];
    for (const category of Object.values(Category)) {
      defs.push(<p>{category + ": " + getCategoryDefinition(category)}</p>)
    }
    return <div>{defs}</div>
  }
}
interface ResultsProps {
  stats: {
    category: string,
    progress: number,
    total: number
  }[],
  typology: Typology,
  canReallocatePoints: boolean,
  date: Date | null
}
interface IAppState {
  isAllocatePoints: boolean,


}
