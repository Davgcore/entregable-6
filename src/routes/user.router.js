const {getAll, create, getOne, remove, update} = require('.../controllers/user.controller');
const express = require('xpress');

const routerUser = express.Router();

routerUser.route('/')
    .getAll(getAll)
    .post(create);

routerUser.route('/:id')
    .delete(remove)
    .put(update);


    module.exports = routerUser;

