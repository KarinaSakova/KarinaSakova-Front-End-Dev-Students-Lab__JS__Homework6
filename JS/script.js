//№1
function funcName1(loremString) {
    let str = loremString.toLowerCase();
  
    return str.includes("lorem") || str.includes("ipsum") || str.includes("amet");
  }
  alert( funcName1(`Cтрока "loremString"`));

//№2
function funcName2(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  alert( funcName2("карина") );

  //№3
  function funcName3(str, maxLength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    } else {
        return str;
    }
  }
  alert( funcName3(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the `, 20));

  //№4
  let myLifeMotto = ["Я", "ничего", "не", "понимаю", "в", "JavaScript"]; 
  myLifeMotto.shift();
  myLifeMotto.splice (2, 3,"делать", "для",  "лохов")
  alert(myLifeMotto);

//№5
let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"] 

let teamA = harryPotterTeam.filter(item => item.includes("а"));
console.log(teamA);
let teamН = harryPotterTeam.filter(item => item.includes("Н"));
console.log(teamН);

//№6
let arr = [6, 3, "ten", 12, true, "4"];
let number = arr.filter(item => typeof item === 'number');  //нужно ли было преобразовывать строку "4" в число? 
console.log(number);
let resultSum = number.reduce(function(sum ,item, index, array){
	return sum + item;
},0);
console.log(resultSum);
const resultGen = number.reduce((gen, item) => gen * item);
console.log(resultGen);

//№7
let numArr = [1, 3, 5, 7, 9];
let resultSquares = numArr.map((item) => {
  return  item * item;
})
console.log(resultSquares);