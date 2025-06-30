const Listing = require("../models/listing");
const {listingSchema, reviewSchema} = require("../schema.js");//for Joi validation for listing and review
const CustomErrors = require("../utils/CustomErrors.js");
const Review = require("../models/review.js");

module.exports.isLoggedIn =(req,res,next)=>{
    //console.log("req.user ka info isLoggedIn se:\n",req.user); //passport contains req.user as well, where undefined means user is not logged in
    if(!req.isAuthenticated()){
        //user ko jo page usne request kiya tha vahi redirect krna h
        //req.session k andar k naya parameter add krenge redirectUrl
        if (req.method === "GET") {
            req.session.redirectUrl = req.originalUrl;
        }

        // req.session.redirectUrl = req.originalUrl; //req.originalUrl stores jis path ko request kiya h
        req.flash("error", "you must be logged in make changes!");
        return res.redirect("/login");
    }   next();
};


module.exports.isOwner = async(req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    //for api requests
    if(!listing.owner.equals(res.locals.currentUser._id)){
        req.flash("error","you are not the owner of this stay. ");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

//validate listing using Joi:
module.exports.validateListing = (req, res, next)=>{
        let {error} = listingSchema.validate(req.body);
        if(error){
            throw new CustomErrors(400, error.message);
        }else{
            next();
        }
};

//validate review using Joi:
 module.exports.validateReview = (req, res, next)=>{
        let {error} = reviewSchema.validate(req.body);
        if(error){
            //console.log("🚫 Joi validation failed:", error.details);
            throw new CustomErrors(400, error.message);
        }else{
            next();
        }
};

//review owner:

module.exports.isReviewAuthor = async(req,res,next)=>{
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    //for api requests
    if(!review.author.equals(res.locals.currentUser._id)){
        req.flash("error","you didn't create this review. ");
        return res.redirect(`/listings/${id}`);
    }
    next();
};



//not working:
//but login hote hi passport req.session.redirectUrl ki value change kr deta h, so hum isko res.locals me save krenge
//isko login post me user authentication se pehle call krna:
// module.exports.saveRedirectUrl = (req,res,next)=>{
//     //console.log("req.session.redirectUrl  ",req.session.redirectUrl);
//     if(req.session.redirectUrl){
//         console.log("requested ",req.session.redirectUrl);
//         res.locals.redirectUrl = req.session.redirectUrl;
//         delete req.session.redirectUrl;
//     }
//     next(); 
// };