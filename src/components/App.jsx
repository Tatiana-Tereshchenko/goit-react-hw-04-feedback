import { useState } from 'react';
import { Feedbackoptions } from './Feedbackoptions/Feedbackoptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  
  const handelFeedback = (type) => {
    setFeedback((prevfeedback) => ({
      ...prevfeedback,
      [type]: prevfeedback[type] + 1
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  }

    const { good, neutral, bad } = feedback;
    const totalFeedback = countTotalFeedback();
    const pozitivPercentage = countPositiveFeedbackPercentage();



  return (
      <div>
        <Section title='Please leave feedback'>
          <Feedbackoptions
            options={['good', 'neutral', 'bad']}
            onLeaveFback = {handelFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {totalFeedback === 0 ? (<Notification message="There is no feedback" />) : (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={pozitivPercentage}
          />)}
        </Section>
      </div>
    ) 
  
}












