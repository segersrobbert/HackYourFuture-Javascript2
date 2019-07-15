# Intermediate Algorithm Scripting
## 1. Sum All Numbers in a Range
```js
function sumAll(arr) {
let upper = Math.max(arr[0],arr[1]);
let lower =  Math.min(arr[0],arr[1]);
let list = [];
let total = 0;
for(let i = lower; i <= upper;i++){
  list.push(i);
  total= total + i;
}
return total;
}

sumAll([-1, 4]);
```
