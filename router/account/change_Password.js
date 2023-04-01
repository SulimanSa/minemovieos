const express = require('express')
const Users =require('../model/datauser')
const Email =require('../Email/readEmail')
const router =express.Router()
// const { check, validationResult } = require('express-validator/check');
var id ,pass;
router.get("/",function(req,res){
    change= false
    res.render("account/change Password",{chekuser:false})
}) 
router.post("/",function(req,res){
Users.find({username: req.body.User },function(err,result){
    if (err) {
        console.log(err);
    } else {
        if (result.length!=0) {
            if (result[0].is_check===true) {
                var is_check = { ischeck:result[0].ischeck };
                var new_values = { $set: {ischeck: false} };
                Users.updateOne(is_check, new_values, function(err, data){
                    })
            }
            Email.sendEmail(result[0].email,result[0].FirstName,result[0].uniqueString,'Confirm password','password')
            const indexOf = result[0].email.indexOf('@');
            console.log(result[0].email.substring(indexOf+1));                                            
            res.render("account/waiting",{Email:result[0].email.substring(indexOf+1)})
            
            // pass =result[0].password
            // id =result[0]._id
            // res.render("account/change Password",{chekpass:false})
            
                    
        } else {
            res.render("account/change Password",{errors:"Username is invalid",chekuser:true})
        }
    }
})
    })



router.post("/FORGOTPASSWORD",function(req,res){
    if (!(5<=req.body.password.length&&req.body.password.length<=13)) {
        res.redirect("/ChangePassword")
    } else {
        if (req.body.password === pass) {
            res.redirect("/ChangePassword")
        } else {
        var Id = { _id:id };
        var newvalues = { $set: {password: req.body.password} };
        Users.updateOne(Id, newvalues, function(err, data){
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully updated");
                res.redirect("/LogIn")
    }
        })

    }
}

})
router.get("/back",function(req,res){
    res.redirect("/LogIn")
})
module.exports=router