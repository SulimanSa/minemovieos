const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const nodemailer = require("nodemailer");
const app = express()
// app.use(express.static(`public`));

app.set('view engine','ejs')
// const movies = require('./Router/movies/movie')
const SignUp = require('./Router/account/signUp')
const LogIn = require('./Router/account/logIn')
const Homes = require('./Router/home/home')
const Profile = require('./Router/account/profile')
const changePassword = require('./Router/account/change_Password')
const mongodb = require('./Router/connection/mongodb')
const Users =require('./Router/model/datauser');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use('/movies', movies)
app.use('/SignUp', SignUp)
app.use('/LogIn', LogIn)
app.use('/Homes', Homes)
app.use('/Profile', Profile)
app.use('/ChangePassword', changePassword)
// app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));

// Mount the middleware at "/static" to serve static content only when their request path is prefixed with "/static".

    // GET /static/style.css etc.


// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
 
// var upload = multer({ storage: storage });
app.get('/', function (req, res) {
  res.redirect("/Homes")
  // res.render('home/index',{check_img_profile:false})
})

app.get('/verify/Password/:uniqueString', function (req,res) {
 const {uniqueString} = req.params
 Users.find({uniqueString:uniqueString},function(err,result) {
  if (result.ischeck===true) {
    res.redirect("/LogIn")
  } else {
   if (result.length!=0) {
     var myquery = { uniqueString: uniqueString };
  var newvalues = { $set: {ischeck: true } };
     Users.updateOne(myquery,newvalues,function(err) {
       if (err) {
         console.log(err);
       }
     })
    
      res.render("account/FORGOTPASSWORD",{uniqueString:result[0].uniqueString,check:false})
   } else {
    //  res.redirect("/ChangePassword")
      res.render("account/FORGOTPASSWORD",{check:false})

   } 
  } 
 })
})




app.post('/verify/Password/FORGOTPASSWORD/:uniqueString', function (req, res) {
        const {uniqueString} = req.params
        Users.find({uniqueString:uniqueString},function(err,result) {

        
  if (req.body.password === result[0].password) {
            res.render("account/FORGOTPASSWORD",{check:true,uniqueString:result[0].uniqueString,errors:'The same old password cannot be entered'})
        } else {
        var uniqueStr = { uniqueString:uniqueString };
        var newvalues = { $set: {password: req.body.password} };
        Users.updateOne(uniqueStr, newvalues, function(err, data){
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully updated");
                res.redirect("/LogIn")
    }
        })

    }
    })

})

app.get('/verify/Email/:uniqueString', function (req, res) {
 const {uniqueString} = req.params
 Users.find({uniqueString:uniqueString},function(err,result) {
  if (result.ischeck===true) {
    res.redirect("/LogIn")
  } else {
   if (result.length!=0) {
     var myquery = { uniqueString: uniqueString };
  var newvalues = { $set: {isValid: true } };
     Users.updateOne(myquery,newvalues,function(err) {
       if (err) {
         console.log(err);
       }
     })
    
    res.redirect("/LogIn")
   } else {
     res.redirect("/SignUp")
   } 
  } 
 })
  // res.redirect("/Homes")
})
app.listen(3000,()=>{
  console.log("app is working in port 3000");  
})
