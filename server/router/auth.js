const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate=require("../middleware/authenticate")
const cookieParser = require('cookie-parser');
require('../db/conn')
const User = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send(`Hi from server router js`)
})
router.use(cookieParser());
const { hash } = require('bcryptjs');


router.post('/register', async (req, res) => {
    const { name, email,password, cpassword } = req.body;
    if (!name || !email ||  !password || !cpassword) {
        return res.status(422).json({
            error: "fill it properly"
        })
    }
    try {
        const exist = await User.findOne({ email: email })
        if (exist) {
            return res.status(422).json({ error: " Email Exist already" });
        }
        const user = new User({ name: name, email, password, cpassword }) // If the key and value are same then we can write it as "name" only also and if not we can write both key and value like="name:name"both it will result same 

        const userRegister = await user.save();

        // console.log(`${user} user registered successfuly`);
        console.log(userRegister);

        res.status(201).json({ message: "user registered successfuly" })
    }
    catch (err) {
        console.log(err)
    }
})


router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Fill the data properly" });
        }
        // res.json({ message: "Done with signin" });

        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            // console.log(userLogin);
            token = await userLogin.generateAuthToken();
            console.log(token);         

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 2592000000),//30days in millisec
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" })
            }
            else {
                res.json({ message: "user signin successfully" })
            }
        }
        else {
            res.status(400).json({ error: "Invalidity" })
        }
    } catch (error) {
        console.error(error);
        //  res.status(500).json({ error: 'Internal server error' });
    }
});


// router.get('/about', authenticate, (req, res) => {
//     res.send(req.rootUser);
//     console.log("Hi from about")
// })

// //for both the contact and about page.
// router.get('/getdata', authenticate, (req, res) => {
//     res.send(req.rootUser);
//     console.log("Hi from about")
// })

// contact us page
// require('./router/auth.js')
// router.post('/contact',authenticate,async(req,res)=>{
//     // res.send("Hello contact from the server side");
//     try{
//      const {name,email,phone,message} = req.body; //changes

//      if(!name || !email || !phone || !message)
//      {
//         console.log("errror in contact form")
//         return res.json({error:"Fill the contact form properly"})
//      }

//     const userContact= await User.findOne({_id:req.UserID});
//     if(userContact){
//         const userMessage=await userContact.addMessage(name,email,phone,message)
//         await userContact.save();

//         res.status(201).json({message:"Contact Successfully"})
//     }
     
//     }
//     catch(err){
//       console.log(err)
//     }
// })


// router.get('/logout', authenticate, (req, res) => {
//     console.log("Hi from logout");
//     res.clearCookie('jwtoken',{path:'/'})
//     res.status(200).send("User Logout");
// })
module.exports = router;