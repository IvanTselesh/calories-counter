const div = document.querySelector('.app-sex-wrap');
const maleBtn = document.querySelector('.male');
const femaleBtn = document.querySelector('.female');
const input = document.querySelectorAll('.features-item');
const countBtn = document.querySelector('.count');
const removeBtn = document.querySelector('.delete');
const inputWrap = document.querySelector('.app-features');
const age = document.querySelector('#age');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');


function doDefault() {
  maleBtn.classList.toggle('checked');
  countBtn.setAttribute('disabled', 'disabled');
  removeBtn.setAttribute('disabled', 'disabled');
  for (let i = 0; i < input.length; i++) { 
    input[i].placeholder = '0';
  };
}
doDefault();

femaleBtn.addEventListener('click', () => {
  if (femaleBtn) {
    femaleBtn.classList.toggle('checked');
    maleBtn.classList.remove('checked');
  }      
});

maleBtn.addEventListener('click', () => {
  if (maleBtn) {
    femaleBtn.classList.remove('checked');
    maleBtn.classList.toggle('checked');
  }
});

inputWrap.addEventListener('keypress', () => {
  
  if(age != '' || height != '' || weight != '') {
    removeBtn.removeAttribute('disabled', 'disabled');
  };
});

removeBtn.addEventListener('click', () => {
  age.value = '';
  height.value = '';
  weight.value = '';
  removeBtn.setAttribute('disabled', 'disabled');
})

if(age != 0 && height != 0 && weight != 0 && age != '' && height != '' && weight != '') {
  countBtn.removeAttribute('disabled', 'disabled');
};
