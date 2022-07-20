module.exports = (sequelize, DataTypes) => {
  const blogPostModel = sequelize.define('BlogPost', {

    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    published: { type: DataTypes.DATE, allowNull: false},
    updated: { type: DataTypes.DATE, allowNull: false}

  },
  {
    createdAt: 'published',
    updatedAt: 'updated',
    timestamps: true, 
    tableName: 'BlogPosts', 
  });

  blogPostModel.associate = (models) => {
    models.BlogPost.belongsTo(models.User,
      { foreignKey: 'id', as: 'user' });
  };

  return blogPostModel;
};