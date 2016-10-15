//@flow

function ES5Detective() {
  var available: boolean = true; // private field. default income is ZERO.

  this.dectiveName = 'Detective who';
  console.log('##ES5Detective contructor');

  this.investigate = function(scene) {
    if (available) {
      console.log('investigate ' + scene);
    } else {
      console.log(`i'm not available`);
    }
  }

  this.assistant = "assistant who";
}

ES5Detective.prototype.solveCase = function(caseName) {
  if(!available) {
    console.log('not available');
    return;
  }

  var dn = this.dectiveName;
  if(!caseName) {
    console.log('SOLVE CASE: ' + dn + ' no case to solve');
  } else {
    console.log('SOLVE CASE: ' + dn + ' get case ' + caseName + ' is solved');
  }
};

ES5Detective.countCases = function(count) {
  if(!count) {
    console.log('no case solved');
  } else {
    console.log(`${count} cases are solved`);
  }
};

ES5Detective.prototype.fromBookName = 'who';

// inheritance
function ES5DetectiveConan() {
  // first line in constructor method is a must!!!
  ES5Detective.call(this);

  this.dectiveName = 'Conan';
}

// inheritance
ES5DetectiveConan.prototype = Object.create(ES5Detective.prototype);
ES5DetectiveConan.prototype.constructor = ES5DetectiveConan;

var detective = new ES5Detective();
console.log(detective.dectiveName);
detective.solveCase();
detective.fromBookName = 'Someone i dont know'; // who

var conan = new ES5DetectiveConan();
console.log(conan.dectiveName);
conan.solveCase('Song');
// conan.fromBookName = 'Detective Conan';
console.log(`${conan.fromBookName}`);

// property
console.log(`##ASSISTANT:- ${detective.assistant}`);
detective.assistant = "SOMEONE";

console.log(`##CONAN ASSISTANT:- ${conan.assistant}`);
conan.assistant = 'RAN';
console.log(`##CONAN ASSISTANT:- ${conan.assistant}`);

// static method
ES5Detective.countCases();
ES5Detective.countCases(10);
//@warning: this will be
//ES5DetectiveConan.countCases();

module.exports = ES5Detective;
