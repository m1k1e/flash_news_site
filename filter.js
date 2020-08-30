let articles = document.querySelectorAll('.news-block');
let filter = document.querySelector('.filter');

for (let article of articles) {
  if (article.dataset.category === 'cats') {
    article.classList.add('highlight');
  }
}

filter.onchange = function() {
    console.log(filter.value);
  };
