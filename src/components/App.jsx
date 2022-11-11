// import { Component } from 'react';
import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { TitleFeedback } from './Title_Feedback/Title_Feedback';
import { Container, ContainerStatistics } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = ['good', 'neutral', 'bad'];
  console.log(option);

  const incriment = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedback = () => {
    return parseInt((good / countTotalFeedback()) * 100 || 0);
  };

  return (
    <div>
      <TitleFeedback title="Please leave feedback" />
      <Container>
        <FeedbackOptions options={option} onLeaveFeedback={incriment} />
      </Container>
      <ContainerStatistics>
        <h2>Statistics</h2>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </ContainerStatistics>
    </div>
  );
};
