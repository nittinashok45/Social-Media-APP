import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
 
const Register = () => {
  console.log("in register")
  const [user, setUser] = useState({
    user_id:" ",
    first_name:"",
    last_name:"",
    email:"",
    date_of_birth:"",
    hometown:"",
    gender:"",
    password:"",

  });
  const [err, setErr] = useState(null);
  


  const handleChange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(user)
  };
  console.log(user)
  /*
  const [password, setPassword] = useState("");
  const [first_name, setfirstname] = useState("");
  const [last_name, setlastname] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [hometown, sethometowen] = useState("");
  const [email, setemail] = useState("");
  const [confirmpassword,setconfirmpassword]=useState('');
  const [registerStatus, setRegisterStatus] = useState("");
  const [error,setError] = useState(false);
*/


  const navigate = useNavigate();


  

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/users', user);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
      
    }
  };
  console.log(err);
  
      


  
    
    
  return (
    <div>
    <h1>Sign Up</h1>
    <form>
      <label for="user-id">User ID:</label>
      <input type="text"  name="user_id" onChange={handleChange} required /><br></br>
      <label for="first-name">First Name:</label>
      <input type="text"  name="first_name" onChange={handleChange} required />
      <label for="last-name">Last Name:</label>
      <input type="text"   name="last_name" onChange={handleChange} required /><br></br>
      <label for="email">Email:</label>
      <input type="email"   name="email"  onChange={handleChange} required /><br></br>
      <label for="password">Password:</label>
      <input type="password"   name="password" onChange={handleChange} required /><br></br>
      <label for="confirm-password">Confirm Password:</label>
      <input type="password"   name="confirmpassword"   required/><br></br>
      <label for="dob">Date of Birth:</label>
      <input type="date"  name="date_of_birth"  onChange={handleChange}required  /><br></br>
      <label for="gender">Gender:</label>
      <input type="gender"   name="gender"  onChange={handleChange} required  /><br></br>
      <label for="hometown">Hometown:</label>
      <input type="hometown"  name="hometown"  onChange={handleChange} required  /><br></br>
      <input className="button" type="submit" onClick={handleClick} value="Sign Up"/><br></br>
      
    </form>
  
    <p>Already have an account? </p>
    <button><Link to="/">Login</Link></button>
    
    </div>
  )
}

export default Register