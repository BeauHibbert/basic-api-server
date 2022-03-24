'use strict';

const { sequelize, ClothesModel, FoodModel } = require('./src/models');

sequelize.sync()
  .then(() => {
    console.log('Success!');
    ClothesModel.create({type: 'pants', color: 1, size: 'small'});
  })
  .catch((err) => {
    console.error(err);
  });