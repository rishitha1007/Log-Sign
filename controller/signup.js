const User = require('../model/user');
const bcrypt = require('bcryptjs');

exports.signup = async(req,res) => {
    try{
        const{Username,Email,Password} = req.body
        const existingUser = await User.find({"Email": req.body.Email})
        console.log("existingUser", existingUser)
        if (existingUser.length !== 0 ) {
            return res.send({
                message: "User already exists"
            })
        }
        const hashPass = await bcrypt.hash(req.body.Password, 10)
        const value = new User({
            Username, Email,
            Password: hashPass
        })
        await value.save()
        return res.send({
            message: "User saved successfully",
            user: value
        })
    }catch(error) {
        console.error('server error', error)
        return res.send({
            message: "Server Error",
            error: error
        })

    }
}