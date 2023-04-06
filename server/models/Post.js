import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    location: String,
    description: String,
    picturepath: String,
    userPicturePath: String,
    like:{
        type: Map, //Like array but better!
        of: Boolean,
    },
    comments: {
        type : Array, //types?
        default: []
    }
}, {timestamps: true} );

const Post = mongoose.model("Post", postSchema);
export default Post;