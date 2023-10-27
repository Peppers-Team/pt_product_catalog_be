const service = require('../services/products.service');

const getAll = async(req, res) => {
  const { offset, limit } = req.query;

  if ((offset && Number.isNaN(+offset) || +offset < 0)
    || (limit && Number.isNaN(+limit) || +limit < 0)) {
    res.sendStatus(400);

    return;
  }

  const data = await service.getAll(req.query);

  res.send(data);
};

const getById = async(req, res) => {
  if (Number.isNaN(req.params.id)) {
    res.sendStatus(400);

    return;
  }

  const data = await service.get(+req.params.id);

  res.send(data);
}

module.exports = { getAll, getById };
