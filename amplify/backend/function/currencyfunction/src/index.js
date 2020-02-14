/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var storageCurrencytableName = process.env.STORAGE_CURRENCYTABLE_NAME
var storageCurrencytableArn = process.env.STORAGE_CURRENCYTABLE_ARN

Amplify Params - DO NOT EDIT */
const getCoins = require("./getCoins");
const createCoin = require("./createCoin");

exports.handler = function(event, _, callback) {
  if (event.typeName === "Mutation") {
    createCoin(event, callback);
  }
  if (event.typeName === "Query") {
    getCoins(callback);
  }
};
