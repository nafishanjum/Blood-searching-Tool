const express = require('express');
const router = express.Router();

const bank = require('../controllers/BloodBankController')
router.post('/getBlood',bank.getBlood)

module.exports= router;