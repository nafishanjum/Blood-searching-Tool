
const db = require('../util/db');
const short = require('shortid')
const donor = require('../models/Donor');



exports.registerDonar=(req,res,next)=>{
    const id = short.generate();
    console.log(id)
    const n = req.body.name;
    const e = req.body.email;
    const p = req.body.password;
    const t = req.body.token;
    const phone =req.body.phone;
    const blood_group= req.body.bloodGroup;
    const d ='donor'
   console.log({n,e,p,t,phone,blood_group})
   const check = checkUserExit(e)
   
   
  
    db.execute("insert into donor (donor_id,name,email,phone,password,notification_token,blood_group) values(?,?,?,?,?,?,?)",
    [id,n,e,phone,p,t,blood_group]).then(r=>{
       res.json('success')
      console.log('done');
  }).catch(err=>{
      console.log(err)
      res.json({error:'something went wrong'})
  })

   db.execute("insert into login (id,email,password,role) values (?,?,?,?)",[id,e,p,d]).then(
    res.json({d:'success'})
   ).catch(e=>{console.log(e)})
   

}

exports.validEmail=(req,res,next) =>{
    const e =req.body.email
   const result = validEmail(e)
    result.then(
        r=>{
            if(r[0].length>0) {
               
                
                res.json({
                    error:"email already used"
                })
                
            }else{
               
               res.json({error:""})
            }
        }
    )
}


exports.checkUser=(req,res,next)=>{
    const e =req.body.email
    const p = req.body.password
    db.execute("select * from login where email=? and password=?",[e,p])
    .then(
        r=>{
          res.json({
              
              user:r[0]})
        }
    )
}
exports.checkUserRole=(req,res,next)=>{
    const role = req.params.r;
    console.log(role)
    const e =req.body.email
    db.execute("select * from login where role=?",[role])
    .then(
        r=>{
          res.json(
              r[0])
        }
    ).catch(e=> console.log("safsda",e))
}
