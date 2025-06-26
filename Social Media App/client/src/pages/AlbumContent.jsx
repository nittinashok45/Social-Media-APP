import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'

const AlbumContent = () => {
  const location = useLocation()
  // console.log("location:", location)
  // console.log("location.state:", location.state.albumID)
  const [user_id, setUserID] = useState(location.state.userID)
  const [album_id, setAlbumID] = useState(location.state.albumID)
  const [album_name, setAlbumName] = useState(location.state.albumName)
  //console.log("album_id:",album_id)
  const [photos, setPhotos] = useState([])
  useEffect(()=>{
    const fetchAllPhotos = async () =>{
      try {
        const res = await axios.get("http://localhost:8800/photos")
        console.log(res)
        setPhotos(res.data)
      } catch (error) {
        console.log(error)       
      }
    }
    fetchAllPhotos()
  })

  return (
    <div>
      <h2>{album_name}</h2>
      <Link to={`/profile`} state={{userID:user_id}}>
          <button> Profile </button>
        </Link>
      <div className='photos'>          
            {/* <h2>Albums</h2>  */}
            {photos.map(photo =>(
              <div className='photo' key={photo.photo_id}>
                <Link to={"/photo-view"} state={{ photoID:photo.photo_id}}>
                  <span> {photo.album_id==album_id && <img src={photo.data} width='500' height='500' />} </span>
                </Link>
              </div>
              
            ))}
        </div>
        <button>
          <Link to={"/upload"} state={{ userID:user_id, albumID:album_id}}>Upload New Picture to Album</Link>
        </button>
    </div>
    

  )
}

export default AlbumContent 