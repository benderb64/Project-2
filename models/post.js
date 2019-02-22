module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        len: [1] }
      },
    firstName : {
      type : DataTypes.STRING,
      allowNull : false, 
      validate : {
        len: [1] }
      },
    lastName: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        len: [1] }
      },
    nature: DataTypes.INTEGER,
    cost : DataTypes.INTEGER,
    history : DataTypes.INTEGER,
    adventure : DataTypes.INTEGER,
    urban : DataTypes.INTEGER,
    activity : DataTypes.INTEGER,
    climate : DataTypes.INTEGER,
    access : DataTypes.INTEGER,
    stay : DataTypes.INTEGER
  });
  return User;
};

module.exports = function(sequelize, DataTypes) {
  var Locations = sequelize.define("Location", {
    locationCity : {
      type : DataTypes.STRING,
      allowNull : false, 
      validate : {
        len: [1] }
      },
    locationCountry: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        len: [1] }
      },
    locationImage: DataTypes.STRING,  
    locationDesc: DataTypes.String,
    nature: DataTypes.INTEGER,
    cost : DataTypes.INTEGER,
    history : DataTypes.INTEGER,
    adventure : DataTypes.INTEGER,
    urban : DataTypes.INTEGER,
    activity : DataTypes.INTEGER,
    climate : DataTypes.INTEGER,
    access : DataTypes.INTEGER,
    stay : DataTypes.INTEGER
  });
  return Locations;
};

module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        len: [1] }
      },
      body: {
        type : DataTypes.TEXT,
        allowNull : false,
        validate: {
          len: [1] }
        },
      });
      return Comments;
    };
