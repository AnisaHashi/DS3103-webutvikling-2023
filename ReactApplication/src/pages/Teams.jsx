import React, { useEffect, useState } from "react";
import { TeamCard } from "../components/TeamCard";
import { Link } from "react-router-dom";

async function getTeams() {
  const response = await fetch("/api/Team");
  const data = await response.json();
  return data;
}

async function deleteTeam(teamId) {
  try {
    const response = await fetch(`/api/Team/${teamId}`, { method: "DELETE" });

    if (!response.ok) {
      throw new Error("Error deleting team");
    }
  } catch (error) {}
}

export function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((data) => setTeams(data));
  }, []);

  const handleDeleteTeam = async (teamId) => {
    await deleteTeam(teamId);

    getTeams().then((data) => setTeams(data));
  };

  if (teams.length === 0) {
    return (
      <div
        className="alert alert-info text-center position-fixed top-50 start-50 translate-middle"
        role="alert"
      >
        <span>No teams registered. </span>
        <Link to="/new-team">Register here</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex row m-3">
        <div className="d-flex justify-content-between m-3">
          <h2 className="my-2">F1 Teams 2023</h2>
          <Link to="/new-team" className="btn  btn-outline-danger">
            Add Team
          </Link>
        </div>
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} onDelete={handleDeleteTeam} />
        ))}
      </div>
    </div>
  );
}
