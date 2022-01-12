
const chalk = require('chalk');
const util = require('util');
const { getBlood } = require("../models/BloodBank");

class BloodBanktest {


testgetBlood(b) {
    getBlood(b,function(result){
        console.log(chalk.blue('#1checking the result is array'));
    if(Array.isArray(result)){
       console.log(chalk.greenBright('Test passed')); 
    }
    else{
        console.log(chalk.red('Test failed')); 

    }
    if(result.length>0){
        console.log(chalk.greenBright('Test passed')); 
    }
    else{
        console.log(chalk.red('Test failed')); 

    }
    })
}

}

const test = new BloodBanktest();
test.testgetBlood('o+');
test.testgetBlood('Asfsdaf+');
test.testgetBlood('B+');



