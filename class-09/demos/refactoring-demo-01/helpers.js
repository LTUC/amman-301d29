'use strict';

let helperObj = {};
helperObj.randomNumberBetween = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

helperObj.renderName = function () {
    console.log('razan')
}
console.log(helperObj);

module.exports = helperObj;
