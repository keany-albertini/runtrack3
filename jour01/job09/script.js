function tri(numbers, order) {
  if (order == "ASC") {
    return numbers.sort(function(a,b){return a-b});
  }
  else if (order == "DESC") {
   return numbers.sort(function(a,b){return a-b}).reverse(); 
  }
}
var numbers = [ 
  2,
  73,
  35,
  34567,
  34,
  123456,
  678,
  45,
  234,
  4098,
  67,
]; 

var order = "DESC"; 
var order = "ASC"; 

console.log(tri(numbers, order)); 