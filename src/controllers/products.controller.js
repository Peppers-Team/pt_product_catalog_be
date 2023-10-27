const service = require('../services/products.service');

const getAll = async(req, res) => {
  const data = await service.getAll(req.query);

  res.send(data);
};

module.exports = { getAll };
