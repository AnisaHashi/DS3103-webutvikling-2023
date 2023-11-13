import { useEffect, useState } from "react";
import { TeamCard } from "../components/TeamCard";
import { Link } from "react-router-dom";

async function getTeams() {
  const response = await fetch("/api/Team");
  const data = await response.json();
  return data;
}

export function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((data) => setTeams(data));
  }, []);

  if (teams.length == 0) {
    return (
      <div class="alert alert-info text-center" role="alert">
        <span>We do not have drivers registered. </span>
        <Link to="/new-team">Register here</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex flex-column m-3">
        <div className="col-12">
          <h1 className="mt-2 p-2">F1 Teams 2023</h1>
        </div>
        {teams.map((team) => (
          <TeamCard team={team} />
        ))}
      </div>
      <div className="d-flex justify-content-end m-3">
        <Link to="/new-team" className="btn btn-outline-success ">
          Add Team
        </Link>
      </div>
    </div>
  );
}
