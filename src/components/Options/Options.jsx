export const Options = ({ handleFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>neutral</button>
      <button onClick={() => handleFeedback('bad')}>bad</button>

      {totalFeedback === 0 ? <></> : <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};
