var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/datos', function(req,res,next){
  var datos = [
                {"Nombre":"Daniela"},
                {"Apellido":"Gonzalez"},
                {"Edad": 20}
              ];
  res.json(datos);
  });

var usersRegistered = [];

  router.get('/mensaje', function(req,res,next){
  res.render('mensaje',{"txtMensaje":"","msg":""});
});

router.post('/mensaje',function(req,res,next){
  console.log(req.body);
    usersRegistered.push(req.body.txtMensaje);
    var msgs = usersRegistered;
    var rtObject = {};
    rtObject.txtMensaje = req.body.txtMensaje;
    rtObject.msg= msgs;
  res.render('mensaje', rtObject);
});

module.exports = router;
