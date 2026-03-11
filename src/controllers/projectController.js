const service = require("../services/projectService")

exports.create = async(req,res)=>{

 const project = await service.createProject({
   ...req.body,
   owner:req.user.id,
   tenantId:req.user.tenantId
 })

 res.json(project)

}

exports.getAll = async(req,res)=>{

 const projects = await service.getProjects(req.user)

 res.json(projects)

}

exports.update = async(req,res)=>{

 const project = await service.updateProject(
   req.params.id,
   req.user,
   req.body
 )

 res.json(project)

}

exports.delete = async(req,res)=>{

 await service.deleteProject(req.params.id,req.user)

 res.json({msg:"Deleted"})

}
