import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const Feed = () => {
  const [photos, setPhotos] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation()
  const [user_id, setUserId] = useState(location.state.userID)

  useEffect(() => {
    const fetchAllPhotos = async () => {
      try {
        const res1 = await axios.get('http://localhost:8800/photos');
        setPhotos(res1.data);

        const res2 = await axios.get('http://localhost:8800/tags');
        const popularTags = count_duplicate(res2.data.map((tag) => tag.text));
        setTags(popularTags);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPhotos();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const fetchSearchResults = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/search?q=${searchTerm}`);
          setSearchResults(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Welcome {user_id}!</h1>
      <h2>
        <Link to={`/`}>
          <button> Logout </button>
        </Link>{' '}
      </h2>
      <h2>
        <Link to={`/leaderboard`}>
          <button> Leaderboard </button>
        </Link>{' '}
      </h2>
      <h2>
        <Link to={`/profile`} state={{userID:user_id}}>
          <button> Profile </button>
        </Link>{' '}
      </h2>
      <div className="search">
        <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search" />
        <ul>
          {searchResults.map((result) => (
            <li key={result.photo_id}>
              <Link to={`/photo-view`} state={{ photoID: result.photo_id }}>
                <img src={result.data} width="500" height="500" alt="" />
              </Link>
              <p>{result.caption}</p>
            </li>
          ))}
        </ul>
        <br></br>
      </div>
      <div className="photos">
        <h2>Explore Photos</h2>
        {[...photos].reverse().map((photo) => (
          <div className="photo" key={photo.photo_id}>
            <Link to={`/photo-view`} state={{ photoID: photo.photo_id }}>
              <img src={photo.data} width="500" height="500" alt="" />
            </Link>
            <p>{photo.caption}</p>
          </div>
        ))}
      </div>
      <div className="tags">
        <h1>Popular tags</h1>
        {tags.map((tag) => (
          <div className="tag" key={tag[0]}>
            <p>
              {tag[0]}, {tag[1]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

function count_duplicate(a){
    let counts = {}
    const result = []
   
    for(let i =0; i < a.length; i++){ 
        if (counts[a[i]]){
        counts[a[i]] += 1
        } else {
        counts[a[i]] = 1
        }
       }  
       for (let prop in counts){
           if (counts[prop] >= 1){
            result.push([prop, counts[prop]])
           }
       }
       return result
   }

export default Feed