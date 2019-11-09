// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//

//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')

  .then((results) => {
      const bootstrap = results.data.articles.bootstrap;
      const javascript = results.data.articles.javascript;
      const jquery = results.data.articles.jquery;
      const node = results.data.articles.node;
      const technology = results.data.articles.technology;
      bootstrap.forEach((obj) => {
          const create = CreateArticles(obj);
          cardsContainer.appendChild(create);
  });
  javascript.forEach((obj) => {
    const create = CreateArticles(obj);
    cardsContainer.appendChild(create);
});
jquery.forEach((obj) => {
    const create = CreateArticles(obj);
    cardsContainer.appendChild(create);
});
node.forEach((obj) => {
    const create = CreateArticles(obj);
    cardsContainer.appendChild(create);
});
technology.forEach((obj) => {
    const create = CreateArticles(obj);
    cardsContainer.appendChild(create);
});

});

function CreateArticles(obj) {
    const card = document.createElement('div');
    const hLine = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const by = document.createElement('span');

    hLine.textContent = obj.headline;
    img.src = obj.authorPhoto;
    by.textContent = obj.authorName;

    card.appendChild(hLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(by);

    card.classList.add('card');
    hLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    return card;
}