
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  

  const [register, setRegister] = useState({
    user_id:"",
    password:"",
  });
  const handleChange = (e) => {
    setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
console.log("register:", register)

  const navigate = useNavigate();


  

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      //axios.post('http://localhost:8800/Login', register);
      //navigate("/Register");
      console.log("test1");
      const res = await axios.get("http://localhost:8800/users");
      
      for(let  i = 0; i<res.data.length; i++){
        if(res.data[i].user_id==register.user_id){
          if(res.data[i].password==register.password){
            console.log("test2");
            navigate('/feed', {state:{userID : register.user_id}})
            //<Link to={`/feed`} state={{userID : register.user_id}}/>
          }
          else{
            return(
              <div>incorrect password</div>
            )
          }
        }
      }
      return(
        <div>User not found, create new account</div>
      )
      
  }  catch (err) {
      console.log(err);
    
  }
};


    return (
        <div>
            <h1>Login</h1>
            <form>
                <label for="username">Username:</label>
                <input type="text"  name="user_id" onChange={handleChange}required />
                <label for="password">Password:</label>
                <input type="password"  name="password"onChange={handleChange}required/>
                <input className="button" type="submit" onClick={handleClick} value="Sign In"/>
                <p>Don't have an account yet? </p>
                
                <button><Link to="/signup">Sign up</Link></button>

            </form>
        </div>
      )
    }
    
    export default Login
    