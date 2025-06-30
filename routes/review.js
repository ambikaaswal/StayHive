const express = require("express");
const router = express.Router({ mergeParams: true }); //req.params.id will be undefined — because Express doesn't pass :id down unless explicitly told to.

const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor}= require("../utils/authenticate.js");
const reviewController = require("../controllers/reviews.js")

//Reviews:

//post review route:
//now:listings/:id/reviews is equal to /
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.addReview));

//delete review route:
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;