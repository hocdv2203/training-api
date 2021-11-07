'use strict';
module.exports = function(app) {
  var jobs = require('../controllers/jobController');

  // todoList Routes
  app.route('/jobs')
    .get(jobs.list_all_jobs)
    .post(jobs.create_a_job);


  app.route('/jobs/:jobId')
    .get(jobs.read_a_job)
    .put(jobs.update_a_job)
    .delete(jobs.delete_a_job);
};