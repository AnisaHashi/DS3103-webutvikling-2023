import React from "react";
import { Quiz } from "../components/Quiz";
import { useState } from "react";

const quiz = [
  {
    question: "Which of the following country has largest population?",
    alternatives: ["Brazil", "Indonisia", "Germany", "India"],
  },
  {
    question: "Which of the following country has smallest population?",
    alternatives: ["Norge", "Somalia", "Germany", "Turkey"],
  },
];

export function Home() {
  const [index, setIndex] = useState(0);

  // Pagination
  const onNext = () => {
    setIndex(index + 1);
  };
  const onPrev = () => {
    setIndex(index - 1);
  };

  return (
    <Quiz
      question={quiz[index].question}
      alternatives={quiz[index].alternatives}
      index={index + 1}
      total={quiz.length}
      onNext={onNext}
      onPrev={onPrev}
      // question="Which of the following country has largest population?"
      // alternatives={["Brazil", "Indonisia", "Germany", "India"]}
      // index={1}
      // total={5}
    />
  );
  return (
    <div className="bg-dark text-white d-flex p-5 mx-auto">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="">Din Hjemmeside</h1>
            <p>Dette er innholdet på hjemmesiden din.</p>

            <ul className="list-group d-flex justify-content-between">
              <li className=" list-group-item">
                <span>
                  Max <strong>VERSTAPPEN</strong>
                </span>
                <span>1:29:08.289</span>
              </li>

              <li className=" list-group-item">
                <span>
                  Charles <strong>LECRESC</strong>{" "}
                </span>
                <span className="justfy-content-between">1:29:08.289</span>
              </li>

              <li className=" list-group-item">
                <span>
                  Sergio <strong>PEREZ</strong>{" "}
                </span>
                <span>1:29:08.289</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
