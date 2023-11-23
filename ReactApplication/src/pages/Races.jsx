import React, { useEffect, useState } from "react";
import { DateTime } from "../components/DateTime";
import { Link } from "react-router-dom";

function formatDate(date) {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = new Date(date).toLocaleDateString("nb-NO", options);
  return formattedDate;
}

async function getRaces() {
  try {
    const response = await fetch("/api/Race");
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

async function getTeams() {
  try {
    const response = await fetch("/api/Team");
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

export function Races() {
  const [races, setRaces] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getRaces().then((data) => setRaces(data));
    getTeams().then((data) => setTeams(data));
  }, []);

  if (races.length === 0) {
    return (
      <div
        className="alert alert-info text-center position-fixed top-50 start-50 translate-middle"
        role="alert"
      >
        <span>No races registered. </span>
        <Link to="/new-race">Register here</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="my-4">2023 RACE RESULTS</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Race ID</th>
            <th scope="col">Winner Name</th>
            <th scope="col">Winner Time</th>
            <th scope="col">Grand Prix</th>
            <th scope="col">Number of Laps</th>
          </tr>
        </thead>
        <tbody>
          {races.map((race) => (
            <tr key={race.id}>
              <td>{race.id}</td>
              <td>{race.winnerName}</td>
              <td>{formatDate(race.winnerTime)}</td>
              <td>{race.grandPrix}</td>
              <td>{race.numberOfLaps}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        to="/new-race"
        className="btn btn-outline-success position-fixed bottom-0 end-0 m-4"
      >
        Add New Race
      </Link>
    </div>
  );
}
