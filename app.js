let express = require('express');
let bodyParser = require('body-parser');
let ejs=require('ejs');

let app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');




let db=[];



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));


// parse application/json
app.use(bodyParser.json())


app.get('/', function (rqe, res) {
    // res.sendFile(__dirname +'/public' +'/index.html');
    res.render('index.html',{userName:'Tim',ar:db});
});

app.post('/data',function(req,res){
    console.log('I got a post request!!!');
    console.log(req.body);
    db.push(req.body);
    console.log("I have "+ db.length+"  records");
    
    

    res.send('Thank you!!!');
});



app.listen(8080);