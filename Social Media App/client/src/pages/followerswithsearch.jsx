import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const Followers = () => {
  const location = useLocation();
  const [user_id, setUserID] = useState(location.state.userID);
  const [followers, setFollowers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAllFollowers = async () => {
      try {
        const res = await axios.get('http://localhost:8800/followers');
        setFollowers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllFollowers();
  }, []);

  const filteredFollowers = followers.filter((follower) =>
    follower.user_id == user_id && follower.follower_id.includes(searchTerm)
  );

  return (
    <div>
      <h1>Your Followers</h1>
      <div>
        <input type="text" placeholder="Search followers" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="followers">
        {filteredFollowers.map((follower) => (
          <div className="follower" key={follower.id}>
            <span>{follower.follower_id}</span>
          </div>
        ))}
      </div>
      <div>
        <Link to={`/profile/${user_id}`}>
          <button>Back to profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Followers;