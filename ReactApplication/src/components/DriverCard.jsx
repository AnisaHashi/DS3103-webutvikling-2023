import React from "react";

export function DriverCard({ driver, onDelete }) {
  const handleDelete = () => {
   
    if (typeof onDelete === "function") {
      onDelete(driver.id);
    }
  };

  return (
    <div className="driver-card card m-2" style={{ width: "18rem" }}>
      <img
        height={1}
        src="https://placehold.co/100"
        className="img-fluid"
        alt="Responsive image"
      ></img>
      <div className="card-body">
        <h5 className="card-title">Name: {driver.name}</h5>
        <hr />
        <p className="card-text">Age: {driver.age}</p>
        <hr />
        <p className="card-text">Nationality: {driver.nationality}</p>
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
