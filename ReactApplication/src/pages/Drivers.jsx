import React, { useEffect, useState } from "react";
import { DriverCard } from "../components/DriverCard";
import { Link } from "react-router-dom";


async function getDrivers() {
  const response = await fetch("/api/Driver");
  const data = await response.json();
  return data;
}

async function deleteDriver(driverId) {
  try {
    const response = await fetch(`/api/Driver/${driverId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error deleting driver");
    }
  } catch (error) {
    console.error("Error deleting driver:", error.message);
  }
}

export function Drivers({ onSelectDriver }) {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    loadDrivers();
  }, []);

  const loadDrivers = async () => {
    const driverData = await getDrivers();
    setDrivers(driverData);
  };

  const handleDeleteDriver = async (driverId) => {
    await deleteDriver(driverId);
    loadDrivers();
  };

  if (drivers.length === 0) {
    return (
      <div
        className="alert alert-info text-center position-fixed top-50 start-50 translate-middle"
        role="alert"
      >
        <span>We do not have drivers registered. </span>
        <Link to="/new-driver">Register here</Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="my-2">F1 Drivers 2023</h2>
      <div className="d-flex m-3">
        {drivers.map((driver) => (
          <DriverCard
            key={driver.id}
            driver={driver}
            onSelect={() => onSelectDriver(driver.id)}
            onDelete={() => handleDeleteDriver(driver.id)}
          />
        ))}
      </div>
      <div className="d-flex justify-content-end m-3">
        <Link to="/new-driver" className="btn btn-outline-success">
          Add Driver
        </Link>
      </div>
    </div>
  );
}
