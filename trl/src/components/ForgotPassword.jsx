import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/auth.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [newPassword,setNewPassword]=useState("");
  const [error,setError]=useState("");
  const [success,setSuccess]=useState("");

  const handleReset=(e)=>{
    e.preventDefault();

    if(!email || !newPassword){
      setError("All fields are required");
      return;
    }

    const storedUser = localStorage.getItem(email);

    if(!storedUser){
      setError("User not registered");
      return;
    }

    const userData = JSON.parse(storedUser);
    userData.password = newPassword;

    localStorage.setItem(email, JSON.stringify(userData));

    setSuccess("Password updated successfully!");
    setError("");

    setTimeout(()=>{
      navigate("/");
    },1500);
  }

  return (
    <div className="authContainer">
      <form className="authBox" onSubmit={handleReset}>
        <h2>Reset Password</h2>

        {error && <p style={{color:"red"}}>{error}</p>}
        {success && <p style={{color:"lightgreen"}}>{success}</p>}

        <div className="inputGroup">
          <input type="email" required placeholder=" " onChange={(e)=>setEmail(e.target.value)} />
          <label>Email</label>
        </div>

        <div className="inputGroup">
          <input type="password" required placeholder=" " onChange={(e)=>setNewPassword(e.target.value)} />
          <label>New Password</label>
        </div>

        <button type="submit">Reset Password</button>

        <p>
          Back to <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}