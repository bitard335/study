let button = document.querySelector('.show-all-button');
let text = button.querySelector('.show-all-button__text')
let buttonIcon = button.querySelector('.show-all-button__icon');
let categories = document.querySelectorAll('.services__category');
let isShowed = false;

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!isShowed){
    isShowed = true;
    text.textContent = 'Скрыть';
    buttonIcon.style.cssText = 'transform: rotate(180deg);';
    for (let i = 0; i < categories.length; i++){
      categories[i].style.display = 'block';
    } 
  } else {
    isShowed =  false;
    text.textContent = 'Показать все';
    buttonIcon.style.cssText = 'transform: rotate(0deg);';
    for (let i = 0; i < categories.length; i++){
      categories[i].style.display = '';
    }
  }
})