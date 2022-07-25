let num
num=prompt('Десятичное число: ')
let array=[]
let arr_string=[]
//let string2
let fractional
let notation = 16

// Checking "integer or not" (проверка "целое число или нет")
if (!Number.isInteger(+num)){
	fractional = (num % 1) 
	num = Math.floor(num)
	arr_string[0] = calcDivision(num)
	//console.log(string1[0])
	arr_string[1] = calcMultiplication(fractional)
	//calc_res(string1, string2)
	calcRes(arr_string)
}
else{
	arr_string[0] = calcDivision(num)
	calcRes(arr_string)
}

// Division of a part of a up to a comma (деление части числа до запятой)
function calcDivision(num){
	let i=0, a
	for (n=num; true; i++){
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
		console.log(array[i])
	}
	if (n === num) break
	num = n
	}
	//array.push(1)
	array.reverse()
	conversionArrayStr(array)
	return string
}


// Translation of the part after the comma (перевод части после запятой)
function calcMultiplication(num){
	let i = 0
	//let n=5
	for (number = num; i<=10; i++){
		number = num *16
		array[i] = Math.floor(number)
		console.log(num)
		if (array[i] >= 10){
			array[i] = transformNumber(array[i])
			console.log(array[i])
		}
		// else{
		// 	array[i] = Math.floor(number)
		// }
		//console.log(array[i])
		num = (number % 1)
		//console.log(num)
		//console.log(num)
	}
	conversionArrayStr(array)
	console.log(string)
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
			//console.log(res)
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
	//console.log(obj[key])
	return obj[key]
}
//transform(12)
