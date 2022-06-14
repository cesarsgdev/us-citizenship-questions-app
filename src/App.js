import { MainContainer } from "./components/styled/MainContainer.styled";
import { QuestionContainer } from "./components/styled/QuestionContainer.style";
import { useEffect, useState } from "react";
import QuestionLoader from "./components/QuestionLoader";
import QuestionNumber from "./components/QuestionNumber";
import { NextButton } from "./components/styled/NextButton.styled";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";

function App() {
  const [questions, setQuestions] = useState(null);
  const [questionNum, setQuestionNum] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [isCorrect, setisCorrect] = useState(null);

  useEffect(() => {
    fetch("api/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    console.log(`effect ran!`);
    if (answer) {
      fetch(`api/questions/${questions[questionNum]._id}/${answer.option}`, {
        method: `POST`,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.result) {
            setisCorrect(data.result);
          } else {
            setisCorrect(data.result);
            if (data.correctAnswer) answer.correctAnswer = data.correctAnswer;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [answer]);

  const handleNextQuestion = () => {
    setAnswered(!answered);
    setQuestionNum(questionNum + 1);
    setAnswer(null);
    setisCorrect(null);
  };

  const handleAnswerQuestion = (answer) => {
    if (!answered) setAnswered(!answered);
    setAnswer(answer);
    console.log(answer);
    console.log(questions[questionNum]._id);
  };

  if (!questions)
    return (
      <Oval
        height="100"
        width="100"
        color="#FFF"
        secondaryColor="#FFF"
        ariaLabel="loading"
      />
    );

  if (questions)
    return (
      <>
        <MainContainer>
          <QuestionContainer>
            <QuestionNumber number={questionNum + 1} />
            <QuestionLoader
              selectAnswer={handleAnswerQuestion}
              questions={questions[questionNum]}
              answerClass={isCorrect}
              answer={answer}
            />
          </QuestionContainer>
          {!answered && <NextButton>Next Question</NextButton>}
          {answered && (
            <NextButton onClick={handleNextQuestion} active>
              Next Question
            </NextButton>
          )}
        </MainContainer>
      </>
    );
}

export default App;
