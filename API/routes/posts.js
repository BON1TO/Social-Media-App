const router = require("express").Router();
const Post = require("../models/post");
const user = require("../models/user");

// Create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json("Post not found");
        }
        if (post.userID === req.body.userID) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("Post has been updated");
        } else {
            res.status(403).json("You can update only your own post");
        }
    } catch (err) {
        console.error("Error updating post:", err); // Debugging log
        res.status(500).json(err);
    }
});

// deleting a post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json("Post not found");
        }
        if (post.userID === req.body.userID) {
            await post.deleteOne();
            res.status(200).json("Post has been deleted");
        } else {
            res.status(403).json("You can delete only your own post");
        }
    } catch (err) {
        console.error("Error updating post:", err); // Debugging log
        res.status(500).json(err);
    }
});

// Like or unlike a post

router.put("/:id/like", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userID)){
            await post.updateOne({$push: {likes: req.body.userID}});
            res.status(200).json("post has been liked");
        }
        else{
            await post.updateOne({$pull: {likes: req.body.userID}});
            res.status(200).json("Post has been disliked");
        }
    }catch(err){
        res.status(500).json(err);
    }

});

//fetching timeline posts
router.get("/timeline/all",async (req,res)=>{
    try{
        const currentUser = await user.findById(req.body.userID);
        const userPosts = await Post.find({userID: currentUser._id});
        const friendposts = await Promise.all(currentUser.following.map((friendID) => {
            return Post.find({userID: friendID});
        }));
        res.status(200).json(...friendposts);
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports = router; // This line should be outside the function block
