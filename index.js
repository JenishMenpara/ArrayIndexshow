// let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// let target = "9";
let array = [1,2,3,4,5]
let target = 5;
let flag = true;

for (var i = 0; i < array.length; i++) {
  if (array[i] === target) {
    flag = false;
    console.log(target + " " + "index" + " " + i);
    break;
  } else {
    flag = true;
  }
}
if(flag){
    console.log("not found")
}
