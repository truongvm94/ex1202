function largestOfFour(arr : Array<number[]>): Array<number> {
      let myArr = Array<number>();
      myArr = arr.map((e) => Math.max(...e));
      return myArr;
    
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);