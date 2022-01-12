const axios = require('axios').default
const chalk = require('chalk');

const testfeed=()=>{
    axios.get("http://localhost:9000/feed").then((r) => {
        console.log(r.data)
        if(Array.isArray(r.data.post)){
            console.log(chalk.greenBright('Test passed')); 
        }
        else{
            console.log(chalk.red('Test failed')); 
        }
      }).catch(e=>console.log(e));
}

testfeed();
