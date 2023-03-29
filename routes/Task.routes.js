
 const express = require("express")
const { TaskModel } = require("../models/Task.model")

 const taskRouter= express.Router()


   taskRouter.get("/task", async (req,res) =>{
        try{
         const Task = await TaskModel.find()
           res.send(Task)
        }catch(err){
          console.log(err)
        }
      res.send("welcome Home")
   })


     taskRouter.post("/task/create", async (req,res) =>{
         const payload = req.body
               try{
                   const Task = await TaskModel.create(payload)
                       await Task.save()
                       res.send("task added succesfully")
               }catch(err){
                  console.log(err)
               }
     })


     taskRouter.patch("/task/:taskId", async (req,res) =>{
      const payload = req.body
       const taskId = req.params.taskId
            try{
                   await TaskModel.findByIdAndUpdate({_id:taskId},payload)
               
                    res.send("task updated succesfully")
            }catch(err){
               console.log(err)
            }
  })

    
  taskRouter.delete("/task/:taskId", async (req,res) =>{
   const payload = req.body
    const taskId = req.params.taskId
         try{
                await TaskModel.findByIdAndDelete({_id:taskId})
            
                 res.send("task Deleted succesfully")
         }catch(err){
            console.log(err)
         }
})




   module.exports={
    taskRouter
   }