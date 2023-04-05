import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"
 
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

// USER LOGIN
export const login = async(req, res) =>{
     try{
        const {email, password} = req.body;
        const user = await User.findOne({ email: email});
        if (!user) return res.status(400).json({msg: "No User with this name."});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({msg: "Invalid credentials."});
        const token = jwt.sign({id:user._id}, process.env,JWT_SECRET);
        delete user.password; //rem userpass to not show in Front-end
        res.status(200).json({token,user});
    } catch (err) {
        res.status(500).json({error: err.massage}); //got other error say mongoose
     }
}