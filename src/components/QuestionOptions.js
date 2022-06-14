const QuestionOptions = ({ answers, answerQuestion, answerClass, answer }) => {
  return (
    <ul>
      {answers.map((option, i) => {
        return (
          <li
            onClick={() => {
              answerQuestion({ id: i, option: option });
            }}
            className={`answer answerHover ${
              answerClass && answer.option === option ? `correctAnswer` : ``
            }${!answerClass && answer?.id === i ? `incorrectAnswer` : ``}
            ${
              !answerClass && answer?.correctAnswer === option
                ? `correctAnswer`
                : ``
            }`}
            key={i}
          >
            {option}
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionOptions;
