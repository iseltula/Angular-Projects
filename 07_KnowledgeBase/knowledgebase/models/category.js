var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String
  }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

//Get All Categorys
module.exports.getCategories = function(callback){
  Category.find(callback);
}

//Get Categorys by Id
module.exports.getCategoriesById = function(id, callback){
  Category.findById(id, callback);
}

//Get Category articles
module.exports.getArticlesByCategory = function(category, callback){
  var query ={
    category: category
  };
  Category.find(query, callback);
}
//Get Category articles
module.exports.createCategory = function(newCategory, callback){
  newCategory.save(callback);
}

//Update Article
module.exports.updateArticle = function(id, data , callback){
  var title     = data.title;
  var body      = data.body;
  var category  = data.category;

  var query ={_id:id};

  Article.findById(id, function(err, article){
    if(!article){
      return next(new Error('Could not load article'));
    } else{
      //updateArticle
      article.title     = title;
      article.body      = body;
      article.category  = category;

      article.save(callback);
    }
  });
}

//Remove Article
module.exports.removeArticle = function(id, callback){
  Article.find({_id:id}).remove(callback);
}
