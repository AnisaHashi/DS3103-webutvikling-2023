export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Forumla 1
        </a>
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
                <a
                  className="nav-link active text-white fs-5"
                  aria-current="page"
                  href="#"
                >
                  Drivers
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-white fs-5" href="#">
                  Teams
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-white fs-5" href="#">
                  Races
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
