'use strict';

const { getDetails } = require('../utils/groupDetails');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('details', getDetails(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('details', null, {});
  },
};
