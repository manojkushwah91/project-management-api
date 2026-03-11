const Project = require("../models/Project")

exports.createProject = async(data)=>{

 return await Project.create(data)

}

exports.getProjects = async(user)=>{

 return await Project.find({
   owner:user.id,
   tenantId:user.tenantId
 })

}

exports.updateProject = async(id,user,data)=>{

 return await Project.findOneAndUpdate(
 {
   _id:id,
   owner:user.id
 },
 data,
 {new:true}
 )

}

exports.deleteProject = async(id,user)=>{

 return await Project.findOneAndDelete({
   _id:id,
   owner:user.id
 })

}
