//@flow

class ES6Detective {
  detectiveName: string;
  _bookName: string;

  constructor() {
    console.log('Detective constructor');
    this.detectiveName = 'Detective who';
    this._bookName = 'who';
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

  static countCases() {
    console.log(`Counting cases...`);
  }
}

class ES6DetectiveConan extends ES6Detective {
  constructor() {
    super();
    console.log('ES6DetectiveConan constructor');
  }
}

let detective = new ES6Detective();
console.log(`${detective.detectiveName}`);
console.log(`##original book name:- ${detective.fromBookName}`);
console.log(`##inner original book name:- ${detective.fromBookName}`);

detective.fromBookName = 'Detective Conan';
detective.bookAuthor = 'A C';

let conan = new ES6DetectiveConan();
console.log(`${conan.detectiveName}`);
console.log(`##conan book name:- ${conan.fromBookName}`);
console.log(`##inner conan book name:- ${conan.fromBookName}`);

// static method
ES6Detective.countCases();
