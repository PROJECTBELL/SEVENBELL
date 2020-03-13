const Vote = require('../models/voteModel');


exports.get_video_like = (req, res) => {
    Vote.find({ post_id: req.params.post_id, vote: true }, (error, vote) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur from like" })
        } else {
            res.status(200);
            res.json(vote)
        }
    })
}
exports.get_video_dislike = (req, res) => {
    Vote.find({ post_id: req.params.post_id, vote: false }, (error, vote) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur from dislike" })
        } else {
            res.status(200);
            res.json(vote)
        }
    })
}