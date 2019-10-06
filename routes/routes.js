const {Router} = require('express');
const router = Router();

const getWeather = require('../lib/getWeather');

router.get('/', async(req, res) => {
res.render('index');
});

router.post('/', async(req,res) => {
    let location = req.body.location;
    console.log(location);

    let data = await getWeather(location);
    console.log(data);

    let temp = data.list[0].main.temp;
    let humidity = data.list[0].main.humidity;

    res.render('index', {data: {temp,humidity}});
});

module.exports = router;