// const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    // image: {
    //     type: String,
    //     default: "https://images.unsplash.com/photo-1682685797229-b2930538da47?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     set: (v)=>v === ""? "https://images.unsplash.com/photo-1682685797229-b2930538da47?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     :v,
    // },
    image: {
        filename: String,
        url: String
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

//mongoose middleware for listing ke saath reviews bhi delete:
listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
    await Review.deleteMany({_id : {$in: listing.reviews}});
    }
})

//model is a librarian with rules
const listing = mongoose.model("listing", listingSchema);
module.exports = listing;

