const { Product, Detail } = require('../models');
const { Op, Sequelize } = require("sequelize");

const getAll = async ({ offset, limit, category, sortBy, query, priceFrom, priceTo }) => {
	const params = { offset, limit };

	if (category) {
		params.where = {
			category
		}
	}

	if (sortBy) {
		switch (sortBy) {
			case 'newest':
				params.order = [
					['year', 'DESC']
				];
				break;
			case 'alphabetically':
				params.order = [
					['name', 'ASC']
				];
				break;
			case 'cheapest':
				params.order = [
					['price', 'ASC']
				];
				break;
		}
	}

	if (query) {
		params.where = {
			name: {
			[Op.match]: Sequelize.fn('lower', query),
			},
			...params.where,
		}
	}

	if (priceFrom && priceTo) {
		params.where = {
			price: {
				[Op.between]: [priceFrom, priceTo],
			},
			...params.where,
		}
	}

	const data = await Product.findAndCountAll(params);

	return data;
};

const get = async (productId) => {
	const product = await Product.findByPk(productId);
	const selectedProduct = await product?.getDetail();

	if (!selectedProduct) {
		return;
	}

	const details = await Detail.findAll({
		where: {
			namespaceId: selectedProduct.namespaceId,
		},
	});


	return { product, selectedProduct, details };
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
