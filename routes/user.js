const express = require("express");
const router = express.Router({ mergeParams: true });
// const wrapAsync = require("../utils/wrapAsync");
const userController = require("../controllers/users.js");

// abhi tk users: ambi, aswal@g, aswal, ambika, ambika@User, ambika

//signup route:
router.get("/signup", userController.signUpForm);

router.post("/signup", userController.signingUp );

//login route
router.get("/login", userController.loginForm);

//not working:

// router.post("/login",
//     saveRedirectUrl,
//     passport.authenticate("local",{
//     failureRedirect: '/login',
//      failureFlash: true
//     }),
//     async(req, res)=>{
//     try{
//         req.flash("success", "Welcome to StayHive. You are logged in!");
//         //login k baad, jis page ko request kiya tha vahi jaane k liye
//         // console.log("res.locals.redirectUrl",res.locals.redirectUrl);
//         console.log("redirecting to ",res.locals.redirectUrl);
//         const redirectUrl = res.locals.redirectUrl || "/listings";
//         res.redirect(redirectUrl);
//     }catch(err){
//         req.flash("error", err.message);
//         res.redirect("/login");
//     }
// });

router.post("/login", userController.loggingIn);


//logout route
router.get("/logout",userController.loggingOut)

module.exports = router;