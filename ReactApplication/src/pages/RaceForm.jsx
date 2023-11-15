import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateTime } from "../components/DateTime";

async function postRace(newRace) {
  const response = await fetch("/api/Race", {
    method: "POST",
    body: JSON.stringify(newRace),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}

export function RaceForm() {
  const [winnerName, setWinnerName] = useState("");
  const [winnerTime, setWinnerTime] = useState(new Date());
  const [grandPrix, setGrandPrix] = useState("");
  const [numberOfLaps, setNumberOfLaps] = useState(0);

  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();

    const newRace = {
      winnerName,
      winnerTime,
      grandPrix,
      numberOfLaps,
    };

    console.log(newRace);

    // postRace(newRace).then(() => {
    //   navigate("/races");
    // });
  }

  const onDateChange = (newDate) => {
    setWinnerTime(newDate);
  };

  return (
    <form className="col-md-4 mx-auto m-5">
      <div className="mb-3">
        <label htmlFor="winnerName" className="form-label">
          Winner Name
        </label>
        <input
          type="text"
          id="winnerName"
          name="winnerName"
          value={winnerName}
          onChange={(event) => setWinnerName(event.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="winnerTime" className="form-label">
          Winner Time
        </label>
        <DateTime onDateChange={onDateChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="grandPrix" className="form-label">
          Grand Prix
        </label>
        <input
          type="text"
          id="grandPrix"
          name="grandPrix"
          value={grandPrix}
          onChange={(event) => setGrandPrix(event.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="numberOfLaps" className="form-label">
          Numer Of Laps
        </label>
        <input
          type="number"
          id="numberOfLaps"
          name="numberOfLaps"
          value={numberOfLaps}
          onChange={(event) => setNumberOfLaps(event.target.value)}
          className="form-control"
        />
      </div>

      <button onClick={submit} type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}
