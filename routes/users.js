var express = require('express');
const { getUserList,updateUser ,deleteUser, addUser } = require('../Controller/UserController');
const UserModel = require('../model/UserModel');
var router = express.Router();

require('../Controller/UserController')

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/user/', addUser)

router.put('/user/:id', updateUser)


router.delete('/user/:id', deleteUser)

router.get('/user' , getUserList)

module.exports = router;
