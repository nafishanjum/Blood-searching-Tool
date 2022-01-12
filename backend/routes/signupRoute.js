const express = require('express');
const router = express.Router();
const webpush=require('web-push');
const dotenv = require('dotenv')
const signupController = require('../controllers/signup');
const donar = require('../controllers/donarController')
router.get('/signup' ,signupController.signUp);
router.post('/register',signupController.registerUser);
router.post('/findBy',signupController.findByid);
router.post('/saveToken',signupController.saveToken)
router.post('/registerDonar',donar.registerDonar);
router.post('/validEmail',donar.validEmail)
router.post('/check',donar.checkUser)

router.get('/retro/:r',donar.checkUserRole)



























//webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

//let subscription
//let pushIntervalID
//// Subscribe Route
//router.post('/notifications/subscribe', (req, res) => {
//  const subscription = req.body
//
//  console.log(JSON.stringify(subscription))
//
//  const payload = JSON.stringify({//
////    title: 'ami madarchod',
 //   body: {body:'dskafpsdakf',contact:'sdfasd'},
   
  //  data:'https://www.w3schools.com/js/js_json_stringify.asp'
      
    
    
//  })
//   
//     webpush.sendNotification(subscription, payload)
//    .then(result =>{} )
//    .catch()
//   
//    
 //
//  
//
//  res.status(200).json({'success': true})
//});


module.exports=router;