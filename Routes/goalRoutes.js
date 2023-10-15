const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoal, deleteGoal} = require('../Controllers/goalControllers');

//===============Defines Router in a multiple lines===========
//Read
// router.get('/', getGoals)
// //Create
// router.post('/', setGoals)
// //Update  (by patch request)
// // router.patch('/:id', (req, res) => {
// //     res.status(200).json({message: `Update Goal --> ${req.params.id}`})
// // })

// //Update  (by put request)
// router.put('/:id', updateGoal)
// //Delete
// router.delete('/:id', deleteGoal)

//Now we are just shorting the lines (for clean code), but both will work same
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;