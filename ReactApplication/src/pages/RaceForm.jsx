import React, { useState, useEffect } from "react";
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
  const [drivers, setDrivers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await fetch("/api/Driver");
      const data = await response.json();
      setDrivers(data);
    } catch (error) {
      console.error("Error fetching drivers", error);
    }
  };

  function submit(event) {
    event.preventDefault();

    const newRace = {
      winnerName,
      winnerTime,
      grandPrix,
      numberOfLaps,
    };

    postRace(newRace).then(() => {
      navigate("/races");
    });
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
        <select
          id="winnerName"
          name="winnerName"
          value={winnerName}
          onChange={(event) => setWinnerName(event.target.value)}
          className="form-control"
        >
          <option value="">Select Driver</option>
          {drivers.map((driver) => (
            <option key={driver.id} value={driver.name}>
              {driver.name}
            </option>
          ))}
        </select>
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
