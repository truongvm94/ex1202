function largestOfFour(arr) {
    var myArr = Array();
    myArr = arr.map(function (e) { return Math.max.apply(Math, e); });
    return myArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
