const db = require('../util/db');


class BloodBank {
    constructor(id , name , email , location, latitude , longtitude){
        this.id =id 
        this.email = email
        this.location = locaition
        this.latitude = latitude
        this.longtitude = longtitude
    }

    static getBlood(b , cb){
        const blood = b;
        db.execute("select distinct name,location,latitude,longitude from blood_bag b inner join blood_bank b1 on b.blood_bank_id=b1.blood_bank_id where blood_group=?;",[blood]).then(
            r=>{
             // console.log(r)  
             return cb(r) 
            }
        ).catch(e=>{})
    }
}

module.exports = BloodBank