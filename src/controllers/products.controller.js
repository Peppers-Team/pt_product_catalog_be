const service = require('../services/products.service');

const getAll = async(req, res) => {
  res.send(await service.getAll());
};

module.exports = { getAll };
