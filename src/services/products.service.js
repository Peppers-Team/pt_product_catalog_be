const { Product, Detail } = require('../models');
const { Op } = require("sequelize");

const getAll = async ({ offset, limit, category, sortBy }) => {
	const query = { offset, limit };

	if (category) {
		query.where = {
			category
		}
	}

	if (sortBy) {
		switch (sortBy) {
			case 'newest':
				query.order = [
					['year', 'DESC']
				];
				break;
			case 'alphabetically':
				query.order = [
					['name', 'ASC']
				];
				break;
			case 'cheapest':
				query.order = [
					['price', 'ASC']
				];
				break;
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

const getDiscount = async () => {
	const data = await Product.findAll();

	const getDiscount = (value) => value.fullPrice - value.price;

	return data.sort((a, b) => {
		return getDiscount(b) - getDiscount(a);
	})
}

module.exports = { getAll, get, getRecommended, getNewProducts, getDiscount };
