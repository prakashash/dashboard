var jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
    try {
        var token = req.header('Authorization').replace('Bearer ', '')
        console.log("====", token)
        var decoded = jwt.verify(token, 'thisisdashboard');
        console.log("====decoded===", decoded)
        const user = await User.findById(decoded._id);
        if (!user) {
            res.status(400).send("Unauthorized");
            return;
        }

        req.body.user =user;
        
        next();
    } catch (e) {
        console.log(e);
        res.status(400).send("Unauthorized");
    }
    
}
module.exports = auth;