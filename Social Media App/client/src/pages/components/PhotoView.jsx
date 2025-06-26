import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const PhotoView = () => {
const location = useLocation()
  // console.log("location:", location)
  // console.log("location.state:", location.state.albumID)
  const [photo_id, setPhotoID] = useState(location.state.photoID)
  //console.log("photo_id:",photo_id)
  const [photo, setPhoto] = useState([])
  const [users, setUsers] = useState([])
  const [albums, setAlbums] = useState([])
  const [user_id, setUserId] = useState('')
  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState({
	first_name:'',
	last_name:'',
	date: new Date().toUTCString(),
	owner:'',
	text:'',
	photo_id: photo_id
  });

  useEffect(()=>{
    const fetchAllPhotos = async () =>{
      try {
		//get photo using photo_id
        const res = await axios.get("http://localhost:8800/photos")
        //console.log("photos res data",res.data)
		for (let  i = 0; i<res.data.length; i++){
			// console.log("in for")
			if(photo_id==res.data[i].photo_id){
				// console.log("res.data",res.data)
				setPhoto(res.data[i])
				//console.log(photo)
				break
			}
		}

		//get user by first accesing albums table
		const res1 = await axios.get("http://localhost:8800/albums")
		//console.log("albums",res1.data)
		setAlbums(res1.data)

		for (let  i = 0; i<albums.length; i++) {
			if(photo.album_id == albums[i].album_id){
				//console.log("albums[i].user_id:",albums[i].user_id)
				setUserId(albums[i].user_id)
				//console.log("user_id:",user_id)
				break
			}

		}

		//get likes 
		const res2 = await axios.get("http://localhost:8800/likes")
		//setLikes(res2.data)
		var sumLikes=0
		for (let  i = 0; i<res2.data.length; i++) {
			if(photo.photo_id == res2.data[i].photo_id){
				sumLikes+=1
			}
			
		}
		setLikes(sumLikes)
		//console.log("likes:",likes)

		const res3 = await axios.get('http://localhost:8800/comments');
		var photoComments = []
		for(let i = 0; i < res3.data.length; i++) {
			if(photo.photo_id == res3.data[i].photo_id){
				photoComments.push([res3.data[i].owner, res3.data[i].text])
			}
		}
		setComments(photoComments)
		console.log(photoComments)

		const res4 = await axios.get('http://localhost:8800/users');
        setUsers(res4.data);
		
      } catch (error) {
        console.log(error)       
      }
    }
    fetchAllPhotos()
  })

  const leaveComment = async (e) => {
	try {

		for(let i = 0; i < users.length; i++) {
			if(comment.owner == users[i].user_id) {
				comment.first_name = users[i].first_name
				comment.last_name = users[i].last_name
			}
		}

		await axios.post("http://localhost:8800/comments", comment)
		
	  } catch (error) {
		console.log(error)
	  }
  }

  const commentOwner = (e) => {
	setComment(prev=>({...prev, owner: e.target.value}))
  }

  const commentText = (e) => {
	setComment(prev=>({...prev, text: e.target.value}))
  }

  console.log(comment)

  return (
    <div>
		<h1>Photo</h1>
		<div>
			<span><img src={photo.data} width='500' height='500' /></span>
			<p>Posted by: {user_id}</p>
			<p>{likes} likes</p>
		</div>
				
		
		<h2>Leave a Comment</h2>
		<form>
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" onChange={commentOwner}/><br/><br/>
			
			<label for="comment">Comment:</label><br/>
			<textarea id="comment" name="comment" rows="4" cols="50" onChange={commentText}></textarea><br/><br/>
			
			<input type="submit" value="Submit" onClick={leaveComment}/>
		</form>
		
		<h2>Comments</h2>
		<div class="comment">
			{comments.map((comment) => (
				<p>{comment[0]}: {comment[1]}</p>
			))}
		</div>
    </div>
  )
}

export default PhotoView