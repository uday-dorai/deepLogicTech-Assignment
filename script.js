const outerBox = document.querySelector('.outerBox2');
getNews();


async function getNews(e) {
    await fetch('http://localhost:8000/getTimeNews', {
        method: 'GET'
    }).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            console.log('error');
        }
    })
        .then(news => {
            displayNews(news)
        })
}

async function displayNews(news){
    for(let i=0;i<= 4;i++){
        let newsDiv = document.createElement('div')
        newsDiv.className='innerBox'
        let p1 = document.createElement('p');
        let a1 = document.createElement('a');
        p1.appendChild(document.createTextNode(i+1));
        a1.appendChild(document.createTextNode(news[i].title));
        a1.href=news[i].link;
        newsDiv.appendChild(p1)
        newsDiv.appendChild(a1)
        outerBox.appendChild(newsDiv)

    }
}