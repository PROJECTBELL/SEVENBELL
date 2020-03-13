
const vote = require('../models/voteModel');

exports.voteStatus = (req, res) => {
    Comment.find({post_id: req.params}, (error, vote) => {
      if(error){
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."})
      }
      else{
        res.status(200);
        res.json(vote)
      }
    })
  }
  

exports.vote_up = (req, res) => {
    // Post.findOne({_id : req.params.comment_id}, (error, posts) => {
    vote.findById(req.params.Vote, (error, vote) => {
      if(error){
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."})
      }
      else{
        res.status(200);
        res.json(vote)
      }
    })
  }
  
  
  exports.vote_down = (req, res) => {
    let new_vote_up = new votedown(req.body);
    new_comment.post_id = req.params.post_id;

    Post.find({}, (error, vote) => {
      if(error){
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."})
      }
      else{
        res.status(200);
        res.json(vote)
      }
    })
  }