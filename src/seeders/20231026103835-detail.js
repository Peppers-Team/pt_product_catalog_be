'use strict';

const { getDetails } = require("../utils/groupDetails");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Details', getDetails(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Details', null, {});
  }
};
