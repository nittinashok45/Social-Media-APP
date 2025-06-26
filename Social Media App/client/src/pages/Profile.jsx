import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import axios from 'axios'
import{ Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const Profile = () => {
  const [albums, setAlbums] = useState([])
  const location = useLocation()
  const [user_id, setUserId] = useState(location.state.userID) //need to set correct userid based on who logs in
  const [showForm, setShowForm] = useState(false)
  const [user, setUser] = useState([])
  const [album, setAlbum] = useState({
    album_name:"",
    user_id: user_id,
    date_of_creation: new Date().toUTCString()
  });

  useEffect(()=>{
    const fetchAllAlbums = async () =>{
      try {
        const res = await axios.get("http://localhost:8800/albums")
        //console.log(res)
        setAlbums(res.data)

        const res1 = await axios.get("http://localhost:8800/users")
        for(let  i = 0; i<res1.data.length; i++){
          if(res1.data[i].user_id==user_id){
            setUser(res1.data[i])
            break
          }
        }
      } catch (error) {
        console.log(error)       
      }
    }
    fetchAllAlbums()

    
  })

  const handleNewAlbumClick = (e) => {
    setShowForm(true)
  }

  const handleClickSave = async (e) =>{
    //e.preventDefault()
    try {
      //console.log(album)
      await axios.post("http://localhost:8800/albums", album)
      setShowForm(false)
      
    } catch (error) {
      
    }

  }

  const renderForm = (e) => {
    const handleChange = (e) => {
      console.log(user_id)
      setAlbum(prev=>({...prev, [e.target.name]: e.target.value}))
      //setAlbum(user_id=user_id)
    };
    //console.log(album)
    //console.log(showForm)
    return(
    <div className='form'>
      <h3>Create New Album</h3>
      <input type='text' placeholder='Album Name' onChange={handleChange} name='album_name'/>
      <button onClick={handleClickSave}>Save</button>
    </div>
    )
  }

  const handleAlbumClick = async (id) =>{
    //e.preventDefault()
    try {
      <Link to={{
        pathname: "/album-content",
        state: id
      }} />
      
    } catch (error) {
      
    }

  }

  const handleDelete = async (id) =>{
    try {
      console.log("in delete, id:", id)
      const res = await axios.get("http://localhost:8800/photos")
      // console.log(res)
      const photos = res.data
      console.log(photos)

      for(let i = 0; i<photos.length; i++){
        console.log("photo id:", photos[i].album_id)
        if(photos[i].album_id==id){
          console.log("test1:photoID ", photos[i].photo_id)
          await axios.delete("http://localhost:8800/photos/"+photos[i].photo_id)

        }
      }
      await axios.delete("http://localhost:8800/albums/"+id)
      window.location.reload()
    } catch (error) {
      
    }
  }

  return (
    <div>
        {/* <Search/> */}
        <div>
            {/* <img src="profile_photo.jpg" alt="Profile Photo"/> */}
            <h1>{user.first_name} {user.last_name}</h1>
            <p className='user-id'>{user_id}</p>
            <p>Date of Birth: {user.date_of_birth}</p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Hometown: {user.hometown}</p>
            <button>
              <Link to={"/followers"} state={{ userID:user.user_id}}>
                My Followers
              </Link>
            </button>
            <button>
              <Link to={"/add-friend"} state={{ userID:user.user_id}}>
              Follow a Friend
              </Link>
              </button>
        </div>
        <hr />
        <div className='albums'>
          {/* instead of photos, make link for album (using album names) and then on clicking album, take to page to display all photos in that album. once photo is clicked show PhotoView */}
            <h2>Albums</h2> 
            {albums.map(album =>(
              <div className='album' key={album.album_id}>
                <h3> 
                  {/* {console.log("album_id:", album.album_id)} */}
                  <Link to={"/album-content"} state={{ albumID:album.album_id, albumName:album.album_name, userID:user_id}}>
                    {album.user_id==user_id && album.album_name}
                  </Link>
                </h3>
                {/* {album.user_id==user_id && album.album_name && <button className='delete'onClick={()=>handleDelete(album.album_id)} >Delete</button>}  */}
              </div>
              
            ))}
        </div>
        <div>
        <button onClick={handleNewAlbumClick}>
          + New Album
        </button>
        {showForm && renderForm()}
        </div>
    </div>
  )
}

export default Profile