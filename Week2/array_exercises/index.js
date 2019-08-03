/* eslint-disable guard-for-in */
/* eslint-disable lines-around-directive */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
'use strict';

{
  function getTheFirstElement(array, number) {
    return array.splice(0, number);
  }

  function mostFrequent(array) {
    let count = 0;
    let toReturnIndex = 0;
    for (let i in array) {
      let b = array.filter(elem => elem === array[i]).length;
      if (b > count) {
        count = b;
        toReturnIndex = i;
      }
    }
    return array[toReturnIndex];
  }

  function evenDashes(numb) {
    let numArr = numb.split('');
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] % 2 === 0 && numArr[i + 1] % 2 === 0) {
        numArr.splice(i + 1, 0, '-');
        i++;
      }
    }
    return numArr.join('');
  }

  function swapCase(string) {
    let str = string.split('');
    return str
      .map(elem => {
        if (elem === elem.toUpperCase()) {
          return elem.toLowerCase();
        }
        return elem.toUpperCase();
      })
      .join('');
  }
}
