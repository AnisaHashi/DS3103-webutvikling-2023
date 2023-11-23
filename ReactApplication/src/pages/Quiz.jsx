import React from "react";
import { Quiz } from "../components/Quiz";
import { useState } from "react";
import { Score } from "../components/Score";

const quiz = [
  {
    question: "Which of the following country has largest population?",
    alternatives: ["Brazil", "Indonisia", "Germany", "India"],
    answer: "India",
  },
  {
    question: "Which of the following country has smallest population?",
    alternatives: ["Norge", "Somalia", "Germany", "Turkey"],
    answer: "Norge",
  },
  {
    question: "Hva kommer du fra?",
    alternatives: ["Norge", "Somalia", "Germany", "Turkey"],
    answer: "Somalia",
  },
];
export function QuizPage() {
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState(false);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showWrongAlert, setShowWrongAlert] = useState(false);

  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const reset = () => {
    setCheck(false);
    setShowSuccessAlert(false);
    setShowWrongAlert(false);
  };

  // Pagination
  const onNext = () => {
    reset();
    if (index < quiz.length - 1) {
      setIndex(index + 1);
    } else {
      setShowScore(true);
    }
  };
  const onPrev = () => {
    reset();
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const checkAnswer = (answer) => {
    setCheck(true);

    const isCorrect = answer === quiz[index].answer;
    if (isCorrect) {
      setShowSuccessAlert(true);
      setTotalCorrect(totalCorrect + 1);
    } else {
      setShowWrongAlert(true);
      setTotalWrong(totalWrong + 1);
    }
  };
  return (
    <div className="container">
      {showSuccessAlert && (
        <div class="col-md-8 mt-2 mx-auto alert alert-success" role="alert">
          Bravo! That is the correct answer.
        </div>
      )}

      {showWrongAlert && (
        <div class="col-md-8 mt-2 mx-auto alert alert-danger" role="alert">
          Sorry! That is not correct. Try next one!
        </div>
      )}

      {showScore === true ? (
        <Score total={quiz.length} correct={totalCorrect} wrong={totalWrong} />
      ) : (
        <Quiz
          question={quiz[index].question}
          alternatives={quiz[index].alternatives}
          index={index + 1}
          total={quiz.length}
          onNext={onNext}
          onPrev={onPrev}
          checkAnswer={checkAnswer}
          check={check}
          answer={quiz[index].answer}
        />
      )}
    </div>
  );
}
