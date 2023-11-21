import React from "react";

export function Home() {
  return (
    <div className="bg-dark text-white d-flex p-5 mx-auto">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="">Din Hjemmeside</h1>
            <p>Dette er innholdet på hjemmesiden din.</p>

            <ul className="list-group d-flex justify-content-between">
              <li className=" list-group-item">
                <span>
                  Max <strong>VERSTAPPEN</strong>
                </span>
                <span>1:29:08.289</span>
              </li>

              <li className=" list-group-item">
                <span>
                  Charles <strong>LECRESC</strong>{" "}
                </span>
                <span className="justfy-content-between">1:29:08.289</span>
              </li>

              <li className=" list-group-item">
                <span>
                  Sergio <strong>PEREZ</strong>{" "}
                </span>
                <span>1:29:08.289</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
