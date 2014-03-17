var interact = require('../..');

var app = interact(8000);

// settings

app.set('views', __dirname);
app.set('view engine', 'jade');


// middleware

app.use(interact.logger('dev'));

//create interact room]

app.room('test', 'view');

//it seems it doesn't work
//app.listen(8000);