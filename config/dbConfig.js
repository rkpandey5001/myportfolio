const mongoose=require('mongoose');
const db="mongodb+srv://mern-stack:Pandey123@cluster0.rivwssa.mongodb.net/mern-stack";

  async function connection(){
  try
  {
    await mongoose.connect(db);
    console.log("connect db")
  }
  catch(err)
  {
    console.log("db not connect")
  }
}

module.exports={connection};