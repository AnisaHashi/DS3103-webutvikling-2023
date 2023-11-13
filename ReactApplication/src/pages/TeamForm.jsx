import { useState } from "react";
import { useNavigate } from "react-router";

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

export function TeamForm() {
  const [driverOne, setDriverOne] = useState("");
  const [driverTwo, setDriverTwo] = useState("");
  const [id, setId] = useState(0);
  const [manufacturer, setManufacturer] = useState("");

  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();

    const newTeam = {
      driverOne,
      driverTwo,
      id,
      manufacturer,
    };

    console.log("newTeam: ", newTeam);

    postTeam(newTeam).then(() => navigate("/teams"));
  }

  return (
    <form className="col-md-4 mx-auto m-5">
      <div className="mb-3 ">
        <label for="exampleInputEmail1" className="form-label">
          DriverOne
        </label>
        <input
          type="text"
          value={driverOne}
          onChange={(event) => setDriverOne(event.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3 ">
        <label for="exampleInputEmail1" className="form-label">
          DriverTwo
        </label>
        <input
          type="text"
          value={driverTwo}
          onChange={(event) => setDriverTwo(event.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Id
        </label>
        <input
          type="number"
          value={id}
          onChange={(event) => setId(event.target.value)}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Manufacturer
        </label>
        <input
          type="text"
          value={manufacturer}
          onChange={(event) => setManufacturer(event.target.value)}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button onClick={submit} type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}
