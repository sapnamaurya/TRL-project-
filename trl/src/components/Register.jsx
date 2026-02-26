import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/auth.css";

export default function Register() {
  const navigate = useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");

  const handleRegister=(e)=>{
    e.preventDefault();

    if(!name || !email || !password){
      setError("All fields are required");
      return;
    }

    const existingUser = localStorage.getItem(email);

    if(existingUser){
      setError("User already registered. Please login.");
      return;
    }

    const userData = { name, email, password };

    localStorage.setItem(email, JSON.stringify(userData));

    alert("Registration successful! Please login.");
    navigate("/");
  }

  return (
    <div className="authContainer">
      <div className="authLeft">
        <div className="authLeftContent">
          <h1 style={{color:"beige", fontSize:"55px"}}>
            TRL & Time Estimation
          </h1>
          <p>
            Integrated solution platform for Technology Readiness Level 
            and Time Estimation systems.
          </p>
        </div>
      </div>

      <div className="authRight">
        <form className="authBox" onSubmit={handleRegister}>
          <h2>Register</h2>

          {error && <p style={{color:"red"}}>{error}</p>}

          <div className="inputGroup">
            <label>Full Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
          </div>

          <div className="inputGroup">
            <label>Email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div className="inputGroup">
            <label>Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} />
          </div>

          <button type="submit">Register</button>
<div style={{display:"flex"}}> <p>
            Already have an account? 
          </p><Link to="/">Login</Link></div>
         
        </form>
      </div>
    </div>
  );
}