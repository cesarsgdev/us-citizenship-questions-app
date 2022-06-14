import { MainContainer } from "./components/styled/MainContainer.styled";
import { QuestionContainer } from "./components/styled/QuestionContainer.style";
import { useEffect, useState } from "react";
import QuestionLoader from "./components/QuestionLoader";
import { NextButton } from "./components/styled/NextButton.styled";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";

function App() {
  const [questions, setQuestions] = useState(null);
  const [questionNum, setQuestionNum] = useState(0);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (!questions) {
      fetch("api/questions")
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data);
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [questions, questionNum]);

  const handleNextQuestion = () => {
    setAnswered(!answered);
    setQuestionNum(questionNum + 1);
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
            <QuestionLoader
              selectAnswer={() => {
                if (!answered) setAnswered(!answered);
              }}
              questions={questions[questionNum]}
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
