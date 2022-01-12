const axios = require('axios').default
const chalk = require('chalk');


const testLogin=(email , password)=>{
    axios({
        url: "http://localhost:9000/check/",
        method: "post",
        data: {
          // sending user email and password
          email: email,
          password: password,
        },
      }).then(result=> {
          if(result.data.user[0].email === email){
            console.log(chalk.greenBright('Test passed')); 
          }
          else{
            console.log(chalk.red('Test failed')); 
          }
      }).catch(e=>{
          if(e){
            console.log(chalk.red('Test failed')); 
          }
      })
}

testLogin("sssss@gmail.com" ,"asd");