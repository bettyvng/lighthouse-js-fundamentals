const howManyHundreds = num => {

  const someNum = num % 100 === 0 ? num / 100 : Math.floor(num / 100); 

  return someNum;

  }

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);