const router = require("express").Router();
const user = require("../models/user");
const bcrypt = require("bcrypt");

// Route to test the auth route
router.get("/", (req, res) => {
    res.send("hey its auth route");
});

// POST route to register a new user
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash the password before storing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new user({
            username,
            email,
            password: hashedPassword, // Store hashed password
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Return success response with the saved user data
        res.status(200).json(savedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error registering user", error: err });
    }
});

//login
router.post("/login",async(req,res) => {
    try{

        //correct email or not
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("User Not Found");

        //correct password or not
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong Password");

        //correct login
        res.status(200).json(user);

        
    } catch(err){

        console.log(err);
    }
});

module.exports = router;
