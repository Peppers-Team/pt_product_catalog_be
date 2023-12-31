'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('details', {
			id: {
				allowNull: false,
				autoIncrement: false,
				primaryKey: true,
				type: Sequelize.STRING
			},
			namespaceId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING,
			},
			capacityAvailable: {
				type: Sequelize.ARRAY(Sequelize.STRING),
			},
			capacity: {
				type: Sequelize.STRING,
			},
			priceRegular: {
				type: Sequelize.INTEGER,
			},
			priceDiscount: {
				type: Sequelize.INTEGER,
			},
			colorsAvailable: {
				type: Sequelize.ARRAY(Sequelize.STRING),
			},
			color: {
				type: Sequelize.STRING,
			},
			images: {
				type: Sequelize.ARRAY(Sequelize.STRING),
			},
			description: {
				type: Sequelize.JSONB,
			},
			screen: {
				type: Sequelize.STRING,
			},
			resolution: {
				type: Sequelize.STRING,
			},
			processor: {
				type: Sequelize.STRING,
			},
			ram: {
				type: Sequelize.STRING,
			},
			camera: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			zoom: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			cell: {
				type: Sequelize.ARRAY(Sequelize.STRING),
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('details');
	}
};