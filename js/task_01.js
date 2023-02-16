//Задание 1
{
    const input = document.querySelector('.money');
    const euroToDollar = document.querySelector('.euroNumber').innerHTML;
    const dollarToRubl = document.querySelector('.dollarNumber').innerHTML;
    const kursEuro = euroToDollar * dollarToRubl;
    
    let btn =document.querySelector('.push').addEventListener('click', ()=>{
        const result = kursEuro * input.value;
        document.querySelector('.exchange-result').innerHTML = result;
    });
}

//Задание 2


    const mainInput = document.querySelector('.main-input');
    const btn=document.querySelectorAll('.btn');
    const result= document.querySelector('.result');
    
    
    
    //Функции работы над строкой
    
    //Функция все буквы большие.
    
    function allToUpperCase(mainInput) {
        let inputValue=mainInput.value;
        let upperResult=inputValue.toUpperCase();
        result.innerHTML=upperResult;
        
    }
    //Функция все буквы Маленькие.
    
    function allToLowerCase(mainInput) {
        let inputValue=mainInput.value;
        let upperResult=inputValue.toLowerCase();
        result.innerHTML=upperResult;
        
    }
    
    //Функция Первая заглавная буква.
    
    function firstToUpperCase(mainInput) {
        let inputValue=mainInput.value;
        let upperResult=inputValue[0].toUpperCase() + inputValue.slice(1).toLowerCase();
        result.innerHTML=upperResult;
        
    }
    //Функция первая буква второго слова заглавная.
    
    function lastToUpperCase(mainInput) {
        let inputValue=mainInput.value;
        let upperResult=inputValue.split(' ');
        let itog= upperResult[0].toLowerCase() +" " +upperResult[1].charAt(0).toUpperCase()+upperResult[1].slice(1);
        
        result.innerHTML=itog;
        
    }
    //Функция Переворота слов.
    function reverseString(mainInput) {
        let inputValue=mainInput.value;
        let upperResult=inputValue.split("").reverse().join("")
        result.innerHTML=upperResult;
    }
    

    ///Задние 3


    // {
    //     const total = +(prompt('Какая общая сумма ваших покупок'))
    //     const pokypki = +(prompt('Сколько покупок вы совершили'))
    //     const promo = prompt('Введите промо-код')
        
    //     const calculate = (total,pokypki,promo) => {
    //         let itogo = total;
    
    //             if (pokypki > 10) { 
    //             itogo *= 0.97;
    //         }
    //         if (total > 30000) {
    //             itogo = itogo - (total - 30000)*0.15;
    //         }
    //         if (promo === "METHED") {
    //             itogo *= 0.9;
    //         }
    //         else if (itogo > 2000 && promo === "G3H2Z1") {
    //             itogo -= 500;
    //         }
    //         return itogo;
    //     }
    //     console.log(calculate(total, pokypki, promo))
    // }
    


