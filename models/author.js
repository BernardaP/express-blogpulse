'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  author.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'author',
  });

  author.associate = function(models) {
  // associations can be defined here
  models.author.hasMany(models.article)
  }

  author.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
  }
  
  return author;
};
