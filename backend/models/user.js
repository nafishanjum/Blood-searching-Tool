const db = require('../util/db');

class user {

    constructor(id , name , email , password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    

    getById(){
        return this.name
    }
    getUser(){
     return `user id is ${this.id} user name ${this.name} pass ${this.password}`   
    }
    
    static findUser =(email) =>{
         db.query()
    }
}
module.exports = user;