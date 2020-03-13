module.exports = (server) => {
    const voteController = require('../controllers/voteController');

    // server.route('/posts/:post_id/vote') // req.params.post_id
    //     .get(commentController.list_all_post_comments)
    //     .post(commentController.create_a_comment);


    server.route('/posts/:post_id/like') // req.params.post_id
        .get(voteController.get_video_like)

    server.route('/posts/:post_id/dislike') // req.params.post_id
        .get(voteController.get_video_dislike)
}