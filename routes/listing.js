const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../utils/authenticate.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");//for multiform data
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});
// const upload = multer({dest: "uploads/"});//initialistion, upload folder delete kr diya

//Index route:
router.get("/", (listingController.renderIndex)
);


//create route:
router
.post("/",
  isLoggedIn,  
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.renderCreateNew)
);

//new route:
router.get("/new", 
  isLoggedIn, 
  listingController.renderNewForm
);

//new route should come before this show route
//kyunki phir vo new ko id smjhega
//Show route:
router.get("/:id", wrapAsync(listingController.renderShowStays)
);

//edit route:
router.get("/:id/edit", 
  isLoggedIn, 
  isOwner, 
  wrapAsync(listingController.renderEditForm)
);


//update route:
router.put("/:id", 
  isLoggedIn, 
  isOwner, 
  upload.single("listing[image]"),
  validateListing, 
  wrapAsync(listingController.UpdateStay)
);


//delete route:
router.delete("/:id",
  isLoggedIn, 
  isOwner, 
  wrapAsync(listingController.destroy)
);

module.exports = router;


// router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
//   const newListing = new Listing(req.body.listing);
//   await newListing.save();
//   req.flash("success", "New Stay added!");
//   res.redirect("/listings");
// }));

// function isLoggedIn(req, res, next) {
//   if (!req.isAuthenticated()) {
//     req.flash("error", "You must be logged in to do that!");
//     return res.redirect("/login");
//   }
//   next();
// }