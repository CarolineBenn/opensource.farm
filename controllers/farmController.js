var methodOverride = require('method-override');


function home(req, res) {  
  res.render('index.ejs', { title: 'Home' }); // { message: req.flash('errorMessage') });
};

function lifeOnTheFarm(req, res) {
  res.render('life-on-the-farm.ejs', { title: 'Life on the Farm' });
}

function getAllProjects(req, res){
  res.render('projects.ejs', { title: 'Projects' });
}


module.exports = {
  home: home,
  lifeOnTheFarm: lifeOnTheFarm,
  getAllProjects: getAllProjects
}
