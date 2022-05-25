export { div, maleBtn, femaleBtn, input, countBtn, removeBtn, inputWrap, age, height, weight, doDefault } from "./defaultValues";

export function addEventListeners() {
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
  });
}
