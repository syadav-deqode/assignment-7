const userService = require('../services/userService')

module.exports.loginUserPage = async (req, res, next) => {
  res.render("login");
}

module.exports.loginUser = async (req, res, next) => {
  const users = await userService.loginUser(req.body)
  res.status(200).json(users)
  next()
}

module.exports.userListWithPage = async (req, res, next) => {
  const { users } = await userService.getUsers(req.body)
  res.render("users", { users });
}

module.exports.registerUserPage = async (req, res, next) => {
  res.render("register");
}

module.exports.registerUser = async (req, res, next) => {
  const { user } = await userService.addUser(req.body)
  res.status(200).json(user)
}
