module.exports = (sequelize, DataTypes) => {
  const postCategoryModel = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true },
  },
  {
    timestamps: false, 
    tableName: 'PostCategories',
  });

  postCategoryModel.associate = (models) => {
    postCategoryModel.belongsToMany(models.Category,
      { 
        through: postCategoryModel, 
        as: 'categories', 
        foreignKey: 'postId', 
        otherKey: 'categoryId'
      });

      postCategoryModel.belongsToMany(models.BlogPost,
      { 
        through: postCategoryModel, 
        as: 'posts', 
        foreignKey: 'categoryId', 
        otherKey: 'postId'
      });
  };

  return postCategoryModel;
};