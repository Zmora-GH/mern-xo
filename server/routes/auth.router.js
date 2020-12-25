const {Router} = require('express');
const User = require('../models').User;
const Sequelize = require('sequelize');
const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const config = require('config');

const router = Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password} = req.body;
        const temp_user = await User.findOne({where: {username: username}});
        if (temp_user) {
            return res.status(400).json({message: "This username already exists"});
        }
        const pass = crypto.createHash('md5').update(password).digest("hex");
        const user = await User.create({ username, email, password: pass });
        res.status(201).json({ message: 'User Created' });
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch auth.router : signup'});
   }
});

router.post('/signin', async (req, res) => {
    try {
       const { username, password } = req.body;
       const temp_user = await User.findOne({where: {username: username}});
       if (!temp_user) {
           return res.status(400).json({message: "User not found"});
       }
       const pass = crypto.createHash('md5').update(password).digest("hex");
       if (!(pass === temp_user.password)) {
           return res.status(400).json({message: "Invalid password"});
       }
       const token = jsonwebtoken.sign({userId: temp_user.id}, config.get('Server.secret'), {expiresIn: '1h'});
       res.status(201).json({ token, userId: temp_user.id })
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch auth.router : signin'});
   }
});

module.exports = router;
