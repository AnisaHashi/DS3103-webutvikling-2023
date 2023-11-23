import React, { useState, useEffect } from "react";
import { Quiz } from "../components/Quiz";
import { Score } from "../components/Score";
import { Link } from "react-router-dom";

async function getDriversQuiz() {
  const response = await fetch("/api/DriversQuiz");
  const data = await response.json();
  console.log("DATA RESPONSE: ", data);

  const updated = data.map((current) => {
    return {
      ...current,
      alternatives: current.alternatives.split(","),
    };
  });
  return updated;
}

export function DriversQuizPage() {
  const [DriversQuiz, setDriversQuiz] = useState([]);
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

  useEffect(() => {
    getDriversQuiz().then((data) => {
      console.log("data: ", data);
      setDriversQuiz(data);
    });
  }, []);

  // Pagination
  const onNext = () => {
    reset();
    if (index < DriversQuiz.length - 1) {
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

    const isCorrect = answer === DriversQuiz[index]?.answer;
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
        <div className="col-md-8 mt-2 mx-auto alert alert-success" role="alert">
          Bravo! That is the correct answer.
        </div>
      )}

      {showWrongAlert && (
        <div className="col-md-8 mt-2 mx-auto alert alert-danger" role="alert">
          Sorry! That is not correct. Try the next one!
        </div>
      )}

      {showScore === true ? (
        <Score
          total={DriversQuiz.length}
          correct={totalCorrect}
          wrong={totalWrong}
        />
      ) : (
        <Quiz
          question={DriversQuiz[index]?.question}
          alternatives={DriversQuiz[index]?.alternatives || []}
          index={index + 1}
          total={DriversQuiz.length}
          onNext={onNext}
          onPrev={onPrev}
          checkAnswer={checkAnswer}
          check={check}
          answer={DriversQuiz[index]?.answer}
        />
      )}
      <div className="d-flex justify-content-center mt-3">
        <Link to="/quiz-form" className="btn btn-outline-success">
          <span>Legg til mer quiz</span>
        </Link>
      </div>
    </div>
  );
}
