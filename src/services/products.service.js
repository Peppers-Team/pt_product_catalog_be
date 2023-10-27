const { Product } = require('../models');

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

module.exports = { getAll };
