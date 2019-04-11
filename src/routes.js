'use strict';

const Home = require('./../controllers/home');

module.exports = [
  	{
		method: 'GET',
	  	path: '/',
	  	handler: Home,
	  	config: {
	    	description: 'Gets all the notes available'
	  	}
	}
];