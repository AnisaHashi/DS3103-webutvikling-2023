import React, { useEffect, useState } from "react";

async function getRaces() {
  try {
    
    const response = await fetch("/api/Race");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching races:", error);
    return [];
  }
}

export function Races() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    getRaces().then((data) => setRaces(data));
  }, []);

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
              <td>{race.winnerTime}</td>
              <td>{race.grandPrix}</td>
              <td>{race.numberOfLaps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
