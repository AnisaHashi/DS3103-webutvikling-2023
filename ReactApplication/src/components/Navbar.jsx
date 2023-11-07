import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger bg-gradient">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Forumla 1
        </Link>
        <div className="mx-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <Link
                  to={"/drivers"}
                  className="nav-link active text-white fs-5"
                >
                  Drivers
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to={"/teams"} className="nav-link text-white fs-5">
                  Teams
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to={"/races"} className="nav-link text-white fs-5">
                  Races
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
