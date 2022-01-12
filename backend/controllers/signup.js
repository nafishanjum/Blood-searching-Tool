const db = require("../util/db");
const short = require('shortid')
exports.signUp = (req, res, next) => {
  res.render("login", {
    pageTitle: "444"
  });
};

exports.registerUser = (req, res, next) => {
  console.log("registerUser");
  const id = short.generate();
  const n = req.body.name;
  const e = req.body.email;
  const p = req.body.password;
  const phone = req.body.phone;
  const u = 'user'
  console.log(n);
  try {
    db.execute("insert into userinfo (id,name,email,password,phone) values(?,?,?,?,?)", [id,n,e,p,phone])
      .then(r => {
          res.json({res:'success'})
      })
      .catch(err => {
        console.log(err);
      
        res.json({
          erro:"somethin is wrong"
      })
      });
      db.execute("insert into login (id,name,email,password,role) values (?,?,?,?,?)",[id,n,e,p,u]).then(
        res.json({d:'success'})
     ).catch(e=>{console.log(e)})
  } catch(e){
      
  }
};


exports.findByid = (req, res, next) => {
  const id = req.body.id;
  console.log("i am " + id);
  db.execute("select * from userinfo where id=?", [id])
    .then(r => {
      res.json({
        userDetails: r[0]
      });
    })
    .catch(e => {
      console.log(e);
    });
};
exports.saveToken = (req, res, next) => {
  console.log(req.token);
  const donar = req.body.donarId;
  const token = req.body.token;
  db.execute("insert into notification (donar_id,token) values (?,?)", [
    donar,
    token
  ]).then(r => {
    res.json({
      result: true
    });
  });
};

exports.logIn = (req, res, next) => {
  const e = req.body.email;
};
