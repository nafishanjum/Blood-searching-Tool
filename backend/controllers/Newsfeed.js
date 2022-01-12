//controller newsfeed
const db = require('../util/db');
const short = require('shortid');
const shortid = require('shortid');
const newsfeed = require('../models/Newsfeed')
exports.getFeed = (req, res, next) => {
  //  const id = req.body.userid;
  try {
    newsfeed.getFeed(function(result){
      res.json({
        post:result
      });
    })
  } catch (e) {}
};

exports.createPost =(req, res,next)=>{
  const post_id = shortid.generate()
  const user_id = req.body.user_id
  const user_name =req.body.user_name
  const Blood_tag = req.body.Blood_tag
  const Header = req.body.Header
  const description = req.body.description
  const url = req.body.url
  console.log(post_id,user_id,user_name,Blood_tag,Header,description)
  try {
   newsfeed.createPost(post_id,user_id,user_name,Blood_tag,Header,description,url , function(d){
     res.json(d)
   })
  }
  catch(e){
   console.log(e)
  }
}