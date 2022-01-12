const donor = require('../models/Donor');
const { getMaxListeners } = require('../util/db');
const db = require('../util/db');
const chalk = require('chalk');

class DonorTest {

registerDonor(id,n,e,phone,p,t,blood_group ){
    const result =donor.registerDonar(id,n,e,phone,p,t,blood_group)
    result.then(r=>{
        if(r!==null){
            console.log(chalk.greenBright("test pass"));
        }
        else {
            console.log(chalk.redBright("test fail"));
        }
    })
}


validEmailTest(emails){
   const  testResult =[];
    emails.map((i,element) => {
        console.log(i)
        const r= donor.validEmail(i.email)
        
         r.then(result=>{
              if(result[0].length>0 ){
                console.log(chalk.blue('retruned a array of result'))
                console.log(chalk.greenBright("passed"))      
            }
              else{
                console.log(chalk.blue('retruned a array of result'))  
                console.log("fail")      
              }
          })
       }).catch(e=>{
           console.log(chalk.red(e))
       })
    }
}



var Donor = new DonorTest()
//test case for validEmail
const emails = [
    {
    "email" : "ar@gmail.com",
    "exits" : true
    }
    ,
    {
    "email" : "shahriar@gmail.com",
    "exits" : true
    },
    {
        "email" : "s@gmail.com",
        "exits" : false
    }
]

Donor.validEmailTest(emails)

Donor.registerDonor('sd',"shudip", 's@gmail.com','01457582','password','token','O+')