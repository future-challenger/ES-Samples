//@flow

var _bookNameSymbol = Symbol();

class ES6Detective {
  detectiveName: string;
  _bookName: string;
  // this[_bookNameSymbol]: string;

  constructor() {
    console.log('Detective constructor');
    this.detectiveName = 'Detective who';
    this._bookName = 'who';

    this[_bookNameSymbol] = 'who symbol';
  }

  solveCase(caseName) {
    if(!caseName) {
      console.log('no case to solve');
    } else {
      console.log('case ' + caseName + ' is solved');
    }
  }

  get fromBookName() {
    return this._bookName;
  }

  set fromBookName(value) {
    this._bookName = value;
  }

  get bookAuthor() {
    return 'Author Who';
  }

  static countCases(place) {
    let p = !place ? '[maybe]' : place;
    console.log(`Counting cases...solve in ${p}`);
  }
}

class ES6DetectiveConan extends ES6Detective {
  constructor() {
    super();
    console.log('ES6DetectiveConan constructor');
  }

  solveCase(caseName) {
    super.solveCase(caseName);

    if(!caseName) {
      console.log('CONAN no case to solve');
    } else {
      console.log('CONAN case ' + caseName + ' is solved');
    }
  }

  static countCases(place) {
    let p = !place ? '[maybe]' : place;
    super.countCases(p);
    console.log(`#Sub class:- Counting cases...solve in ${p}`);
  }
}

let detective = new ES6Detective();
console.log(`${detective.detectiveName}`);
console.log(`##original book name:- ${detective.fromBookName}`);
console.log(`##inner original book name:- ${detective.fromBookName}`);
console.log(`##Symbol book name:- ${detective[_bookNameSymbol]}`);

detective.fromBookName = 'Detective Conan';
// detective.bookAuthor = 'A C'; // give a value to only a getter attribute.

let conan = new ES6DetectiveConan();
conan.solveCase('Some case');

console.log(`${conan.detectiveName}`);
console.log(`##conan book name:- ${conan.fromBookName}`);
console.log(`##inner conan book name:- ${conan.fromBookName}`);

// static method
ES6Detective.countCases();
ES6DetectiveConan.countCases('Japan');
