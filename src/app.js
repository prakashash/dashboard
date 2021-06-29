require('./mongoose');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var jwt = require("jsonwebtoken");

const routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes.apiRoutes(app);


// app.post("/api/user", async (req, res) => {
//     try {

//         var user = new User(req.body);
//         await user.save();
//         var userObj = {
//             email : req.body.email,
//             password : req.body.password,
//             role : req.body.role
//         }
//         res.status(201).send(userObj);

//     } catch (err) {
//         console.log("=====", err)
//         res.status(500).send("Internal server error")

//     }
// })


app.listen('6000', () => {
    console.log("connected")
})