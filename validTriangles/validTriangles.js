// Please do not change the name of this function
function validTriangles (triangleArr) {
    return triangleArr.reduce((acc, singleTri) => {
        singleTri.sort(function(a, b) {return a - b;});
        singleTri[0] + singleTri[1] > singleTri[2] ? acc++ : null;
        return acc;
      }, 0);
}

module.exports = {validTriangles};