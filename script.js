var numbers = [-30, 14, 66, 21, 72, -4];
var numA = [];
var bodyEle = document.body;

function numFunc(numb) {
  var that = this;
  this.number = numb;
  
  if (this.number < 0) {
    this.text = " and this number is below 0.";
  } else if (this.number > 50) {
    this.text = " and this  number is greater than 50.";
  } else if (this.number === 14) {
    this.text = " and this number equals 14";
  } else {
    this.text= " and this is just another number!";
  }
  
  this.ele = document.createElement("div");
  this.numbEle = document.createElement("div");
  this.numbEle.innerHTML = "The number is " + this.number + this.text;
  this.ele.appendChild(this.numbEle);
  
  this.ele.addEventListener("click", function () {
    that.increaseNum();
  });
  bodyEle.appendChild(this.ele);
}

numFunc.prototype.increaseNum = function () {
  var that = this;
  this.number = this.number + 1;
  if (this.number < 0) {
    this.text = " and this number is below 0.";
  } else if (this.number > 50) {
    this.text = " and this number is greater than 50.";
  } else if (this.number === 14) {
    this.text = " and this number equals 14";
  } else {
    this.text = " and this is just another number!";
  }
  this.numbEle.innerHTML = "The number is " + this.number + this.text;
};

for (var i = 0; i < numbers.length; i++) {
  numA.push(new numFunc(numbers[i]));
}