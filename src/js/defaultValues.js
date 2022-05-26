import { maleBtn, male, female, min, countBtn, removeBtn, input } from "./querySelectors";

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

export { doDefault };
