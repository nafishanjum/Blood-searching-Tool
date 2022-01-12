const { getFeed } = require("../models/Newsfeed");
const chalk = require('chalk');
const util = require('util');

class NewsfeedTest {


testFeed() {
    getFeed(function(result){
        console.log(chalk.blue('checking the result is array'));
    if(Array.isArray(result)){
       console.log(chalk.greenBright('Test passed')); 
    }
    else{
        console.log(chalk.red('Test passed')); 

    }
    })
}

}

const test = new NewsfeedTest();
test.testFeed();

