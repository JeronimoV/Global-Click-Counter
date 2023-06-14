const path = require("path");
const fs = require("fs");
const { Sequelize } = require("sequelize");
require("dotenv").config();
const { USER, PASSWORD, HOST, PORT } = process.env;

const sequelize = new Sequelize(
  `postgresql://postgres:jSwBNeJcAG3i4MwsIUu7@containers-us-west-190.railway.app:5800/railway`
);

const modelList = [];
const pathModelsFiles = [];
const requires = [];

const pathModels = path.join(__dirname, "models");
const models = fs.readdirSync(pathModels);
models.forEach((value) => modelList.push(value));
modelList.forEach((value) =>
  pathModelsFiles.push(path.join(__dirname, "/models", value))
);
pathModelsFiles.forEach((value) => requires.push(require(value)));
requires.forEach((value) => value(sequelize));

module.exports = {
  conn: sequelize,
  ...sequelize.models,
};
