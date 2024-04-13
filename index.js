const express = require("express");
const jwt = require("jsonwebtoken")
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();
const app = express();
const googleModel = require("./model/form.js")
const bodyParser = require("express-json")
app.use(bodyParser()); 
const PORT ="https://server-google-auth.vercel.app";
const connectDB = require("./config/db.js")
const cors = require("cors");
app.use(express.json());
app.use(cors());
connectDB()
app.post("/google-auth", async (req, res) => {
    console.log(req.body)
    const {name,email}=req.body
    
    try {
        const user =await googleModel.findOne({email:email})
        if (!user) {
            console.log('fuck')
                    const newuser = new googleModel({
                        email: email,
                        name: name,
                        authSource: "google",
                        }) 
                      await newuser.save().then((data)=>{
                        console.log(data)
                    }).catch((err)=>
                    res.status(400).json(err))    
                }
        const tokenData = {
            email:email,
            name:name,
            picture:req.body.picture
        }
        const token = await jwt.sign(tokenData, "nextjsyoutubeytttyt", {expiresIn: "20d"})
        console.log(token)
        return res.status(200).json({token:token});
    } catch (error) {
        
    }
//     console.log(req.body)
//     const { credential, client_id } = req.body;
//     try {
//     const ticket = await client.verifyIdToken({
//     idToken: credential,
//     audience: client_id,
//     });
//     const payload =await ticket.getPayload();
//     const userid = payload["sub"];
//     console.log(payload)
//     console.log(payload.email)
    // const user =await googleModel.findOne({email:payload.email})
//     console.log("email",user)
//     if (!user) {
//         const newuser = new googleModel({
//             email: payload.email,
//             name: payload.name,
//             authSource: "google",
//             }) 
//           await newuser.save().then((data)=>{
//             console.log(data)
//         }).catch((err)=>
//         res.status(400).json(err))    
//     }
//     const tokenData = {
// email:payload.email,
//     name:payload.name,
//     picture:payload.picture
//     }
    // const token = await jwt.sign(tokenData, "nextjsyoutubeytttyt", {expiresIn: "20d"})
//     console.log(token)
    //  res.status(200).json({ message:"Okay Okay"});
    // res.cookie("newuser", token, { httpOnly: true, secure: true })
//    return res.status(200).json({ payload ,token:token});
// } 
// catch (err) {
//     res.status(400).json({ err });
// }
    });
app.get('/get',(req,res)=>{
res.cookie("name","adeel").json({message:"All is Ok"})
})
    app.listen(PORT, ('/',(req,res) =>
      return res.json({message:"Everything is Good"})
        console.log(`Server running on PORT ${PORT}`));
