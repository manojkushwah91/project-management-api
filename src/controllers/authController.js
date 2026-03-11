const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async(req,res)=>{

 try{

 const {email,password,tenantId} = req.body

 const hash = await bcrypt.hash(password,10)

 const user = await User.create({
   email,
   password:hash,
   tenantId
 })

 res.json(user)

 }catch(err){
 res.status(500).json(err)
 }

}


exports.login = async(req,res)=>{

 try{

 const {email,password} = req.body

 const user = await User.findOne({email})

 if(!user){
  return res.status(400).json({msg:"Invalid credentials"})
 }

 const valid = await bcrypt.compare(password,user.password)

 if(!valid){
  return res.status(400).json({msg:"Invalid credentials"})
 }

 const token = jwt.sign(
 {
  id:user._id,
  tenantId:user.tenantId
 },
 process.env.JWT_SECRET
 )

 res.json({token})

 }catch(err){
 res.status(500).json(err)
 }

}
