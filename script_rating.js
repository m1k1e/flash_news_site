let reviews = document.querySelectorAll('.review');
let error = document.querySelector('.error');
let button = document.querySelector('.submit-button');


for(let review of reviews){
	review.onchange = function() {
	
		if(review.dataset.evaluation !== 'good') {
			button.disabled = true;
			error.classList.add('shown');
		}else {
			button.disabled = false;
			error.classList.remove('shown');
		}
	};
}