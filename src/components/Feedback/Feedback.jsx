

export const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  const positivePer = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <div>
      <div>
        <h2>Feedback: </h2>
        <p>Good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positivePer}%</p>
      </div>
    </div>
  );
};
