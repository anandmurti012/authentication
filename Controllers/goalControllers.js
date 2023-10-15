//All Functionality will be here.
//Note:- getGoals, setGoals, updateGoals, deleteGoals are the functions and we are exporting from here

const asyncHandler = require('express-async-handler')
//@desc   Get goal
//@route  GET request - /api/goals
//@access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Read -> Get Goals"})
});

//@desc   set goal/ Create goal
//@route  POST request - /api/goals
//@access  Private
const setGoals = asyncHandler(async (req, res) => {
if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')    //status(400) is abad request
}
    res.status(200).json({message: "Create -> Set Goals"})      //status(3)
});

//@desc   Update goal
//@route  PUT request - /api/goals/:id
//@access  Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Goal --> ${req.params.id}`})
});

//@desc   Delete goal
//@route  DELETE request - /api/goals/:id
//@access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Goal --> ${req.params.id}`})
});

module.exports = {
    getGoals,setGoals,updateGoal,deleteGoal
}