const service = require('../services/products.service');
const { Op } = require("sequelize");

const getAll = async (req, res) => {
	const { offset, limit } = req.query;

	if ((offset && Number.isNaN(+offset) || +offset < 0)
		|| (limit && Number.isNaN(+limit) || +limit < 0)) {
		res.sendStatus(400);

		return;
	}

	const data = await service.getAll(req.query);

	res.send(data);
};

const getById = async (req, res) => {
	if (Number.isNaN(req.params.id)) {
		res.sendStatus(400);

		return;
	}

	const data = await service.get(+req.params.id);

	res.send(data);
}

const getRecommendedProducts = async (req, res) => {
	if (Number.isNaN(req.params.id)) {
		res.sendStatus(400);

		return;
	}
	const selectedProduct = await service.get(+req.params.id);

	const params = {
		where: {
			year: {
				[Op.between]: [selectedProduct.product.year, 2023],
			},
		},
	};

	const data = await service.getRecommended(params);

	res.send(data);
}

const getNewProducts = async (req, res) => {
	const data = await service.getNewProducts({
		where: {
			year: {
				[Op.gte]: 2021,
			},
		}
	});

	res.send(data);
}

const getDiscount = async (req, res) => {
	const data = await service.getDiscount();

	res.send(data);
}

module.exports = { getAll, getById, getRecommendedProducts, getNewProducts, getDiscount };
