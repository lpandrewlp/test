var express = require('express'),
    app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('frontend/dist'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey'});
});

app.listen(3000);
