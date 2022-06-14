const QuestionOptions = ({ answers, answerQuestion }) => {
  return (
    <ul>
      {answers.map((option, i) => {
        return (
          <li onClick={answerQuestion} className="answer answerHover" key={i}>
            {option}
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionOptions;
