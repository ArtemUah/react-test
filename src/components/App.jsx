import { Statistic } from "./Statistics";
import React, {Component} from "react";


export class App extends Component {

   state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }

   changeStat = (e) => {
        const parameter = e.target.textContent.toLowerCase();
        this.setState((prevState) => {
            return {
            [parameter]: prevState[parameter] + 1,
        }
        });
        
    }

    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = Number.parseInt(good + neutral + bad);
        return total;
    }

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const positive = Math.round(Number.parseInt(good) / (Number.parseInt(good + neutral + bad)) * 100);
        return positive;


    }
  
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage()
    return (
      <div>
        <Statistic good={ good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedback}  />
      </div>)
 }
};
