const express = require("express");
const axios = require("axios");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors({ origin: true}));

app.post("/authenticate", async(req, res)=>{
    const { username } = req.body;

    try {
        const r = await axios.put(
          "https://api.chatengine.io/users",
          { username: username, secret: username, first_name: username },
          { headers: { "PRIVATE-KEY": "550b1f0a-4f04-4df9-81db-95e6ee406b2a" } }
        );
        console.log(req.headers);
        return res.status(r.status).json(r.data)
    }catch(e){
        return res.status(e.response.status).json(e.response.data);
    }

    console.log(username);
    return res.json({ username: username, secret:"sha256..."});
})

app.listen(3001);
