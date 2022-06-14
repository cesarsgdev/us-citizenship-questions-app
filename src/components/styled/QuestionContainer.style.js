import styled from "styled-components";

export const QuestionContainer = styled.section`
  position: relative;
  width: 100%;
  height: fit-content;
  min-height: 300px;
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 5px;
  box-shadow: -1px -1px 2px 2px rgba(0, 0, 0, 0.05);
  user-select: none;

  & span {
    color: rgb(171, 171, 171);
    letter-spacing: -0.5px;
  }

  & h1,
  h2 {
    letter-spacing: -0.5px;
    color: white;
  }

  & h1 {
    font-size: 48px;
  }

  & p {
    font-size: 24px;
    letter-spacing: -0.5px;
    font-weight: 800;
  }

  & ul {
    list-style: none;
    user-select: none;
  }

  .answer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    color: rgb(108, 108, 108);
    background-color: rgba(255, 255, 255, 0.75);
    padding: 20px 20px;
    border: 2px solid rgb(225, 225, 225);
    margin: 5px 0;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.5s;
  }

  & .answerHover:hover {
    background: rgb(243, 243, 243);
    border-color: #000;
  }

  & .correctAnswer {
    color: white;
    background: green;
  }

  & .incorrectAnswer {
    border: 1px solid red;
  }
`;
