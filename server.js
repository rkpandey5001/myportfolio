let express=require('express');
let cors=require('cors');
let app=express();
require('dotenv').config();
const {connection}=require('./config/dbConfig');
const portfolioRoute=require('./routers/portfolioRoute');

app.use(express.json());
app.use(cors());
app.use('/api/portfolio',portfolioRoute);
const port=process.env.PORT || 8000;

const path=require('path');
if(process.env.NODE_ENV==="production")
{
  app.use(express.static(path.join(__dirname,"client/build")));
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client/build/index.html"));
  })
}
app.listen(port,(err)=>{
  if(!err)
  {
    connection();
  }
  else
  {
    console.log(err);
  }
})