import { useState } from 'react';
import { Description } from '../Description/Description';
import { useEffect } from 'react';
import { Options } from '../Options/Options';
import { Feedback } from '../Feedback/Feedback';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({ ...prevFeedback, [type]: prevFeedback[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options  handleFeedback={handleFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}/>
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback totalFeedback={totalFeedback} good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};
export default App;
