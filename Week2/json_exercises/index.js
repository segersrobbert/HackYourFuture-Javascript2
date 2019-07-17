function obj_length(obj) {
  return Object.keys(obj).length;
}

function obj_prop_check(obj, prop) {
  return obj.hasOwnProperty(prop);
}

function clock() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  var time = h + ':' + m + ':' + s;
  console.log(time);
  setTimeout(clock, 1000);
}
