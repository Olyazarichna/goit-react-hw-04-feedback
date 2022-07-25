import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = event => {
   let value = event.target.textContent.toLowerCase();
   

    this.setState(prev => {
      return { [value]: prev[value] + 1 };
    });
  };

  countTotalFeedback() {
    let total = 0;
    for (const key in this.state) {
      total += this.state[key];
    }
    return total;
  }
  countPositiveFeedbackPercentage() {
    let total = 0;
    for (const key in this.state) {
      total += this.state[key];
    }
    let percentage = Math.round((this.state.good / total) * 100);
    return percentage;
  }
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onBtnClick}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
