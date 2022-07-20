module.exports = (sequelize, DataTypes) => {
  const userModel = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false, 
    tableName: 'Users',
  });

  userModel.associate = (models) => {
    userModel.hasMany(models.BlogPost,
      { foreignKey: 'id', as: 'blogPosts' });
  };

  return userModel;
};