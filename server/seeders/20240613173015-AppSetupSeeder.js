'use strict';

const users = require('./users.json');
const comments = require('./comments.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', users, {});
    await queryInterface.bulkInsert('comments', comments, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {});
    await queryInterface.bulkDelete('users', null, {});
  },
};
