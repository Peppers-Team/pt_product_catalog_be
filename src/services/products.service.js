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
				params.order = [['year', 'DESC']];
				break;
			case 'alphabetically':
				params.order = [['name', 'ASC']];
				break;
			case 'cheapest':
				params.order = [['price', 'ASC']];
				break;
		}
	}

	if (query) {
		params.where = {
			name: {
				[Op.match]: Sequelize.fn('lower', query),
			}, ...params.where,
		}
	}

	if (priceFrom && priceTo) {
		params.where = {
			price: {
				[Op.between]: [priceFrom, priceTo],
			}, ...params.where,
		}
	}

	const data = await Product.findAndCountAll(params);

	return data;
};

const get = async (productId) => {
	const selectedProduct = await Detail.findByPk(productId);
	const product = await Product.findAll({
		where: {
			itemId: productId,
		}
	})

	if (!selectedProduct) {
		return;
	}

	const details = await Detail.findAll({
		where: {
			namespaceId: selectedProduct.namespaceId,
		},
	});


	return { product: product[0], selectedProduct, details };
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

const getItemsCount = async () => {
	const data = await Product.findAll();

	const phonesLength = data.filter(({ category }) => category === 'phones').length;

	const tabletsLength = data.filter(({ category }) => category === 'tablets').length;

	const accessoriesLength = data.filter(({ category }) => category === 'accessories').length;

	return {
		phonesCount: phonesLength, tabletsCount: tabletsLength, accessoriesCount: accessoriesLength,
	}
}

module.exports = { getAll, get, getRecommended, getNewProducts, getDiscount, getItemsCount };
