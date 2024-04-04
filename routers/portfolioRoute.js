const router=require('express').Router();
const multer  = require('multer');
const path  = require('path');
const storage = multer.diskStorage({ 
    destination:(req,file,cb)=>{
      cb(null,'public/Images');
    },
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
});

let upload=multer({
  storage:storage
});

const {Intro,Image,About,Education,Experience,Project,Course,Social,Contact}=require("../models/portfolioModel");

const {Admin}=require("../models/userModel");


router.get('/postData',(req,res)=>{
  let datasend=async()=>{
    try
    {
    let User=new Intro({
      welcomeText:"Mern Project",
      firstName:"Rahul Kumar",
      lastName:"Pandey",
      caption:"Caption here",
      description:"Description here"
    });
    let res=await Intro.insertMany([User]);
    console.log(res);
    }
    catch(err)
    {
      console.log(err);
    }
  }
  datasend();
})

//get all portfolio data

router.get('/get-portfolio-data',async(req,res)=>{
  try{
    const intros=await Intro.find({});
    const image=await Image.find({});
    const about=await About.find({});
    const education=await Education.find({});
    const project=await Project.find({});
    const contact=await Contact.find({});
    const experience=await Experience.find({});
    const course=await Course.find({});
    const social=await Social.find({});
    res.status(200).send({
      intro:intros[0],
      image:image[0],
      about:about[0],
      education:education,
      project:project,
      contact:contact[0],
      experience:experience,
      course:course,
      social:social[0]
    })
  }
  catch(error)
  {
    console.log(error);
  }
});

//get update intro

router.post("/update-intro",async(req,res)=>{
  try{
    const intro=await Intro.findOneAndUpdate(
      {_id:req.body._id,},
      req.body,
      {new:true}
    );
    res.status(200).send(
      {
        data:intro,
        success:true,
        message:"Intro update successfully"
      }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
});

router.post("/update-about",async(req,res)=>{
  console.log(req.body);
  try{
    const about=await About.findOneAndUpdate(
      {_id:req.body._id,},
      req.body,
      {new:true}
    );
    res.status(200).send(
      {
        data:about,
        success:true,
        message:"About update successfully"
      }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
});

router.post("/add-experience",async(req,res)=>{
  try{
    const experience=new Experience(req.body);
    await experience.save();
    res.status(200).send(
    {
        data:experience,
        success:true,
        message:"Experience added successfully"
    }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
});

router.post('/update-experience',async(req,res)=>{
  try{
    const experience=await Experience.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    console.log(experience+" "+req.body);
    res.status(200).send(
    {
        data:experience,
        success:true,
        message:"Experience updated successfully"
      }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
  });

router.post('/delete-experience',async(req,res)=>{
try{
  const experience=await Experience.findOneAndDelete(
    {_id:req.body._id},
  );
  console.log(experience+" "+req.body);
  res.status(200).send(
  {
      data:experience,
      success:true,
      message:"Experience deleted successfully"
    }
  );
}
catch(error)
{
  res.status(500).send(error); 
}
});

module.exports=router;


//education

router.post("/add-educations",async(req,res)=>{
  console.log(req.body);
  try{
    const education=new Education(req.body);
    await education.save();
    res.status(200).send(
    {
        data:education,
        success:true,
        message:"Education added successfully"
    }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
});

router.post('/update-education',async(req,res)=>{
  try{
    const education=await Education.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    console.log(education+" "+req.body);
    res.status(200).send(
    {
        data:education,
        success:true,
        message:"Education updated successfully"
      }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
  });

router.post('/delete-education',async(req,res)=>{
try{
  const education=await Education.findOneAndDelete(
    {_id:req.body._id},
  );
  res.status(200).send(
  {
      data:education,
      success:true,
      message:"Education deleted successfully"
    }
  );
}
catch(error)
{
  res.status(500).send(error); 
}
});

module.exports=router;



//projects

router.post("/add-project",async(req,res)=>{
  try{
    const project=new Project(req.body);
    await project.save();
    res.status(200).send(
    {
        data:project,
        success:true,
        message:"Project added successfully"
    }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
});

router.post('/update-project',async(req,res)=>{
  try{
    const project=await Project.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    console.log(project+" "+req.body);
    res.status(200).send(
    {
        data:project,
        success:true,
        message:"Project updated successfully"
      }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
  });

router.post('/delete-project',async(req,res)=>{
try{
  const project=await Project.findOneAndDelete(
    {_id:req.body._id},
  );
  console.log(project+" "+req.body);
  res.status(200).send(
  {
      data:project,
      success:true,
      message:"Project deleted successfully"
    }
  );
}
catch(error)
{
  res.status(500).send(error); 
}
});

module.exports=router;


//courses

router.post("/add-course",async(req,res)=>{
  try{
    const course=new Course(req.body);
    await course.save();
    res.status(200).send(
    {
        data:course,
        success:true,
        message:"Course added successfully"
    }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
});

router.post('/update-course',async(req,res)=>{
  try{
    const course=await Course.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    console.log(course+" "+req.body);
    res.status(200).send(
    {
        data:course,
        success:true,
        message:"Course updated successfully"
      }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
  });

router.post('/delete-course',async(req,res)=>{
try{
  const course=await Course.findOneAndDelete(
    {_id:req.body._id},
  );
  console.log(course+" "+req.body);
  res.status(200).send(
  {
      data:course,
      success:true,
      message:"Course deleted successfully"
    }
  );
}
catch(error)
{
  res.status(500).send(error); 
}
});

module.exports=router;

//social

router.post("/update-social",async(req,res)=>{
  try{
    const intro=await Social.findOneAndUpdate(
      {_id:req.body._id,},
      req.body,
      {new:true}
    );
    res.status(200).send(
      {
        data:intro,
        success:true,
        message:"Social update successfully"
      }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
});


//contact

router.post("/update-contact",async(req,res)=>{
  try{
    const contact=await Contact.findOneAndUpdate(
      {_id:req.body._id,},
      req.body,
      {new:true}
    );
    res.status(200).send(
      {
        data:contact,
        success:true,
        message:"Contact update successfully"
      }
    );
  }
  catch(error)
  {
    res.status(500).send(error); 
  }
});

router.post("/upload-image",upload.single('mypic'),async(req,res)=>{
try
{
  const newImage=await Image.findOneAndUpdate(
    {_id:req.body._id},
    {profile:req.body},
    {new:true}
  );
  res.status(200).send(
    {
      data:newImage,
      success:true,
      message:"Image update successfully"
    }
  );
}
catch(error)
{
  res.status(500).send(error); 
}
console.log(req.body);
});


//admin-login

router.post('/admin-login',async(req,res)=>{
  try{
   const user=await Admin.findOne({uname:req.body.uname,password:req.body.password}) ;
   console.log(user);
   user.password="";
   if(user)
   {
    res.status(200).send({
      data:user,
      success:true,
      message:"Login successfully"
    })
    }
    else
    {
      res.status(200).send({
        data:user,
        success:false,
        message:"Invalid, Please enter username and password"
      } 
      )
   }
  }
  catch(error)
  {
    res.status(500).send(error);
  }
})






