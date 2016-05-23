var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: String,
    index: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var Article = module.exports = mongoose.model('Article', articleSchema);

//Get All Articles
module.exports.getArticles = function(callback){
  Article.find(callback);
}

//Get Articles by Id
module.exports.getArticlesById = function(id, callback){
  Article.findById(id, callback);
}

//Get Category articles
module.exports.getArticlesByCategory = function(category, callback){
  var query ={
    category: category
  };
  Article.find(query, callback);
}

//Add Article
module.exports.createArticle = function(newArticle, callback){
  newArticle.save(callback);
}
