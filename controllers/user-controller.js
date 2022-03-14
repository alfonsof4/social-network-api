const { User, Thought } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find()
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        });
    },
    getUserById({ params }, res) {
        User.find({})
            .populate({
                
            })

    }
}
// .populate('friends')
// .populate('thoughts')
// .then
