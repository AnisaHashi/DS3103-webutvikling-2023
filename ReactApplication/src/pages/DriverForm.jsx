import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

async function postDriverImage(file, fileName) {
  const formData = new FormData();
  formData.append("file", file, fileName);

  await axios({
    url: "/api/file",
    method: "POST",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });

  formData.delete("file");

  return Promise.resolve();
}

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
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    const newDriver = {
      name,
      age,
      nationality,
    };

    await postDriverImage(file, `${name}.png`);
    await postDriver(newDriver);
    navigate("/drivers");
  }

  function handleImage(event) {
    let file = event.target.files[0];
    setFile(file);
  }

  return (
    <form className="col-md-4 mx-auto m-5">
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

      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Image
        </label>
        <input
          type="file"
          onChange={handleImage}
          className="form-control"
          id="exampleInputPassword1"
          accept="image/png, image/jpeg"
        />
      </div>

      <button onClick={submit} type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}
