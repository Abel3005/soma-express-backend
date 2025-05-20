const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(express.json());

const db1 = mongoose.createConnection(process.env.MONGO_ELECTION_URI);
const db2 = mongoose.createConnection(process.env.MONGO_CHAT_URI);

const CandidateSchema = new mongoose.Schema({ },{strict:false},"candidates");
const MessageSchema = new mongoose.Schema({},{strict:false}, "messages");
const Candidate = db1.model("Candidate", CandidateSchema);
const Message = db2.model("Message", MessageSchema);


app.get('/candidates', async (req, res) => {
  const data = await Candidate.find();
  res.json(data);
});

app.post('/messages', async (req, res) => {
  const {chatroom } = req.body;
  if (!chatroom){
    return res.status(400).json({error: "chatroom field is required"});
  }
  try{
    const data = await Message.find({chatroom});
    res.json(data);
  }
  catch(err){
    console.error("MongoDB Query Error:",err);
    res.status(500).json({error: "Internal Server error"});
    console.log(chatroom)
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on http://35.238.135.152:${process.env.PORT}`)
);

