let num
num=prompt('Десятичное число: ')
let array=[]
let string1=[]
//let string2
let fractional
let notation = 2

// Checking "integer or not" (проверка "целое число или нет")
if (!Number.isInteger(+num)){
	fractional = (num % 1) 
	num = Math.floor(num)
	string1[0] = calc_division(num)
	//console.log(string1[0])
	string1[1] = calc_multiplication(fractional)
	//calc_res(string1, string2)
	calc_res(string1)
}
else{
	string1[0] = calc_division(num)
	calc_res(string1)
}

// Division of a part of a up to a comma (деление части числа до запятой)
function calc_division(num){
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
	conversion_array_string(array)
	return string
}

// function calc_division(num){
// 	let i = 0, n, a
// 	do {
// 		//n = num 
// 		n=Math.trunc(num/notation)
// 		a = n*notation
// 		if (n<notation){
// 			a = 0
// 		}
// 		//a = n
// 		array[i] = num - a
// 		if (array[i] === num) break
// 		num = n
// 		if ((array[i]) >= 10){
// 			array[i] = transformNumber(array[i])
// 		}
// 		//num = n
// 		// if (n<notation){
// 		// 	n=0
// 		// }
// 		i++
// 	}while(true)
// 	console.log(array)
// 	array.reverse()
// 	conversion_array_string(array)
// 	return string
// }

// Translation of the part after the comma (перевод части после запятой)
function calc_multiplication(num){
	let i = 0
	let n=5
	for (number = num; i<=10; i++){
		number = num *2 
		array[i] = Math.floor(number)
		num = (number % 1)
		//console.log(num)
	}
	conversion_array_string(array)
	return string
}

// Output on display (вывод на экран)
function calc_res(array) {
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
function conversion_array_string(array){
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
