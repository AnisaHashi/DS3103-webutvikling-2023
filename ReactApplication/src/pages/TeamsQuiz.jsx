import React, { useState, useEffect } from "react";
import { Quiz } from "../components/Quiz";
import { Score } from "../components/Score";
import { Link } from "react-router-dom";

async function getTeamsQuiz() {
  const response = await fetch("/api/TeamsQuiz");
  const data = await response.json();
  console.log("DATA RESPONSE (TeamsQuiz): ", data);

  const updated = data.map((current) => {
    return {
      ...current,
      alternatives: current.alternatives.split(","),
    };
  });
  return updated;
}

export function TeamsQuizPage() {
  const [TeamsQuiz, setTeamsQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState(false);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showWrongAlert, setShowWrongAlert] = useState(false);

  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reset = () => {
    setCheck(false);
    setShowSuccessAlert(false);
    setShowWrongAlert(false);
  };

  useEffect(() => {
    getTeamsQuiz()
      .then((data) => {
        setTeamsQuiz(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading Teams Quiz...</p>;
  }

  if (error) {
    return <p>Error fetching Teams Quiz data: {error.message}</p>;
  }

  const onNext = () => {
    reset();
    if (index < TeamsQuiz.length - 1) {
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

    const isCorrect = answer === TeamsQuiz[index]?.answer;
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
          total={TeamsQuiz.length}
          correct={totalCorrect}
          wrong={totalWrong}
        />
      ) : (
        <Quiz
          question={TeamsQuiz[index]?.question}
          alternatives={TeamsQuiz[index]?.alternatives || []}
          index={index + 1}
          total={TeamsQuiz.length}
          onNext={onNext}
          onPrev={onPrev}
          checkAnswer={checkAnswer}
          check={check}
          answer={TeamsQuiz[index]?.answer}
        />
      )}
      <div className="d-flex justify-content-center mt-3">
        <Link to="/quiz-form-teams" className="btn btn-outline-success">
          <span>Legg til mer quiz for teams</span>
        </Link>
      </div>
    </div>
  );
}
