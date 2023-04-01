const express = require('express')
const Users =require('../model/datauser')
// const imgesdata = require("../getdata/getimge")
const router =express.Router()
router.use(express.static('public'));

router.get("/",function(req,res){

    res.render("account/LogIn",{check:false})
    
})
router.post("/",function(req,res){ 



    let user =  ({
        username : req.body.User,
         password : req.body.password
    })
    Users.find({username: req.body.User},function(err,result){
        if (err) {
            console.log(err);
        } else {
            
             if (result[0].isValid===false) {
                 
                 res.render("account/LogIn",{isValid:false,check:false})
                } else {
                if (result.length!=0) {
                    if (result[0].password === req.body.password) {
                    
                // res.render("home/index",{
                //         check_img_profile:true,
                //         image: result[0].img.toString('base64')
                //         })
                    
                //     imgesdata.setimage(result[0].img.toString('base64'),true)
                    
                    res.redirect("/Homes/"+result[0].uniqueString)
                } else {
                    res.render("account/LogIn",{error:"The password or username might be wrong",check:true,user:user})   
                }
            } else {
                    res.render("account/LogIn",{error:"The password or username might be wrong",check:true,user,user})
            }
                }
      
        }
    })
}) 


router.get("/ChangePassword",function(req,res){
    res.redirect("/ChangePassword")
})
router.get("/SignUp",function(req,res){
    res.redirect("/SignUp")
})
router.get("/back",function(req,res){
    res.redirect("/Homes")
})
module.exports=router