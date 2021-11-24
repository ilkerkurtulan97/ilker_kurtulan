const User = require('../models/User');

exports.createUser = async(req, res) => {
    const user = await User.create(req.body);

    res.status(201).json({user: user});
}

exports.loginUser = async(req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(user){
        bcrypt.compare(req.body.password, user.password, (err, same)=>{
            if(same){
                res.redirect('/');
            }else{
                res.status(400).json({"Error": "Wrong Password"});
            }
        });
    }else{
        res.status(400).json({"Error": "User Not Found"})
    }
    
}