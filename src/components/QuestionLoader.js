import Question from "./Question";
import QuestionOptions from "./QuestionOptions";

const QuestionLoader = ({ questions, selectAnswer }) => {
  return (
    <>
      {" "}
      <Question key={questions._id} question={questions.question} />
      <QuestionOptions
        answerQuestion={selectAnswer}
        answers={questions.answers}
      />
    </>
  );
};

export default QuestionLoader;
