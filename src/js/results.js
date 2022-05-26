import {age, decrease, height, high, increase, low, mid, min, normal, weight} from "./querySelectors";


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
    let manResult = (10 * parseInt(weight.value)) + (6.25 * parseInt(height.value)) - (5 * parseInt(age.value)) + 5;
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
};

export { showWomanResult, showManResult };