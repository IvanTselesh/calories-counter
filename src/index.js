const div = document.querySelector('.app-sex-wrap');
const maleBtn = document.querySelector('#male');
const femaleBtn = document.querySelector('#female');
const input = document.querySelectorAll('.features-item');
const countBtn = document.querySelector('.count');
const removeBtn = document.querySelector('.delete');
const inputWrap = document.querySelector('.app-features');
const age = document.querySelector('#age');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const min = document.querySelector('#min');
const decrease = document.querySelector('.decrease');
const normal = document.querySelector('.normal');
const increase = document.querySelector('.increase');
const male = document.querySelector('.male');
const female = document.querySelector('.female');
const results = document.querySelectorAll('.app-results-item-content');


function doDefault() {
  maleBtn.checked = 'checked';
  if (maleBtn.checked) {
    male.classList.add('checked');
    female.classList.remove('checked')
  };
  min.checked = 'checked';
  countBtn.setAttribute('disabled', 'disabled');
  removeBtn.setAttribute('disabled', 'disabled');
  for (let i = 0; i < input.length; i++) { 
    input[i].placeholder = '0';
    input[i].value = '';
  };
  
};
doDefault();


function showWomanResult() {
  let womanResult = (10 * parseInt(weight.value)) + (6.25 * parseInt(height.value)) - (5 * parseInt(age.value)) - 161;
  let minWomanResult = womanResult * 0.85;
  let maxWomanResult = womanResult * 1.15;

  if (min.checked) {
    decrease.value = minWomanResult * 0.85;
    normal.value = womanResult * 0.85;
    increase.value = maxWomanResult * 0.85;
  } if (low.checked) {
    decrease.value = minWomanResult * 0.9;
    normal.value = womanResult * 0.9;
    increase.value = maxWomanResult * 0.9;
  } if (mid.checked) {
    decrease.value = minWomanResult;
    normal.value = womanResult;
    increase.value = maxWomanResult;
  } if (high.checked) {
    decrease.value = minWomanResult * 1.1;
    normal.value = womanResult * 1.1;
    increase.value = maxWomanResult * 1.1;
  } else {
    decrease.value = minWomanResult * 1.15;
    normal.value = womanResult * 1.15;
    increase.value = maxWomanResult * 1.15;
  };
};

function showManResult() {
  let manResult = (10 * parseInt(weight.value, 10)) + (6.25 * parseInt(height.value, 10)) - (5 * parseInt(age.value, 10)) + 5;
  let minManResult = manResult * 0.85;
  let maxManResult = manResult * 1.15;

  if (min.checked) {
    decrease.value = minManResult * 0.85;
    normal.value = manResult * 0.85;
    increase.value = maxManResult * 0.85;
  } if (low.checked) {
    decrease.value = minManResult * 0.9;
    normal.value = manResult * 0.9;
    increase.value = maxManResult * 0.9;
  } if (mid.checked) {
    decrease.value = minManResult;
    normal.value = manResult;
    increase.value = maxManResult;
  } if (high.checked) {
    decrease.value = minManResult * 1.1;
    normal.value = manResult * 1.1;
    increase.value = maxManResult * 1.1;
  } else {
    decrease.value = minManResult * 1.15;
    normal.value = manResult * 1.15;
    increase.value = maxManResult * 1.15;
  };
  for(i = 0; i < results.length; i++) {
    /* results[i].value.toFixed(2); */
    results[i].value = Math.floor(results[i].value)
  }
};

function addEventListeners() {

  female.addEventListener ('click', () => {
    if (femaleBtn.checked) {
      female.classList.toggle('checked');
      male.classList.remove('checked');
    };
  });

  male.addEventListener ('click', () => {
    if (maleBtn.checked) {
      male.classList.toggle('checked');
      female.classList.remove('checked');
    };
  });
  
  inputWrap.addEventListener('keypress', () => {
    if(age != '' || height != '' || weight != '') {
      removeBtn.removeAttribute('disabled', 'disabled');
    };
    if(age.value != 0 && height.value != 0 && weight.value != 0 && age.value != '' && height.value != '' && weight.value != '') {
      countBtn.removeAttribute('disabled', 'disabled');
    };
  });
  
  removeBtn.addEventListener('click', () => {
    doDefault();
    for (let i = 0; i < results.length; i++) {
      results[i].value = '';
    }
 });

  countBtn.addEventListener('click', () => {
    if(maleBtn.classList.contains('checked') == true) {
      showManResult();
    } else {
      showWomanResult();
      for(i = 0; i < results.length; i++) {
        /* results[i].value.toFixed(2); */
        Math.round();
      }
    }
  });
};
addEventListeners();


/* 1. Для женщин: `N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) − 161`
2. Для мужчин: `N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) + 5` 
min = -15%
low = -10%
mid = 0%
high = 10%
max = 15% */



