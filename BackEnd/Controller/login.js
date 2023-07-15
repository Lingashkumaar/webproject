// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const jwt=require('jsonwebtoken')
// const {User} = require('../Schema/Student');

// module.exports.signup = async (req, res) => {
//   const {name,email,phone,password} = { ...req.body }
//   try {
//   const existinguser = await User.findOne({email:email})
//   if (existinguser) {
//   return res.status(400).json('User already found..')
//   }
//   const hashPassword = await bcrypt.hash(password, 12);
//   const newUser = new User({ name,email,phone, password: hashPassword})
//   await newUser.save();
//   const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'token', { expiresIn: '1h' })         
//   res.status(200).json({ user: newUser, token })
//   } catch (err) {
//   console.log(err.message)
//   res.status(500).json('Something went worng...')
//   }
// }

// module.exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//   var existinguser = await User.findOne({ email:email })
//   if (!existinguser) {
//   existinguser = await Admin.findOne({ email:email })
//   if (!existinguser) {
//   console.log("User not found...");
//   return res.status(404).json("User not found...")
//   }
//   }
//   const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
//   if (!isPasswordCrt) {
//   return res.status(400).json("Password Incorrect")
//   }
//   const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, 'token', { expiresIn: '48h' })
//   res.status(200).json({ user: existinguser, token })
//   } catch (err) {
  
//   res.status(500).json(err.message)
//   }
// }
