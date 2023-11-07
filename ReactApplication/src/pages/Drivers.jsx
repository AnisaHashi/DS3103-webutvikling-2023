import { useEffect, useState } from "react";
import { DriverCard } from "../components/DriverCard";
import { Link } from "react-router-dom";

async function getDrivers() {
  const response = await fetch("/api/Driver");
  const data = await response.json();
  return data;
}

export function Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDrivers().then((data) => setDrivers(data));
  }, []);

  return (
    <div>
      <div className="d-flex">
        {drivers.map((driver) => (
          <DriverCard driver={driver} />
        ))}
      </div>
      <div className="d-flex justify-content-end m-3">
        <Link to="/new-driver" className="btn btn-outline-success ">
          Add Driver
        </Link>
      </div>
    </div>
  );
}
