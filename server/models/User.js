import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        min: 50,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        min: 8,
    },
    picturepath: {
        type: String,
        default: "",
    },
    friends: {
        type: Array,
        default: []
    },
    localtion: String,
    occupation: String,
    viewedProfile: Number,
    impression: Number,
}, {timestamps:true}); //up2date[calender]

const User = mongoose.model("User", UserSchema);
export default User;