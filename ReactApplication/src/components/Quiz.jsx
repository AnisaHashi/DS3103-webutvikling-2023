import React from "react";
import "./Quiz.css";

export function Quiz(props) {
  function getClassName(alternative) {
    const isCorrect = alternative === props.answer;
    const className = isCorrect ? "correct" : "wrong";
    return className;
  }
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-10 col-lg-10">
          <div className="border">
            <div className="question bg-white p-3 border-bottom">
              <div className="d-flex flex-row justify-content-between align-items-center mcq">
                <h4>F1 Quiz</h4>
                <span>{`(${props.index} of ${props.total})`}</span>
              </div>
            </div>
            <div className="question bg-white p-3 border-bottom">
              <div className="d-flex flex-row align-items-center question-title">
                <h3 className="text-danger">Q.</h3>
                <h5 className="mt-1 ml-2">{props.question}</h5>
              </div>
              {props.alternatives.map((alternative) => (
                <div className="ans ml-2">
                  <label className="radio">
                    <input
                      type="radio"
                      name={alternative}
                      value={alternative}
                      className={props.check ? getClassName(alternative) : ""}
                      onClick={() => props.checkAnswer(alternative)}
                    />
                    <span>{alternative}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
              <button
                className="btn btn-primary d-flex align-items-center btn-danger"
                type="button"
                onClick={props.onPrev}
              >
                <i className="fa fa-angle-left mt-1 mr-1"></i>previous
              </button>
              <button
                className="btn btn-primary border-success align-items-center btn-success"
                type="button"
                onClick={props.onNext}
              >
                Next<i className="fa fa-angle-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
