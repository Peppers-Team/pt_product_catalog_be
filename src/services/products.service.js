const { Product } = require('../models');

const getAll = async(limit, offset) => {
  const data = await Product.findAndCountAll({
    limit,
    offset,
  });

  return data;
};

module.exports = { getAll };
