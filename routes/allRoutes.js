const express = require('express')
const Task = require('../models/tasks');
const router = express.Router()
const controller = require('../controller/todocontroller')

//home
router.get('/', controller.home)

// Handeler for '/task-list'
router.post('/task-list',controller.taskList)

// Handeler for '/delete-task'
router.post('/delete-task', controller.deleteTask)


module.exports = router;

