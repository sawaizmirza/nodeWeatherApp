const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const routes = require('./routes/routes');

// const getWeather = require('./lib/getWeather');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes);

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', async(req, res) => {
//     let data = await getWeather();
//     let name = data.list[0].name;
//     let wind = data.list[0].wind.deg;
//     let clouds = data.list[0].clouds.all;
//     console.log(data);
// console.log(name);
// console.log(wind);
// console.log(clouds);
res.render('index');
});

app.post('/', async(req,res) => {
    let location = req.body.location;
    console.log(location);

    let data = await getWeather(location);

    let temp = data.list[0].main.temp;
    let humidity = data.list[0].main.humidity;

    res.render('index', {data: {temp,humidity}});
});

app.listen(3000, () => {
    console.log('server listening on port 3000');
});