import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

async function postTeam(newTeam) {
  const response = await fetch("/api/Team", {
    method: "POST",
    body: JSON.stringify(newTeam),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}

async function getDriverName(driverId) {
  const response = await fetch(`/api/Driver/${driverId}`);
  const data = await response.json();
  return data;
}

export function TeamForm() {
  const [driverOne, setDriverOne] = useState("");
  const [driverTwo, setDriverTwo] = useState("");
  const [id, setId] = useState(0);
  const [manufacturer, setManufacturer] = useState("");
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
    } catch (error) {}
  };

  const generateDriverOption = (driver) => {
    return `${driver.name} (ID: ${driver.id})`;
  };

  function submit(event) {
    event.preventDefault();

    const newTeam = {
      driverOne,
      driverTwo,
      manufacturer,
    };

    postTeam(newTeam).then(() => {
      navigate("/teams");
    });
  }

  return (
    <form className="col-md-4 mx-auto m-5">
      <div className="mb-3">
        <label htmlFor="driverOne" className="form-label">
          DriverOne
        </label>
        <select
          id="driverOne"
          name="driverOne"
          value={driverOne}
          onChange={(event) => setDriverOne(event.target.value)}
          className="form-control"
        >
          <option value="">Select Driver</option>
          {drivers.map((driver) => (
            <option key={driver.id} value={driver.id}>
              {generateDriverOption(driver)}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="driverTwo" className="form-label">
          DriverTwo
        </label>
        <select
          id="driverTwo"
          name="driverTwo"
          value={driverTwo}
          onChange={(event) => setDriverTwo(event.target.value)}
          className="form-control"
        >
          <option value="">Select Driver</option>
          {drivers.map((driver) => (
            <option key={driver.id} value={driver.id}>
              {generateDriverOption(driver)}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="mb-3">
        <label htmlFor="id" className="form-label">
          Id
        </label>
        <input
          type="number"
          id="id"
          name="id"
          value={id}
          onChange={(event) => setId(event.target.value)}
          className="form-control"
        />
      </div> */}
      <div className="mb-3">
        <label htmlFor="manufacturer" className="form-label">
          Manufacturer
        </label>
        <input
          type="text"
          id="manufacturer"
          name="manufacturer"
          value={manufacturer}
          onChange={(event) => setManufacturer(event.target.value)}
          className="form-control"
        />
      </div>

      <button onClick={submit} type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}
