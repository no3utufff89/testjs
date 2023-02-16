//Задание 1 
console.info("Задание 1")
{
    let i = 0;
for (let i = 1; i<11; i++) {
    console.log('----------------');
    for (let a = 1; a<11;a++) {
        console.log(`${i} в степени ${a} рано ${i**a}`)
    }
}
}
//Задание 2
{
    console.info("Задание 2")

    function isPrime(n) {
        
        if (n===1)  {
          return false;
        }
        else if(n === 2)  {
          return true;
        } else   {
          for(let x = 2; x < n; x++)  {
            if(n % x === 0) {
              return false;
            }
          }
          return true;  
        }
      }
      console.log(isPrime(5))
      console.log(isPrime(12))
      
}

//Задание 3 
{
    console.log("Задание 3 было сделано последней кнопкой в предущем уроке, там где конвертер был ")
}