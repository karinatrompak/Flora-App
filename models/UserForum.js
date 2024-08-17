import mongoose from "mongoose";

const UserForumSchema = new mongoose.Schema(
    {
        firstName: {type:String, required: true},
        lastName: {type:String, required: true},
        email: {type:String, required: true},
        password: {type:String, required: true},
        picturePath: {type:String, default:""},
        location: String,
        viewedProfile: Number,
        impressions: Number
    },{timestamps: true});

const UserForum = mongoose.model("UserForum",UserForumSchema);
export default UserForum;