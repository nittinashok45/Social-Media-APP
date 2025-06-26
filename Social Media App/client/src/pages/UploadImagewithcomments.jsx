import React, { useState, useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UploadImage = () => {
  const location = useLocation()
  const [album_id, setAlbumID] = useState(location.state.albumID)
  const [lastPhotoId, setLastPhotoId] = useState()
  const [photo, setPhoto] = useState({
    album_id: album_id,
    caption: "",
    data: ""
  });
  const [tag, setTag] = useState({
    photo_id: null,
    text: ""
  });
  const [comment, setComment] = useState({
    photo_id: null,
    user_id: null,
    text: ""
  });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchAllPhotos = async () => {
      try {
        const res = await axios.get("http://localhost:8800/photos")
        setLastPhotoId(res.data.length)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllPhotos()
  }, [])

  const navigate = useNavigate()

  const handlePhotoChange = (e) => {
    setPhoto((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTagChange = (e) => {
    const currPhotoId = lastPhotoId + 1
    setTag({ ...tag, photo_id: currPhotoId })
    setTag((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCommentChange = (e) => {
    setComment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhotoClick = async (e) => {
    try {
      const res = await axios.post("http://localhost:8800/photos", photo)
      const currPhotoId = res.data.id
      setComment((prev) => ({ ...prev, photo_id: currPhotoId }))
      navigate("/profile")
    } catch (error) {
      console.log(error)
    }
  }

  const handleTagClick = async (e) => {
    try {
      await axios.post("http://localhost:8800/tags", tag)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCommentClick = async (e) => {
    try {
      const res = await axios.post("http://localhost:8800/comments", comment)
      const newComment = {
        id: res.data.id,
        photo_id: comment.photo_id,
        user_id: comment.user_id,
        text: comment.text
      }
      setComments([...comments, newComment])
      setComment({
        photo_id: comment.photo_id,
        user_id: comment.user_id,
        text: ""
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <h1>Upload Photos</h1>

       {/* <form method="POST" action="/upload" enctype="multipart/form-data"> */}
            <label for="file-upload">Choose a file to upload:</label>
            <input type="file" id="file-upload" onChange={handlePhotoChange} name="data"/><br/><br/>

            <label for="caption">Caption:</label>
            <input type="text" id="caption" onChange={handlePhotoChange} name="caption" placeholder="Enter your caption here..."/><br/><br/>

            <label for="tags">Tag other accounts:</label>
            <input type="text" id="tags" onChange={handleTagChange} name="text" placeholder="Enter account usernames separated by commas..."/><br/><br/>

            <button onClick={() => {handlePhotoClick();handleTagClick();}}>Upload Photo</button>
            {/* {navigate("/profile")} */}
        {/* </form> */}
    </div>
  )
}

export default UploadImage