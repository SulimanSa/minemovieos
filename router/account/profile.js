const express = require('express')
const router =express.Router()
const Users =require('../model/datauser')
router.use(express.static('public'));

router.get("/",function(req,res){
    res.redirect("/Homes")
})

router.post("/back",function(req,res){
    Users.find({username:req.body.Username},function(err,result){        
        res.redirect("/Homes/"+result[0].uniqueString)
    })
})

router.post("/ChangePassword",function(req,res){

    Users.find({_id:req.body.id},function(err,result){
        console.log(result);
        if (req.body.oldpass === result[0].password) { 
            var myquery = { _id:req.body.id};
            var newvalues = { $set: {password: req.body.password} };
            Users.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                console.log("1 document updated");

            });
        }else{
            res.redirect("/Profile/"+req.body.id)
        }
    })        

})
router.get("/:uniqueStr",function(req,res){
    const {uniqueStr} = req.params
    console.log(req.params);
     Users.find({uniqueString:uniqueStr},function(err,result){
        if (err) {
            console.log(err);
        } else {
         res.render("account/userprofile",{
                    result: result[0],
                    check_img_profile:true,
                    image: result[0].img.toString('base64'),
                    })
                    // .img.toString('base64'),

        }
    })
})






module.exports=router