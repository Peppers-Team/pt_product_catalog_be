'use strict';

const express = require('express');
const controller = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', controller.getAll);
productsRouter.get('/new', controller.getNewProducts);
productsRouter.get('/discount', controller.getDiscount);
productsRouter.get('/:id', controller.getById);
productsRouter.get('/:id/recommended', controller.getRecommendedProducts);

module.exports = { productsRouter };
