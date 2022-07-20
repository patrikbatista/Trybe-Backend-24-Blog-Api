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
        through: 'PostCategory', 
        as: 'categories', 
        foreignKey: 'postId', 
        otherKey: 'categoryId'
      });

    models.Category.belongsToMany(models.BlogPost,
      { 
        through: 'PostCategory', 
        as: 'posts', 
        foreignKey: 'categoryId', 
        otherKey: 'postId'
      });
  };

  return postCategoryModel;
};