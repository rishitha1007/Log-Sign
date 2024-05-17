const User = require('../model/user');
const bcrypt = require('bcryptjs');

exports.login = async(req,res) => {
    try{
        const { Email, Password } = req.body;
        const existingUser = await User.find({"Email": Email})
        console.log("existingUser", existingUser)
        if (existingUser.length === 0) {
            return res.send({
                message: "User doesn't exists"
            })
        }
        const matchPass = await bcrypt.compare(Password, existingUser[0].Password)
        if (!matchPass) {
            return res.send({
                message: "Invalid Credentials"
            })
        }
        return res.send({
            message: "User logged in  successfully"
        })
    }catch(error) {
        console.error('Server Error', error)
        return res.send({
            message: "Server Error",
            error: error
        })
    }
}