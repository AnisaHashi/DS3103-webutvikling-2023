import { useState } from "react";
import { useNavigate } from "react-router";

async function postDriver(newDriver) {
  const response = await fetch("/api/Driver", {
    method: "POST",
    body: JSON.stringify(newDriver),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
}

export function DriverForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");

  const navigate = useNavigate();

  function submit(event) {
    event.preventDefault();

    const newDriver = {
      name,
      age,
      nationality,
    };

    postDriver(newDriver).then(() => navigate("/drivers"));
  }

  return (
    <form className="col-md-4 mx-auto">
      <div className="mb-3 ">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Age
        </label>
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Nationality
        </label>
        <input
          type="text"
          value={nationality}
          onChange={(event) => setNationality(event.target.value)}
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
