import { age, countBtn, female, femaleBtn, height, inputWrap, male, maleBtn, removeBtn, results, weight } from "./querySelectors";
import { doDefault } from "./defaultValues";
import { showManResult, showWomanResult } from "./results";


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
        }
    });
};

export { addEventListeners };