// Specifies the path at which each request is resolved

// 1.Import express
const express = require('express')

      // Import user controller
      const userController = require('../Controllers/userController')

      // Import project controller
      const projectController = require('../Controllers/projectController')

      // Import jwtMiddleware
      const jwtMiddleware = require('../Middleware/jwtMiddleware')
      const multerConfig = require('../Middleware/multerMiddleware')

// 2.Create an object for Router() class in the express module
const router = new express.Router()

// 3.Path to resolve requests
// Syntax : router.httpreq('path',()=>{how to solve})

// a) Registration :
router.post('/user/register', userController.register)

// b) Login 
router.post('/user/login', userController.login)

// c) Add project
router.post('/project/add', jwtMiddleware, multerConfig.single('projectImage'), projectController.addProject)

// d) Get home project 
router.get('/project/home-project', projectController.getHomeProject)

// e) Get all project 
router.get('/project/all-project', jwtMiddleware, projectController.getAllProject)

// f) Get user project 
router.get('/user/allproject', jwtMiddleware, projectController.getUserProject)

// g) Edit project
router.put('/project/edit/:id', jwtMiddleware, multerConfig.single('projectImage'), projectController.editUserProject)

// h) Delete project
router.delete('/project/remove/:id', jwtMiddleware, projectController.deleteProject)

// i) Edit profile
router.put('/user/edit', jwtMiddleware, multerConfig.single('profile'), userController.editUser)

// 4.Export router
module.exports = router