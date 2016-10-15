//@flow

import ES5Detective from '../es5_class/detective';

class ES6DetectivePoirot extends ES5Detective {
  constructor() {
    super();
  }
}

let detectiveES5 = new ES5Detective();
detectiveES5.fromBookName = 'A C';
console.log(`${detectiveES5.dectiveName}`);

let poirot = new ES6DetectivePoirot();
console.log(`${poirot.dectiveName}`);
poirot.solveCase('Oriental Express');
poirot.investigate('Express');

console.log(`${poirot.fromBookName}`);

export default ES6DetectivePoirot;
