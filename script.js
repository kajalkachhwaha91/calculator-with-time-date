var s1 = prompt("enter value of base:");
var s2 = prompt("enter value of height:");
var s3 = prompt("enter value of base:");
var s = (s1+s2+s3)/2;
var temp = s*(s-s1)*(s-s2)*(s-s3);
var area = Math.sqrt(temp);

console.log(area);

// var area = (base*h)/2;
// console.log("Area is:", area);