const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require("../middleware/auth");
const authorize = require ("../middleware/authorize");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get('/users', authenticate, userController.getUsers);
router.get('/user/:userId', authenticate, authorize(["admin", "manager", "staff"]), userController.getUser);
router.put('/user/:userId', authenticate, authorize(["user"]), userController.updateUser);
router.delete('/user/:userId', authenticate, authorize(["user"]), userController.deleteUser);

module.exports = router;