const db = require('../util/db');
const colors = require('colors');
class  Donor {


    static registerDonar(id,n,e,phone,p,t,blood_group ) {
       const role = "donor"
        db.execute("insert into donor (donor_id,name,email,phone,password,notification_token,blood_group) values(?,?,?,?,?,?,?)",
        [id,n,e,phone,p,t,blood_group]).then(r=>{
           //res.json('success')
           console.log(colors.bgGreen.black("done"));
      }).catch(err=>{
          console.log(err)
          res.json({error:'something went wrong'})
      })
    
   return  db.execute("insert into login (id,email,password,role) values (?,?,?,?)",[id,e,p,role]) }

    static validEmail(e) {
    return db.execute("select * from login where email=?",[e])
    }
   
}

module.exports = Donor;
