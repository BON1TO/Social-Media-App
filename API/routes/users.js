const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");


router.get("/",(req,res) => {
    res.send("hey its user route");
});

// FOR UPDATING USER PROFILE
router.put("/:id", async (req, res) => {
    console.log("Request body:", req.body);
    console.log("Request params:", req.params);

    if (req.body.userID === req.params.id || req.body.isAdmin) {
        console.log("User is authorized to update");

        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
                console.log("Password hashed");
            } catch (err) {
                console.error("Password hashing error:", err);
                return res.status(500).json(err);
            }
        }

        console.log("Updating user in database...");
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            console.log("User updated:", user);
            res.status(200).json("Account has been updated");
        } catch (err) {
            console.error("Error updating user:", err);
            res.status(500).json(err);
        }
    } else {
        console.log("Unauthorized access attempt");
        res.status(403).json("You can update only your profile");
    }
});

// FOR DELETING USER PROFILE
router.delete("/:id", async (req, res) => {
    console.log("Request body:", req.body);
    console.log("Request params:", req.params);

    if (req.body.userID === req.params.id || req.body.isAdmin) {

        
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            console.log("User updated:", user);
            res.status(200).json("Account has been deleted");
        } catch (err) {
            console.error("Error updating user:", err);
            res.status(500).json(err);
        }
    } else {
        console.log("Unauthorized access attempt");
        res.status(403).json("You can delete only your profile");
    }
});

//GET A USER PROFILE
router.get("/:id",async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc
        res.status(200).json(other)

    }catch(err){
        res.status(500).json(err);

    }
});

//FOLLOWING A USER
router.put("/:id/follow", async(req,res) => {
    if(req.body.userID !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userID);
            if(!user.followers.includes(req.body.userID)){
                await user.updateOne({$push: {followers: req.body.userID}});
                await currentUser.updateOne({$push: {following: req.params.id}});
                res.status(200).json("User has been followed");
    
            }else{
                res.status(500).json("You already follow this person !");
            }

        }catch(err){
            res.status(500).json(err);

        }
    }else{
        res.status(403).json("You cannot follow your own ID");
    }
});

//UNFOLLOWING A USER
router.put("/:id/unfollow", async(req,res) => {
    if(req.body.userID !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userID);
            if(user.followers.includes(req.body.userID)){
                await user.updateOne({$pull: {followers: req.body.userID}});
                await currentUser.updateOne({$pull: {following: req.params.id}});
                res.status(200).json("User has been unfollowed");
    
            }else{
                res.status(403).json("You already dont follow this person !");
            }

        }catch(err){
            res.status(403).json(err);

        }
    }else{
        res.status(403).json("You cannot follow your own ID");
    }
});

module.exports = router 