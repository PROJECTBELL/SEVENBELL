module.exports = (server) => {
  const postController = require('../controllers/voteController.js');

  server.route('/vote')
  .get(postController.list_all_post)
  .post(postController.create_a_post);

 server.route('/vote/:vote_id') // req.params.post_id
 .get(postController.get_votes);

 
}