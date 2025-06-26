import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";




const AddFriend = () => {

    


            



    const [register, setRegister] = useState({
        user_id:"",
        follower_id:"",
        first_name:"",
        last_name:"",
        date: new Date().toUTCString()
        

        
    
      });

      const [err, setErr] = useState(null);
  

      const handleChange = (e) => {
        setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
      const navigate = useNavigate();


      const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:8800/AddFriend', register);
          navigate("/");
        } catch (err) {
          setErr(err.response.data);
          
        }
      };
      console.log(err);
      






return (
    <div>
    <h1>Add friend</h1>
    <p>{friendData?.fact}</p>
<form> 
<label for="user-id">User ID:</label>
<input type="text"  name="user_id"onChange={handleChange} required /><br></br>
<label for="follower_id">FOLLOWER ID :</label>
<input type="text"  name="follower_id"onChange={handleChange} required /><br></br>
<label for="first_name">Firstname :</label>
<input type="text"  name="first_name"onChange={handleChange} required /><br></br>
<label for="last_name">Lastname:</label>
<input type="text"  name="last_name"onChange={handleChange} required /><br></br>
<input className="button" type="submit" onClick={handleClick} value="Add Friend"/><br></br>

</form>

</div>



)};
        
export default AddFriend