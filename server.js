const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

var HTTP_PORT = process.env.PORT || 8080;

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }

app.use('/static', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res){
    res.render('index', {
        layout: false
    });
});

app.get('/listing.html', function(req,res){
    res.render('listing', {
        layout: false
    });
});

app.get('/register.html', function(req,res){
    res.render('register', {
        layout: false
    });
});


app.post("/dashboard", (req, res) => {
    function check(){
        if(req.body.firstname){
            return true;
        }else{
            return false;
        }
    };
    res.render('dashboard', {
        check: check(),
        layout: false,
        name: req.body.firstname + " " + req.body.lastname,
        email: req.body.email,
        psw: req.body.psw,
        mon: req.body.mon,
        day: req.body.day,
        year: req.body.year
    });       
});

app.listen(HTTP_PORT, onHttpStart);