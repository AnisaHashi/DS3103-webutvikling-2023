import React, { useState } from "react";
import { useNavigate } from "react-router";

async function postTeamsQuiz(newQuiz) {
  const response = await fetch("/api/TeamsQuiz", {
    method: "POST",
    body: JSON.stringify(newQuiz),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}

export function TeamsQuizForm() {
  const [question, setQuestion] = useState("");
  const [alternativ1, setAlternativ1] = useState("");
  const [alternativ2, setAlternativ2] = useState("");
  const [alternativ3, setAlternativ3] = useState("");
  const [alternativ4, setAlternativ4] = useState("");

  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();

    const quiz = {
      question,
      answer,
      alternatives: `${alternativ1},${alternativ2},${alternativ3},${alternativ4}`,
    };

    postTeamsQuiz(quiz).then(() => {
      navigate("/teams-quiz");
    });

    console.log(quiz);
  }

  return (
    <form className="col-sm-6 mx-auto mt-5">
      <div className="mb-3">
        <label htmlFor="question" className="form-label">
          Legg til spørsmål
        </label>
        <input
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Spørsmål"
          type="text"
          className="form-control"
          id="question"
        />

        <div className="mt-5">
          <div className="d-flex">
            <div className="form-group col-sm-6">
              <input
                value={alternativ1}
                onChange={(event) => setAlternativ1(event.target.value)}
                className="form-control input-sm"
                type="text"
                placeholder="Alternative 1:"
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                value={alternativ2}
                onChange={(event) => setAlternativ2(event.target.value)}
                className="form-control input-sm"
                type="text"
                placeholder="Alternative 2:"
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="form-group col-sm-6">
              <input
                value={alternativ3}
                onChange={(event) => setAlternativ3(event.target.value)}
                className="form-control input-sm"
                type="text"
                placeholder="Alternative 3:"
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                value={alternativ4}
                onChange={(event) => setAlternativ4(event.target.value)}
                className="form-control input-sm"
                type="text"
                placeholder="Alternative 4:"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="answer" className="form-label">
          Answer
        </label>
        <select
          id="answer"
          name="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          className="form-control"
        >
          <option value="">Select Answer</option>
          {[alternativ1, alternativ2, alternativ3, alternativ4]
            .filter((a) => a.length > 0)
            .map((alternative) => (
              <option key={alternative} value={alternative}>
                {alternative}
              </option>
            ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary" onClick={submit}>
        Submit
      </button>
    </form>
  );
}
