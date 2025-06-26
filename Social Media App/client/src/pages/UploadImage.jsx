import React, { useState, useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UploadImage = () => {
  const location = useLocation()
  // console.log("location:", location)
  // console.log("location.state:", location.state.albumID)
  const [user_id, setUserID] = useState(location.state.userID)
  const [album_id, setAlbumID] = useState(location.state.albumID)
  const [lastPhotoId, setLastPhotoId] = useState()
  const [photo, setPhoto] = useState({
    album_id:album_id,
    caption:"",
    data:""
  });
  const [tag, setTag] = useState({
    photo_id:null,
    text:""
  });

  useEffect(()=>{
    const fetchAllPhotos = async () =>{
      try {
        const res = await axios.get("http://localhost:8800/photos")
        console.log("photo data:", res)
        setLastPhotoId(res.data.length)
        console.log("lastPhotoId:", lastPhotoId)
      } catch (error) {
        console.log(error)       
      }
    }
    fetchAllPhotos()
  })

  const navigate = useNavigate()

  const handlePhotoChange = (e) => {
    //console.log("photo data link name: ",e.target.name, "value:", typeof(e.target.value))
    setPhoto((prev) => ({...prev, [e.target.name]: e.target.value}));
  };
  console.log(photo)

  const handleTagChange = (e) => {
    const currPhotoId = lastPhotoId+1
    setTag({...tag,photo_id: currPhotoId})
    setTag((prev) => ({...prev, [e.target.name]: e.target.value}));
  };
  console.log(tag)

  const handlePhotoClick = async (e) => {
    //e.preventDefault()
    try {
      console.log("in photoclick:", photo)
      await axios.post("http://localhost:8800/photos", photo)
      // navigate("/profile")  
    } catch (error) {
      console.log(error)      
    }
  }

  const handleTagClick = async (e) => {
    //e.preventDefault()
    console.log("in handTagClick: ",tag)
    try {
      await axios.post("http://localhost:8800/tags", tag)
      navigate("/profile", {state:{userID : user_id}})

    } catch (error) {
      console.log(error)      
    }
  }

  return (
    <div>
        <h1>Upload Photos</h1>

       {/* <form method="POST" action="/upload" enctype="multipart/form-data"> */}
            <label for="file-upload">Choose a file to upload:</label>
            <input type="text" id="file-upload" onChange={handlePhotoChange} name="data"/><br/><br/>

            <label for="caption">Caption:</label>
            <input type="text" id="caption" onChange={handlePhotoChange} name="caption" placeholder="Enter your caption here..."/><br/><br/>

            <label for="tags">Tags:</label>
            <input type="text" id="tags" onChange={handleTagChange} name="text" placeholder="Enter account usernames separated by commas..."/><br/><br/>

            <button onClick={() => {handlePhotoClick();handleTagClick();}}>Upload Photo</button>
            {/* {navigate("/profile")} */}
        {/* </form> */}
    </div>
  )
}

export default UploadImage