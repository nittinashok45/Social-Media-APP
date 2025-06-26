import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";




const AddFriend = () => {
  const location = useLocation()
  const [user_id, setUserID] = useState(location.state.userID)
  const [follower, setFollower] = useState({
        user_id:"",
        follower_id:user_id,
        first_name:"",
        last_name:"",
        date: new Date().toUTCString()       
    
      });

      const [err, setErr] = useState(null);
  

      const handleChange = (e) => {
        setFollower((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(follower)
      };


      const navigate = useNavigate();

      const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:8800/followers', follower);
          navigate("/profile", {state:{userID : user_id}});
        } catch (err) {
          setErr(err.response.data);
          
        }
      };
      console.log(err);
      






return (
    <div>
    <h1>Follow a Friend</h1>
    {/* <p>{friendData?.fact}</p> */}
<form> 
{/* <label for="user-id">User ID:</label>
<input type="text"  name="user_id"onChange={handleChange} required /><br></br> */}
<p>Add your friend's details:</p>
<label for="user_id">User ID:</label>
<input type="text"  name="user_id"onChange={handleChange} required /><br></br>
<label for="first_name">First Name:</label>
<input type="text"  name="first_name"onChange={handleChange} required /><br></br>
<label for="last_name">Last Name:</label>
<input type="text"  name="last_name"onChange={handleChange} required /><br></br>
<input className="button" type="submit" onClick={handleClick} value="Follow Friend"/><br></br>

</form>

</div>



)};
        
export default AddFriend