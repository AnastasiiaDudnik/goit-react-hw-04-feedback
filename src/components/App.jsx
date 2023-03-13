import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackIncrement = evt => {
    const { name } = evt.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Number(this.state.good + this.state.neutral + this.state.bad);
  };

  countPositiveFeedbackPercentage = () => {
    return Number.parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const countedTotal = this.countTotalFeedback();
    const positiveCount = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            handleFeedbackIncrement={this.handleFeedbackIncrement}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            state={this.state}
            totalFeedback={countedTotal}
            positiveFeedback={positiveCount}
          />
        </Section>
      </>
    );
  }
}
