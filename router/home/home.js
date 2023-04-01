const express = require('express')
const router =express.Router()
const Users =require('../model/datauser')
router.use(express.static('public'));
var check_img_profile= false
router.get("/",function(req,res){
if (check_img_profile) {
    res.redirect("/Homes/"+uniqueStr)
} else {
    
    res.render("home/index",{
        check_img_profile:false
    })
}
})

router.get('/:uniqueString', function (req, res) {
     const {uniqueString} = req.params
    //  console.log(uniqueString);
    Users.find({uniqueString:uniqueString},function(err,result){
        if (err) {
            console.log(err);
        } else {
            check_img_profile= true
         res.render("home/index",{
                    check_img_profile:check_img_profile,
                    image: result[0].img.toString('base64'),
                    result:result[0]
                    })

        }
    })
  })


router.get("/:uniqueString/Logout",function(req,res){
    check_img_profile= false
    res.redirect("/Homes")
})

router.get('/:uniqueString/acaount', function (req, res) {
    var {uniqueString}=req.params
    res.redirect("/Profile/"+uniqueString)
  })
module.exports=router
