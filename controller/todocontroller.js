const Task = require('../models/tasks');


const home = (req, res) => {

    Task.find({}, function (err, tasks) {
        if (err) {
            console.log("Error in fetching db");
            return;
        }

        return res.render('home', { content: tasks })
    })

}

const taskList = (req, res) =>
 {
    Task.create({
        name: req.body.name,
        dropdown: req.body.dropdown,
        date: req.body.date
    }, function (err, newTask) {
        if (err) {
            console.log("Error while creating Task");
            return;
        }

        //    console.log("*****",newTask);
        return res.redirect('back');
    })
 }

 const deleteTask = (req ,res) =>
 {
    var delete_arr = req.body.delete
    // console.log(delete_arr);
  
    if(delete_arr == undefined)          // If anyone deletes without selecting any task
    {
      console.log("You haven't selected anything")
    }
    else if (typeof (delete_arr) === "string") {
        Task.findByIdAndDelete(delete_arr, function (err) {   // for deleting one tasks
            if (err) {
                console.log("Error in deleting data")
            }
        })
    }
    else {
        for (let i = 0; i < delete_arr.length; i++) {      // for deleting multiple tasks
            console.log(delete_arr[i])
            Task.findByIdAndDelete(delete_arr[i], function (err) {
                if (err) {
                    console.log("Error in deleting data")
                }
            })
        }


    }

    return res.redirect('back')

 }
module.exports = {
    home,
    taskList,
    deleteTask
}