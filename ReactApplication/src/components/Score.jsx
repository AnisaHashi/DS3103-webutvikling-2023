import React from "react";

export function Score(props) {
  const totalScorePercentage = ((props.correct / props.total) * 100).toFixed(2);
  const correctPercentage = ((props.correct / props.total) * 100).toFixed(2);
  const wrongPercentage = ((props.wrong / props.total) * 100).toFixed(2);
  return (
    <div className="card text-center col-md-10 mx-auto">
      <div className="card-header">Bra jobbet!</div>
      <div className="card-body">
        <h5 className="card-title">Total score {totalScorePercentage}%</h5>

        <ul class="list-group">
          <li class="list-group-item">
            Total correct answers: {props.correct}
          </li>
          <li class="list-group-item">
            Percentage correct answers: {correctPercentage}%
          </li>
          <li class="list-group-item">Total wrong answers: {props.wrong}</li>
          <li class="list-group-item">
            Percentage wrong answers: {wrongPercentage}%
          </li>
        </ul>
      </div>
    </div>
  );
}
