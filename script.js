let num
num=prompt('Десятичное число: ')
let array=[]
let string1=[]
//let string2
let fractional
let notation = 16

// Checking "integer or not" (проверка "целое число или нет")
if (!Number.isInteger(+num)){
	fractional = (num % 1) 
	num = Math.floor(num)
	string1[0] = calc_division(num)
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
	let i=0
	for (n=num; n>=notation; i++){
	n=Math.trunc(num/notation)
	array[i] = num - n*notation
		if ((array[i]) >= 10){
			array[i] = transform(array[i])
		}
		num = n
	}
	//array.push(1)
	array.reverse()
	conversion_array_string(array)
	return string
}

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
	console.log(array[0] + ',' + array[1])
	let res
	res = array[0] + ',' +array[1]
	//console.log(res)
	let print = document.querySelector('.print')
	print.innerHTML = `${res}`
}

// Convert array to string (конвертация массива в строку)
function conversion_array_string(array){
	string = array.join('')
	return string
}


function transform(key){
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
