import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/User.js"
 
// USER REGISTER
//async=call api, req=record what we got in UI, res=response from database  
export const register = async (req, res) =>{
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturepath,
            friends,
            location,
            occupation
        } = req.body;
    const salt = await bcrypt.genSalt(); //throw salt at sb lol.
    const passwordHash = await bcrypt.hash(password, salt); //hash pass and salt for encrypt
    const newUser = new User({
        firstName,
        lastName,
        email,
        password: passwordHash, //we don't use real pass in UI but hashing!
        picturepath,
        friends,
        location,
        occupation,
        viewedProfile: Math.floor(Math.random()*10000),
        impression: Math.floor(Math,random()*10000)
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); // if everything above correct return 201 stat(data true) return json file to save this user.
    }
    catch (err) {
        res.status(500).json({ error: err.massage }); // if everything above fukup return 500 stat(data false) return error msg from mongoose.
    }
}