if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

//note: package.js me pehle main: index.js tha, ab hum init me jaake npm index.js kr rahe h

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");//middleware for put and delete request from edit.ejs to update route
const ejsMate = require("ejs-mate");//boilerplate template k liye/templating
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const dbURL = process.env.DB_URL;

async function main(){
    await mongoose.connect(dbURL);
}
main()
.then(()=>{
    console.log("connected to db");
}).catch(err=>{
    console.log(err);
})

const sessionOptions = {
    secret: "secretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, //one week
        maxAge: 7* 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

const User = require("./models/user.js");

app.use(session(sessionOptions));
app.use(flash());//should be added before routes

app.use(passport.initialize());
app.use(passport.session());//same user session continue kre
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user; //now current user contains passport's req.user info
    next();
}); 

//acquiring routes:
const listings = require("./routes/listing.js");//listing waale route ko acquire krne k liye
const reviews = require("./routes/review.js");
const user = require("./routes/user.js");


app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true})); //to make data available in req.body, to show data


app.use(express.json());
app.use(methodOverride("_method"));//middleware for put request in edit(from edit.ejs to update route)
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname, "/public")));//middleware for static files ko frontend me serve krne k liye

app.use("/listings", listings);//jo request /listings se start ho rahi h, we use router exported from listings variable
app.use("/listings/:id/reviews", reviews);
app.use("/", user);

app.get("/", (req, res) => {
  res.redirect("/listings");
});


// app.get("/debug", (req, res) => {
//   res.send(req.user ? `Logged in as ${req.user.username}` : "Not logged in");
// });

//error.ejs for invalid routes(404)
app.use((req,res)=>{
    res.status(404).render("listings/Invalid");
});

//error handler:
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("listings/Invalid", { message });
});

app.listen(8000, ()=>{
    console.log("Server is listening on port 8000");
});


//first test:
// app.get("/testListing", async(req,res)=>{
//     let sampleListing = new Listing({
//         title: "New Villa",
//         description: "Beside beach",
//         image: String,
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     })
//     await sampleListing.save();
//     console.log("Sample saved");
//     res.send("Successful testing.")
// });


// app.get("/demouser", async(req, res)=>{
//     let fakeUser = new User({
//         email: "stud@gmail.com",
//         username: "stud"
//     });
//     let registeredUser = await User.register(fakeUser, "helo");
//     res.send(registeredUser);
// });


