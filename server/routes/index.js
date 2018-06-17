var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api', require('./api'));

router.get('*',function(req,res){
	res.sendFile(path.resolve('./', 'dist', 'index.html'));
});

module.exports = router;
