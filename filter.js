let articles = document.querySelectorAll('.news-block');

for (let article of articles) { 
  if(article.dataset.category === 'cats'){
    article.classList.add('highlight');
	}  
}