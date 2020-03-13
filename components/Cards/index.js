// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

/*
  .card-container -- cards need to go here
  document.querySelector('.card-container').append(cardComponent)
*/

function formatArticle(article) {
  return {
    headline: article.headline,
    authorPhoto: article.authorPhoto,
    authorName: `By ${article.authorName}`
  }
}

function getData(cb) {
  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
      cb(res.data)
    })
    .catch(error => console.error(error))
}

function formatArticles(data) {
  // transform all articles into 1 array
  const articles = Object.values(data.articles)
    .flat()
    .map(article => formatArticle(article))
  return articles
}

function cardComponent(article) {
  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imageContainer = document.createElement('div')
  const image = document.createElement('img')
  const authorsNameSpan = document.createElement('span')

  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imageContainer.classList.add('img-container')

  headline.innerText = article.headline
  image.setAttribute('src', article.authorPhoto)
  authorsNameSpan.innerText = article.authorName

  card.append(headline)
  card.append(author)
  author.append(imageContainer)
  imageContainer.append(image)
  author.append(authorsNameSpan)

  return card
}

getData((data) => {
  formatArticles(data).forEach(article => document.querySelector('.cards-container').append(cardComponent(article)))
})