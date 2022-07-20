module.exports = (sequelize, _DataTypes) => {
  const postCategoryModel = sequelize.define('PostCategory', {
   
  },
  {
    timestamps: false, 
    tableName: 'PostCategories',
  });

  postCategoryModel.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      { 
        through: postCategoryModel, 
        as: 'categories', 
        foreignKey: 'postId', 
        otherKey: 'categoryId'
      });

    models.Category.belongsToMany(models.BlogPost,
      { 
        through: postCategoryModel, 
        as: 'posts', 
        foreignKey: 'categoryId', 
        otherKey: 'postId'
      });
  };

  return postCategoryModel;
};