"use strict";

const data = require("./data.json");

module.exports = async () => {
	console.log("> Fetching data…");

	return {
		data,
	};
};
