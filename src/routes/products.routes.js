'use strict';

const express = require('express');
const controller = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', controller.getAll);
productsRouter.get('/:id', controller.getById);

module.exports = { productsRouter };
