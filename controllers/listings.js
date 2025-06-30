const Listing = require("../models/listing");
const mongoose = require("mongoose");

//mvc framework

// module.exports.renderIndex = async(req,res)=>{
//     const allListings = await Listing.find({});
//     res.render("listings/index",{allListings});
// };


// module.exports.renderIndex = async(req,res)=>{ 
//   const allListings = await Listing.find({});
//  res.render("listings/index",{allListings}); 
// };

module.exports.renderIndex = async (req, res) => {
  const { q } = req.query;
  let allListings;

  if (q) {
    const regex = new RegExp(q, "i"); // case-insensitive
    allListings = await Listing.find({
      $or: [
        { title: regex },
        { location: regex },
        { country: regex }
      ]
    });
  } else {
    allListings = await Listing.find({});
  }

  res.render("listings/index", { allListings, searchQuery: q || "" });
};



module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new");
};


module.exports.renderShowStays = async (req, res, next) => {
  const { id } = req.params;

  // Is the ID even a valid MongoDB ObjectId?
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).render("listings/Invalid");
  }
  const listing = await Listing.findById(id)
  .populate({path: "reviews", //review aa jaaye
    populate:{ //har review ka author aa jaaye
      path: "author"
    }
  })
  .populate("owner");//poora object jaayega reviews ka and owner property bhi
  if (!listing) {
    return res.status(404).render("listings/Invalid");
  }
  // console.log(listing);
  res.render("listings/show", { listing });
};

module.exports.renderEditForm = async(req,res)=>{
    let {id} =req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit",{listing});
};


module.exports.UpdateStay = async(req, res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(req.file){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename};
    await listing.save(); //filename aur url k liye
    }
    req.flash("success","Information updated.");
    res.redirect(`/listings/${id}`);
};

module.exports.renderCreateNew = async(req, res, next)=>{
        let url = req.file.path;
        let filename = req.file.filename;
        const newlisting = new Listing(req.body.listing);
        // console.log(req.user);
        newlisting.owner = req.user._id;   //listing k andar user daalne k liye 
        // if(req.file){
        //   newlisting.image = req.file.path;
        // }
        newlisting.image = {url, filename};
        await newlisting.save();
        req.flash("success", "New Stay added!");
        res.redirect("/listings");    
};

module.exports.destroy = async(req, res)=>{
    let {id} = req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    // console.log(deletedListing);
    res.redirect("/listings");
};
