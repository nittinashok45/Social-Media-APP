import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'

const Followers = () => {
  const location = useLocation()
  const [user_id, setUserID] = useState(location.state.userID)
  const [followers, setFollowers] = useState([])

  useEffect(()=>{
    const fetchAllFollowers = async () =>{
      try {
        const res = await axios.get("http://localhost:8800/followers")
        console.log(res)
        setFollowers(res.data)
      } catch (error) {
        console.log(error)       
      }
    }
    fetchAllFollowers()
  })

  return (
    <div>
      <h1> Your Followers </h1>
      <div className='followers'>    
            {followers.map(follower =>(
              <div className='follower' key={follower.id}>
                
                  <span> {follower.user_id==user_id && follower.follower_id} </span>
                
              </div>
              
            ))}
        </div>

    </div>
  )
}

export default Followers