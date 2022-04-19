function getData(key) {
    const dataNews = document.getElementById(`dataNews`)
    dataNews.innerHTML = message(`Loading...`)

    const data = fetch(`https://newsapi.org/v2/everything?apiKey=b5305618e2b14b5fad3fd5edc494de20&q= + ${key}`)
    data
        .then(response => response.json())
        .then(response => {
            let news = response.articles;
            dataNews.innerHTML = showCards(news);
        })
        .catch(err => {
            dataNews.innerHTML = message(err.message)
        })
        .finally(() => {})
};

window.onload = () => {
    const inputKeyword = document.querySelector(`.input-keyword`)
    inputKeyword.onkeyup = () => {
        getData(inputKeyword.value);
    }
};

getData();

function showCards(news) {
    let cards = ``;
    cards += `<div class="row">`
    news.forEach(n => {
        cards += `  <div class="col-md-4 my-3">
                        <div class ='card' style ='width:18rem'>
                            <div class="card">
                            <img src="${n.urlToImage}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${n.title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${n.publishedAt}</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">${n.source.name}</h6>
                                    <a href="${n.url}" class="btn btn-primary">Show details</a>
                                </div>
                            </div>
                        </div>
                    </div>`
    })
    cards += `</div>`
    return cards;
};

function message(msg) {
    return `<div class ='alert alert-secondary text-center'>${msg}</div>`;
}