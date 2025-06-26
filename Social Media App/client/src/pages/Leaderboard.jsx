import React, { useState, useEffect } from 'react'
import axios from 'axios'
import{ Link } from "react-router-dom";

const Leaderboard = () => {
    const [photo,setPhotos] = useState([])
    const [comments, setComments] = useState([])
    const [album, setAlbums] = useState([])
    const [users, setUsers] = useState([])
    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try{
                const res1 = await axios.get("http://localhost:8800/photos/")
                setPhotos(res1.data);

                const res2 = await axios.get("http://localhost:8800/comments")
                setComments(res2.data);

                const res3 = await axios.get("http://localhost:8800/albums")
                setAlbums(res3.data);
                
                const res4 = await axios.get("http://localhost:8800/users")
                setUsers(res4.data);
                
                //create leaderboard array and populate it with user_ids and 
                var leaderboard = []

                for(let i = 0; i<res4.data.length; i++) {
                    leaderboard[i] = [res4.data[i].user_id, 0]
                }

                for(let i = 0; i<res1.data.length; i++) {
                    for(let j = 0; j<res3.data.length; j++){
                        if(res1.data[i].album_id == res3.data[j].album_id){
                            for(let k = 0; k<leaderboard.length; k++){
                                if(leaderboard[k][0] == res3.data[j].user_id){
                                    leaderboard[k][1]++
                                }
                            }
                        }        
                    }
                }

                for(let i = 0; i<res4.data.length; i++) {
                    for(let j = 0; j<res2.data.length; j++){
                        if(res4.data[i].user_id == res2.data[j].owner){
                            for(let k = 0; k<leaderboard.length; k++){
                                if(leaderboard[k][0] == res2.data[j].owner){
                                    leaderboard[k][1]++
                                }
                            }
                        }        
                    }
                }

                leaderboard.sort(compareSecondColumn)
                setLeaderboard(leaderboard)
            }
            catch(err){
                console.log(err)
            }
        }
        fetch()
    },[])

    return <div>
        <h1>Leaderboard</h1>
        <div className = "leaderboard" key={leaderboard[0]}>
                {leaderboard.map((board) => (
                    <p>{board[0]}, interaction score: {board[1]}</p>
                ))}
        </div>
    </div>
}

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

export default Leaderboard