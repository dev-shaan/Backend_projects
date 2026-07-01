import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

async function getRandomSecret() {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");

    return {
        secret: result.data.secret,
        user: result.data.username,
    };
}

app.get("/api/secret", async(req,res) =>{
    try {
        const secret = await getRandomSecret();
        res.json(secret);
    } catch (error) {
        console.log(error.response?.data || error.message);
        res.status(500).json({ error: "Unable to load secret" });
    }
});

app.get("/", async(req,res) =>{
    try {
        const secret = await getRandomSecret();
        res.render("index.ejs",{
            secret: secret.secret,
            user: secret.user,
        });
    } catch (error) { 
        console.log(error.response?.data || error.message);
        res.status(500).send("Unable to load page");
    }
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 