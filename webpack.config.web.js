const config = require("webpack-config-narazaka-ts-js").web;

config.entry.shiori_transaction = "./src/lib/shiori_transaction.ts";
config.output.library = "shioriTransaction";

module.exports = config;
