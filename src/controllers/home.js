'use strict';

const Models = require('../models/');

module.exports = (request, reply) => {
  Models.User
    .findAll({
      order: [['id', 'DESC']]
    })
    .then((result) => {
      reply({
        data: {
          users: result
        },
        page: 'Home—Notes Board',
        description: 'Welcome to crazy town'
      });
    });
};