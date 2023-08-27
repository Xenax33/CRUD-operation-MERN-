const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
const User = require("../server/models/User");


const app = express();
app.use(cors());
app.use(express.json())
const Port = process.env.Port || 8080;


//read API
app.get("/", async (req, res) => {
  const data = await User.find({});
  res.json({ success: true, data: data });
});

//Create Data API
app.post("/create" ,async (req,res) =>
{
    console.log(req.body)
    const data = User(req.body)
    await data.save().catch(
        (err)=>{
            console.log(err)

        }
    )
    res.send({message:"Connected"})
});

//Update API
app.put("/update" , async(req,res)=>
{
    const {_id,...rest} = req.body;
    await User.updateOne({_id: _id}, rest)
    res.send({message:"Updated"})
})


// Get User from its id
app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findById(userId);
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving user');
    }
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

//DeleteApi
app.delete("/delete/:id",async(req,res)=>
{
    const data = await User.deleteOne({_id: req.params.id});
    res.send(data)
});

app.get("/logIn/:email/:password" , async(req,res)=>
{
    const email = req.params.email;
    const password = req.params.password;
    try {
        const data = await User.findOne({email , password});
        if(data)
        {
            res.send({success: true , data})
        }
        else{
            res.send({success:false})
        }
      } catch (error) {
        console.error(error);
        throw new Error('Error finding user');
      }
});

// app.use("/api/User", require("../server/routes/user"));

connectToMongo();
app.listen(Port, () => console.log("Server is running"));
