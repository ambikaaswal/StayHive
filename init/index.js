const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongodb_URL = "mongodb://127.0.0.1:27017/stayhive";

main()
.then(()=>{
    console.log("connected to db");
}).catch(err=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(mongodb_URL);
};

const initDb = async()=>{
    await Listing.deleteMany({});
    //adding owner property to every listing, owner dala h ambi ki objectid ko
    initData.data=initData.data.map((obj)=>({...obj, owner:"684f9767fec436e436c38157"}));
    await Listing.insertMany(initData.data);
    console.log("Data Initialised");
};

initDb();