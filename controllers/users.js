const User = require("../models/user.js");
const passport = require("passport");
//const { saveRedirectUrl } = require("../utils/authenticate.js");
//passport contains req.user as well, where undefined means user is not logged in
//login and logout methods exists in passport library
//login method automatically maintains a session



module.exports.signUpForm = (req, res)=>{
    res.render("users/signup.ejs");
};

module.exports.signingUp = async(req, res)=>{
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        //signup k baad automatic login k liye
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to StayHive.");
            res.redirect("/listings");
        })
        
    }catch(err){
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

module.exports.loginForm = (req, res)=>{
    res.render("users/login.ejs");
};


module.exports.loggingIn = (req, res, next) => {
    const redirectUrl = req.session.redirectUrl || "/listings";
    delete req.session.redirectUrl;

    passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      req.flash("error", "Invalid credentials");
      return res.redirect("/login");
    }

    req.login(user, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to StayHive. You are logged in!");
      res.redirect(redirectUrl);
    });
  })(req, res, next);
};


module.exports.loggingOut = (req,res, next)=>{
    req.logout((err)=>{//logout method exists in passport library
        if(err){
           return next(err);
        }
        req.flash("success", "You are logged out.");
        res.redirect("/listings");
    });
};