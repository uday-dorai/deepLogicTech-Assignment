const { sqlQueries } = require('./database_connection');


// query for add news
function addNews(news) {
    const sql = `Insert into news (title,link) values('${news.title}','${news.link}');`;
    return sqlQueries(sql);
}

// query for get news
function getNews(news) {
    const sql = `select title,link from news`;
    return sqlQueries(sql);
}


module.exports = {
    addNews,
    getNews
};