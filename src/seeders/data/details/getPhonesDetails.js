'use strict';

const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, './phones');

function getPhoneDetails() {
  return fs.readdirSync(dir)
    .filter(name => path.extname(name) === '.json')
    .map(name => require(path.join(dir, name))).map(detail => {
      return {
        ...detail,
        description: JSON.stringify(detail.description),
      };
    });
}

module.exports = {
  getPhoneDetails,
};
