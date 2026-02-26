

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/Logo.png";   // adjust extension if needed

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    if (!storedUser) {
      navigate("/");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  return (
    <header className="header">
      <div className="logoSection">
        <img src={Logo} alt="Logo" className="headerLogo" />
        <div className="logoText">
          TRL Assessment & Project Estimation for DRDO Projects
        </div>
      </div>

      <nav>
        <Link to="/project-setup">Home</Link>
        <Link to="/workflow">Workflow</Link>
        <Link to="/module">Modules</Link>
        <Link to="#">About</Link>

        {user && (
          <span className="welcome">Welcome, {user.name}</span>
        )}

        <button
          className="logoutBtn"
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            navigate("/");
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
