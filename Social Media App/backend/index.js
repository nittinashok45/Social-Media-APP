import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password",
    database: "cse412"
})

// auth problem use this in query in mySQL
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'cheese';

app.get("/", (req, res)=>{
    res.json("Sup, from backend")
})

app.use(express.json())
app.use(cors())

app.get("/users", (req, res)=>{
    const q = "SELECT * FROM cse412.users;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/albums", (req, res)=>{
    const q = "SELECT * FROM cse412.albums;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/photos", (req, res)=>{
    const q = "SELECT * FROM cse412.photos;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/tags", (req, res)=>{
    const q = "SELECT * FROM cse412.tags;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/likes", (req, res)=>{
    const q = "SELECT * FROM cse412.likes;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/comments", (req, res)=>{
    const q = "SELECT * FROM cse412.comments;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/followers", (req, res)=>{
    const q = "SELECT * FROM cse412.followers;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/users", (req, res)=>{
    const q = "INSERT INTO users (`user_id`, `first_name`, `last_name`, `email`,`date_of_birth`, `hometown`, `gender`, `password`) VALUES (?)"
    const values = [
        req.body.user_id,
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.date_of_birth,
        req.body.hometown,
        req.body.gender,
        req.body.password
       
    ]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("New user added")
    })
})

app.post("/albums", (req, res)=>{
    const q = "INSERT INTO albums (`album_name`, `user_id`, `date_of_creation`) VALUES (?)"
    const values = [
        req.body.album_name,
        req.body.user_id,
        req.body.date_of_creation,
       
    ]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("New album added")
    })
})

app.post("/photos", (req, res)=>{
    const q = "INSERT INTO photos (`album_id`, `caption`, `data`) VALUES (?)"
    const values = [
        req.body.album_id,
        req.body.caption,
        req.body.data,
       
    ]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("New photo added")
    })
})

app.post("/comments", (req, res)=>{
    const q = "INSERT INTO comments (`first_name`, `last_name`, `date`, `owner`, `text`, `photo_id`) VALUES (?)"
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.date,
        req.body.owner,
        req.body.text,
        req.body.photo_id
    ]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("New comment added")
    })
})

app.post("/tags", (req, res)=>{
    const q = "INSERT INTO tags (`photo_id`, `text`) VALUES (?)"
    const values = [
        req.body.photo_id,
        req.body.text,              
    ]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("New tag added")
    })
})

app.post("/comments", (req, res)=>{
    const q = "INSERT INTO tags (`first_name`, `last_name`, `date`, `owner`, `text`, `photo_id`) VALUES (?)"
    const values = [
        req.body.first_name,
        req.body.last_name,   
        req.body.date,   
        req.body.owner,   
        req.body.text,   
        req.body.photo_id              
    ]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("New comment added")
    })
})

app.post("/followers", (req, res)=>{
    const q = "INSERT INTO followers (`user_id`, `follower_id`, `first_name`, `last_name`, `date`) VALUES (?)"
    const values = [
        req.body.user_id,
        req.body.follower_id,
        req.body.first_name,
        req.body.last_name,   
        req.body.date  
             
    ]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("New follower added")
    })
})

app.delete("/albums/:id", (req,res)=> {
    const albumID = req.params.id;
    const q = "DELETE FROM albums WHERE id = ?";

    db.query(q, [albumID], (err,data) => {
        if (err) return res.json(err);
        return res.json("Album has been deleted successfully.")
    })
})

app.delete("/photos/:id", (req,res)=> {
    const photoID = req.params.id;
    const q = "DELETE FROM photos WHERE id = ?";

    db.query(q, [photoID], (err,data) => {
        if (err) return res.json(err);
        return res.json("Photo has been deleted successfully.")
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend")
})