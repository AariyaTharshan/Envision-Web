import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#343a40' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Envision
        </a>
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
            {/* Dropdown for File */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="fileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                File
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="fileDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    New
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Open
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Save
                  </a>
                </li>
              </ul>
            </li>
            {/* Dropdown for Settings */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="settingsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="settingsDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Camera Settings
                  </a>
                </li>
              </ul>
            </li>
            {/* Dropdown for Images */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="imagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Images
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="imagesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Upload
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gallery
                  </a>
                </li>
              </ul>
            </li>
            {/* Dropdown for Process */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="processDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Process
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="processDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Start
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Stop
                  </a>
                </li>
              </ul>
            </li>
            {/* Dropdown for Measurements */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="measurementsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Measurements
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="measurementsDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    View
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Analyze
                  </a>
                </li>
              </ul>
            </li>
            {/* Dropdown for Help */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="helpDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Help
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="helpDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
