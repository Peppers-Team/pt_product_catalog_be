const service = require('../services/products.service');

const getAll = async(req, res) => {
  const data = await service.getAll();

  res.send(data);
};

module.exports = { getAll };
