const { Product, Detail } = require('../models');
const { Op } = require("sequelize");

const getAll = async ({ offset, limit, category }) => {
	const query = { offset, limit };

	if (category) {
		query.where = {
			category
		}
	}

	const data = await Product.findAndCountAll(query);

	return data;
};

const get = async (productId) => {
	const product = await Product.findByPk(productId);
	const detail = await product?.getDetail();

	if (!detail) {
		return;
	}

	const details = await Detail.findAll({
		where: {
			namespaceId: detail.namespaceId,
		},
	});


	return { product, details };
}

const getRecommended = async (params) => {
	const recommendedProducts = await Product.findAll(params);

	return recommendedProducts;
}

const getNewProducts = async () => {
	const data = await Product.findAll({
		where: {
			year: {
				[Op.gte]: 2021,
			},
		},
	});

	return data;
}

module.exports = { getAll, get, getRecommended, getNewProducts };
