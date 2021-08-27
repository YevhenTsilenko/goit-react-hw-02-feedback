import React, { Fragment } from 'react';
import './App.css';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackButtons/FeedbackOptions';
import { Notification } from './components/Notification/Notification';
import { Statistics } from './components/Statistics/Statistics';

class App extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  btnCklickCounter = (evt) => {
    const btnName = evt.currentTarget.name;
    this.setState((PrevState) => ({
      [btnName]: PrevState[btnName] + 1
    }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage =(total) => {
    total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good * 100) / total)
  }

  render () {
    const { good, neutral, bad } = this.state;
    const positiveFeedbacks = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    const names = Object.keys(this.state);

    return (
      <Fragment>

        <Section title="Please leave feedback">
          <FeedbackOptions options={names} onLeaveFeedback={this.btnCklickCounter} />
        </Section>

        <Section title="Statistics">
          {total === 0 ? 
          <Notification message="No feedback given" /> : 
          <Statistics  
            good={good} 
            neutral={neutral}
            bad={bad}
            total={total} 
            positiveFeedbacks={positiveFeedbacks} />}
        </Section>
      </Fragment>
     
    )
  }
}

export default App;
