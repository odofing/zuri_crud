const express = require('express');
const router = express.Router();
const Project  = require('../Models/Posts');



// SUBMITS POST
router.post('/', async (req, res) => {
  console.log(req.body);
  const project = new Project ({
    name: req.body.name,
    email: req.body.email,
    country: req.body.country,
  }); 
  try {
      const savedProject = await project.save();
    res.json(savedProject)
      
      } catch (error) {
          res.status(404).send({message: 'There is an error', data: savedProject})
      }
  })
  

// GET ALL POSTS
router.get('/', async (req, res) => {

    try{
       const projects = await Project.find();
            res.json(projects)
    }  catch (error) {
        res.json({message: 'There is an error', data: projects}) 
}
})

// GET PARTICULAR POST
router.get('/:projectId', async (req, res) => {
    console.log(req.params.projectId);
  try {
      const findProject = await Project.findById(req.params.projectId);
      res.json(findProject)
  }catch (error) {
    res.json({message: 'There is an error', data: findProject})
}
})

  // UPDATE RECORD
  router.put('/:projectId', async (req, res) => {
      console.log(req.params.projectId);
    try {
        const updateAllProject = await Project.updateOne({_id: req.params.projectId}, 
            {$set: 
                { name: req.body.name,
                email: req.body.email,
                country: req.body.country,
                 }
    })
        res.json(updateAllProject)
    }catch (error) {
      res.json({message: 'There is an error', data: updateAllProject})
  }
  })

// DELETE A POST 
router.delete('/:projectId', async (req, res) => {
    try{
  const removeProject = await Project.deleteOne({_id: req.params.projectId})
  res.json(removeProject)
}catch (error) {
  res.json({message: 'There is an error', data: removeProject})
}
})



module.exports = router;