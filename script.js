let num
num=prompt('Десятичное число: ')
let array=[]
let arr_string=[]
let fractional
let notation = 16

// Checking "integer or not" (проверка "целое число или нет")
if (!Number.isInteger(+num)){
	fractional = (num % 1) 
	num = Math.floor(num)
	arr_string[0] = calcDivision(num)
	arr_string[1] = calcMultiplication(fractional)
	calcRes(arr_string)
}
else{
	arr_string[0] = calcDivision(num)
	calcRes(arr_string)
}

// Division of a part of a up to a comma (деление части числа до запятой)
function calcDivision(num){
	let i=0, a
	for (; true; i++){
	if (num<notation){
		a=0
	}else{
		n=Math.trunc(num/notation)
		a = n*notation
	}
	array[i] = num - a
	if (array[i] === num) break
	if ((array[i]) >= 10){
		array[i] = transformNumber(array[i])
	}
	if (n === num) break
	num = n
	}
	array.reverse()
	conversionArrayStr(array)
	return string
}


// Translation of the part after the comma (перевод части после запятой)
function calcMultiplication(num){
	let i = 0
	for (; i<=10; i++){
		array[i] = Math.floor(num*notation)
		if (array[i] >= 10){
			array[i] = transformNumber(array[i])
		}
		num = ((num*notation) % 1)
	}
	conversionArrayStr(array)
	return string
}

// Output on display (вывод на экран)
function calcRes(array) {
	let res
	array.forEach(function(item, i, array){
		if (i <1){
			res = array[0]
			let print = document.querySelector('.print')
			print.innerHTML = `${res}`
		}else{
			console.log(array[0] + ',' + array[1])
			res = array[0] + ',' +array[1]
			let print = document.querySelector('.print')
			print.innerHTML = `${res}`
		}
	})
	
}

// Convert array to string (конвертация массива в строку)
function conversionArrayStr(array){
	string = array.join('')
	return string
}


function transformNumber(key){
	let obj = {
		10: "A",
		11: "B",
		12: "C",
		13: "D",
		14: "E",
		15: "F"
	}
	return obj[key]
}
