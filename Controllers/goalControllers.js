//All Functionality will be here.
//Note:- getGoals, setGoals, updateGoals, deleteGoals are the functions and we are exporting from here

const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')
const User = require('../model/userModel')
//@desc   Get goal
//@route  GET request - /api/goals
//@access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals)
    // res.status(200).json({message: "Read -> Get Goals"})
})

//@desc   set goal/ Create goal
//@route  POST request - /api/goals
//@access  Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')    //status(400) is a bad request
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(goal)  //status(200) is a sign of ok
})

//@desc   Update goal
//@route  PUT request - /api/goals/:id
//@access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not Found')
    }

    //Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true, })
    res.status(200).json(updatedGoal)
})

//@desc   Delete goal
//@route  DELETE request - /api/goals/:id
//@access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not Found')
    }

    //Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    
    await goal.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals, setGoals, updateGoal, deleteGoal
}