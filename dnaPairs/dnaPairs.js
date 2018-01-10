// Please do not change the name of this function
var dnaPairs = function (dna) {
  // Your code here
  if (typeof dna !== 'string' || dna === '') return [];
  var newDna = dna.split('');
    var dnaChange = {
    A: ['A','T'],
    T: ['T','A'],
    C: ['C','G'],
    G: ['G','C']
  };
   return newDna.map(function (ele) { 
          return dnaChange[ele];
    });
};

if (typeof module !== 'undefined') {
  module.exports = {dnaPairs};
}
