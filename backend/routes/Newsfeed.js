const express = require('express');
const router = express.Router();
const multer = require('multer')
const fileType = require('file-type')
const NewsfeedController = require('../controllers/Newsfeed')
const path = require('path')
router.get('/feed' , NewsfeedController.getFeed)
router.post('/createPost' , NewsfeedController.createPost)

var storage = multer.diskStorage({
    destination:function(req,res , cb){
        cb(null, 'images')
    },
    filename:function(req , file , cb ) {
        cb(null ,file.originalname)
    }
})

router.post('/upload', function(req, res, next) {
    
    const upload = multer({ storage: storage }).single('file')
        upload(req,res, async(err,result)=>{
            console.log(req.body) 
           
        if(err){
            console.log(err)
        }
        else{
           console.log(req.file.originalname)
           return res.send({url:`http://localhost:9000/images/${req.file.originalname}`})
           next()
        }
       })   
      
    
    });
    router.get('/images/:imagename', (req, res) => {
        let postId = req.params.postId
        let imagename = req.params.imagename
        let updir = path.join(__dirname,'../')
        console.log(updir)
        let imagepath = `${updir}/images/${imagename}`
        let i = imagepath.replace("/")
        console.log(imagepath)
        //let image = fs.readFileSync(imagepath)
       // let mime = fileType.fromFile(image)
       // mime.then((m)=>{
       //     res.writeHead(200, {'Content-Type': m })
       // }).catch(e=>console.log(e)) 
      
      res.sendFile(imagepath)
      })
module.exports = router ;
