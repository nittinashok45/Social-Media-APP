import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const CreateAlbum = () => {
  const location = useLocation()
  const {user_id='defaultValue'} = location.state.user_id
  console.log(user_id)
  const [album, setAlbum] =  useState({
    album_name:"",
    user_id:user_id,
    date_of_creation: new Date().toUTCString()

  });
  return (
    <div className='form'>
      <h1>Create New Album</h1>
      <input type='text' placeholder='Album Name' name='album_name'/>
      
    </div>
  )
}

export default CreateAlbum