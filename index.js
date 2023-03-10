function loopExample(n) {
    let numbers = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 2; j <= i; j++) {
          if (i % j === 0 && j < i) {
            break;
          } else if (j === i) {
            numbers.push(i);
            
          }
        }
      }console.log(numbers)
}

console.time("function time")
console.log(loopExample(process.argv[2]))
console.timeEnd("function time")
