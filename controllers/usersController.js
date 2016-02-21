var methodOverride = require('method-override');


function addNewProject(req, res) {  
  res.render('new-project.ejs', { title: 'Add New Project' }); // { message: req.flash('errorMessage') });
};


module.exports = {
  addNewProject: addNewProject
}
