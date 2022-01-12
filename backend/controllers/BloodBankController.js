const db = require('../util/db');
const blood_bank = require('../models/BloodBank')
exports.getBlood=(req,res,next)=>{
    const blood =req.body.blood_group;

  blood_bank.getBlood(blood , function(re){
    res.json({result:re[0]})
   })
    
  //  db.execute("select distinct name,location,latitude,longitude from blood_bag b inner join blood_bank b1 on b.blood_bank_id=b1.blood_bank_id where blood_group=?;",[blood]).then(
 //       r=>{
 //        res.json({result:r[0]})
  //      }
  //  ).catch(e=>{})
}