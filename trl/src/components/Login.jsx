import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
      setError("User not registered. Please register first.");
      return;
    }

    const userData = JSON.parse(storedUser);

    if (userData.password !== password) {
      setError("Incorrect password");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    navigate("/project-setup"); // ya jaha redirect karna hai login ke baad
  };

  return (
    <div className="authContainer">
      <div className="authLeft">
        <div className="authLeftContent">
          <h1 style={{ color: "beige", fontSize: "55px" }}>
            TRL &  Project Duration Estimation
          </h1>
          <p>
            Integrated solution platform for Technology Readiness Level and  Project Duration
            Estimation systems.  
          </p>
        </div>
      </div>

      <div className="authRight">
        <form className="authBox" onSubmit={handleLogin}>
          <h2>Login</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="inputGroup">
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="inputGroup">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          
            <Link to="/forgot-password">Forgot Password?</Link>
  

          <button type="submit">Login</button>
<div style={{display:"flex"}}>
        <p>
  Don't have an account?{" "}
 
</p> 
<Link to="/register">Register</Link>
</div>
        </form>
      </div>
    </div>
  );
}
