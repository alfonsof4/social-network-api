const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router  
    .route('/')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;

