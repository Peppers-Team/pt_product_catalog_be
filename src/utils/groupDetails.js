'use strict';

const fs = require('fs');
const path = require('path');

const dir = path.resolve('src', 'seeders', 'data', 'details');

function getDetails() {
  const data = fs.readdirSync(dir)
    .filter(name => path.extname(name) === '.json')
    .map(name => require(path.join(dir, name)));

  const [accessories, phones, tablets] = data;

  return accessories.concat(phones, tablets).map(product => ({
    ...product,
    description: JSON.stringify(product.description),
  }));
}

module.exports = { getDetails };
