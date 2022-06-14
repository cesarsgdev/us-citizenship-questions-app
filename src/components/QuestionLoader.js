import Question from "./Question";
import QuestionOptions from "./QuestionOptions";

const QuestionLoader = ({ questions, selectAnswer, answerClass, answer }) => {
  return (
    <>
      {" "}
      <Question key={questions._id} question={questions.question} />
      <QuestionOptions
        answerQuestion={selectAnswer}
        answers={questions.answers}
        answerClass={answerClass}
        answer={answer}
      />
    </>
  );
};

export default QuestionLoader;
