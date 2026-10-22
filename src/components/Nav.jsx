import DateTime from "./DateTime";

function Nav() {
  return (
    <nav aria-label="System menu">
      <div className="left">
        <div className="apple-icon">
          <img src="/navbar-icons/apple.svg" alt="" aria-hidden="true" />
        </div>
        <div className="nav-item"><p>Aaquib</p></div>
        <div className="nav-item"><p>File</p></div>
        <div className="nav-item"><p>Window</p></div>
        <div className="nav-item"><p>Terminal</p></div>
      </div>
      <div className="right">
        <div className="nav-icon">
          <img src="/navbar-icons/wifi.svg" alt="" aria-hidden="true" />
        </div>
        <DateTime />
      </div>
    </nav>
  );
}

export default Nav;