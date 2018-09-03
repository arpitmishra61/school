//exporting require modules

const express=require('express');
const exphbs=require('express-handlebars');
// const mongoose=require('mongoose');
// const bodyParser=require('body-parser');
// const methodOverride=require('method-override');
const path=require('path')

//DEFINING ELEMENTS
const app = express()
const port = 12

//CONNECTING DATABASE
//mongoose.connect('mongodb://localhost:27017/myappdb',{ useNewUrlParser: true })


//HANDLEBAR MIDDLEWEAR
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));

//Defining Routes:
app.get('/',(req,res)=>{  
  res.render('home/index')  
  //IN RENDER METHOD YOU HAVE TO PASS THE NAME OF INDEX WHICH IS IN VIEWS 
})

//acadmeics route
app.get('/acadmeics',(req,res)=>{  
  res.render('acadmics/acadmeics') 
})

//admission route-feeStructure
app.get('/admissions/feeStructure',(req,res)=>{  
  res.render('admission/feeStructure') 
})

//admission forms
app.get('/admissions/forms',(req,res)=>{  
  res.render('Admission/forms') 
})

//admission procedure
app.get('/admissions/procedure',(req,res)=>{  
  res.render('Admission/procedure') 
})

//student route
   //student calander
app.get('/student/calender',(req,res)=>{  
  res.render('student/calender') 
})

//student scholorship
app.get('/student/scholorship',(req,res)=>{  
  res.render('student/scholorship') 
})

//student gallary
app.get('/student/gallary',(req,res)=>{  
  res.render('student/gallary/gallary') 
})

//student school Prayer
app.get('/student/schoolPrayer',(req,res)=>{  
  res.render('student/schoolPrayer') 
})

//campus route
app.get('/student/gallary/campus',(req,res)=>{  
  res.render('student/gallary/campus') 
})

//sports route
app.get('/student/gallary/sports',(req,res)=>{  
  res.render('student/gallary/sports') 
})

//activities route
app.get('/student/gallary/activities',(req,res)=>{  
  res.render('student/gallary/activities') 
})

//campus route
app.get('/student/gallary/tour',(req,res)=>{  
  res.render('student/gallary/tour') 
})

//about us pages rotes:

//helpline
app.get('/aboutUs/helpline',(req,res)=>{  
  res.render('about us/helpline') 
})
//Director's Message
app.get("/aboutUs/director'sMessage",(req,res)=>{  
  res.render('about us/direactor') 
})

//E-Brochure
app.get('/aboutUs/EBrochure',(req,res)=>{  
  res.render('about us/eBrochure') 
})
//
app.get('/aboutUs/OurVission',(req,res)=>{  
  res.render('about us/vission') 
})

//starting the port
app.listen(port, () => {
  console.log('SCHOOL APP is starting at port: ' + port)
})


