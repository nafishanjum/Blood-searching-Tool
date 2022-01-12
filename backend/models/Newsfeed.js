const db = require('../util/db')


class Newsfeed {
    


    static getFeed(cb){
        try {
            db.execute("select * from post").then((result) => {
              cb(result[0])
            });
          } catch (e) {}
    }


    static createPost(post_id,user_id,user_name,Blood_tag,Header,description,url , cb) {
      
      
      db.execute("insert into post (post_id,user_id,user_name,Blood_tag,Header,description,url) values(?,?,?,?,?,?,?)",
      [post_id,user_id,user_name,Blood_tag,Header,description,url])
      .then(()=>{
       cb({d:'success'})
      }).catch(e=>{
        console.log(e)
      })
    }
}

module.exports = Newsfeed