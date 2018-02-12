
function palindrome(str) {
  var reg = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(reg,'');
//   var newStr = str.split('').reverse().join('');
  console.log(str);
  for ( i = 0; i < str.length/2; i++) {
    if(str[i] !== str[str.length -1-i]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");