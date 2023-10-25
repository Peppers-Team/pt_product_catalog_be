'use strict';

const { getPhoneDetails } = require('./data/details/getPhonesDetails');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PhoneDetails',
      getPhoneDetails().map(value => ({
        ...value,
        description: JSON.parse(value.description),
      })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PhoneDetails', null, {});
  },
};
