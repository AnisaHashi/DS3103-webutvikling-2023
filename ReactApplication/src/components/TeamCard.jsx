import "./TeamCard.css";
import React, { useEffect, useState } from "react";

export function TeamCard(props) {
  const [driverOneName, setDriverOneName] = useState("");
  const [driverTwoName, setDriverTwoName] = useState("");

  useEffect(() => {
    if (props.team.driverOne) {
      getDriverName(props.team.driverOne).then((name) =>
        setDriverOneName(name)
      );
    }
    if (props.team.driverTwo) {
      getDriverName(props.team.driverTwo).then((name) =>
        setDriverTwoName(name)
      );
    }
  }, [props.team.driverOne, props.team.driverTwo]);

  async function getDriverName(driverId) {
    try {
      const response = await fetch(`/api/Driver/${driverId}`);
      if (!response.ok) {
        throw new Error("Error fetching driver name");
      }
      const data = await response.json();
      return data.name;
    } catch (error) {
      console.error(error);
      return "Unknown Driver";
    }
  }

  const handleDelete = () => {
    if (typeof props.onDelete === "function") {
      props.onDelete(props.team.id);
    }
  };

  return (
    <article style={{ width: "550px" }}>
      <div className="card m-2" style={{ width: "500px" }}>
        <div className="card-body">
          <h5 className="card-title">DriverOne: {driverOneName}</h5>
          <hr />
          <h5 className="card-title">DriverTwo: {driverTwoName}</h5>
          <hr />
          <p className="card-text">Id: {props.team.id}</p>
          <hr />
          <p className="card-text">Manufacturer: {props.team.manufacturer}</p>
        </div>
        <img
          height={1}
          src="https://placehold.co/100"
          className="card-img-top"
          alt="Responsive image"
        ></img>
        <div className="card-footer d-flex justify-content-center  ">
          <button
            className="btn btn-danger btn-lg fw-bold "
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
