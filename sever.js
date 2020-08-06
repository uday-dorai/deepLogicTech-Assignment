const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const connection = require('./database_connection');
const functions = require('./functions');


connection.testing_connection();


// post news
app.post('/postTimeNews', async (req, res) => {
    const { body } = req;
    const news = {
        title: body.title,
        link: body.link,

    };
    // console.log(news)
    if (news.title === "" || news.link === "" || news.title === undefined || news.link === undefined) {
        res.sendStatus(400);
    } else {
        functions.addNews(news).then(() => {
            res.status(201).send(`user successfully added`)
        }).catch((error) => {
            res.sendStatus(404);
        })
    }

}

);


// get 5 news feeds
app.get('/getTimeNews', async (req, res) => {

    functions.getNews().then((details) => {
        console.log(details.length)
        let fifthLastNews = details.length-5
        const result = details.slice(fifthLastNews, details.length)
        res.send(result)
    }).catch((error) => {
        res.sendStatus(404);
    })
}

);


const port = process.env.PORT || 8000;
const server = app.listen(port, function () {
    console.log(`listening to the port ${port}`);
});