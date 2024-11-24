/*
n=3
*
**
***
*/
function printStars(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
      str += '*';
    }
    console.log(str);
  }
}
printStars(3);