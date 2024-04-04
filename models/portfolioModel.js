const mongoose=require('mongoose');

const introSchema=new mongoose.Schema({
  welcomeText:{
    type:String,
    required:true
  },
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  }
  ,caption:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }
});

const dpSchema=new mongoose.Schema({
  profile:{
    type:String,
    required:true
  }
});


const aboutSchema=new mongoose.Schema({
  lottieURL:{
    type:String,
    required:true
  },
  description1:{
    type:String,
    required:true
  },
  description2:{
    type:String,
    required:true
  },
  skills:{
    type:Array,
    required:true
  }
});


const educationSchema=new mongoose.Schema({
  course:{
    type:String,
    required:true
  },
  year:{
    type:String,
    required:true
  },
  institute:{
    type:String,
    required:true
  },
  subject:{
    type:Array,
    required:true
  }
});

const experienceSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  period:{
    type:String,
    required:true
  },
  company:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }
});

const projectsSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  link:{
    type:String,
    required:true
  },
  technologies:{
    type:Array,
    required:true
  }
})

const courseSchema=new mongoose.Schema({
  course:{
    type:String,
    required:true
  },
  duration:{
    type:String,
    required:true
  },
  institute:{
    type:String,
    required:true
  },
  skills:{
    type:Array,
    required:true
  },
  images:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  link:{
    type:String,
    required:true
  }
});


const socialSchema=new mongoose.Schema({
  facebook:{
    type:String,
    required:true
  },
  linkedin:{
    type:String,
    required:true
  },
  instagram:{
    type:String,
    required:true
  },
  git:{
    type:String,
    required:true
  }
});

const contactSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  mobile:{
    type:String,
    required:true
  },
  age:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  }
});


module.exports={
  Intro:mongoose.model("Intro",introSchema),
  Image:mongoose.model("Image",dpSchema),
  About:mongoose.model("About",aboutSchema),
  Education:mongoose.model("Education",educationSchema),
  Experience:mongoose.model("Experience",experienceSchema),
  Project:mongoose.model("Project",projectsSchema),
  Course:mongoose.model("Course",courseSchema),
  Social:mongoose.model("Social",socialSchema),
  Contact:mongoose.model("Contact",contactSchema),
}