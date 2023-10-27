const service = require('../services/products.service');

const getAll = async(req, res) => {
  const data = await service.getAll(req.query);

  res.send(data);
};

const getById = async(req, res) => {
  const data = await service.get(+req.params.id);

  res.send(data);
}

module.exports = { getAll, getById };
