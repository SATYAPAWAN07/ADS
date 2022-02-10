const { Module } = require("module");

const config = {

	app: {

	host: "127.0.0.1",

	port: 5500

	},

	routeURLS: {

	login_audit: "http:/localhost:8080/",

	// data_retrival: "http://localhost:5000/"
	}
};

module.exports = config;