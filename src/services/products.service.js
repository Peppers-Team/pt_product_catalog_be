const { Product, Detail } = require('../models');

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

const get = async(productId) => {
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

const getRecommended = async(params) => {
	const recommendedProducts = await Product.findAll(params);

	return recommendedProducts;
}

module.exports = { getAll, get, getRecommended };
