let num
num=prompt('Десятичное число: ')
let array=[]
let string1
let string2
let fractiona

// Checking "integer or not" (проверка "целое число или нет")
if (!Number.isInteger(+num)){
	fractional = (num % 1) 
	num = Math.floor(num)
	string1 = calc_division(num)
	string2 = calc_multiplication(fractional)
	calc_res(string1, string2)
}
else{
	calc_division(num)
	string1 = string
	calc_res(string1)
}

// Division of a part of a up to a comma (деление части числа до запятой)
function calc_division(num){
	let i=0
	for (n=num; n>=2; i++){
	n=Math.trunc(num/2)
	array[i] = num - n*2
	num=n
	}
	array.push(1)
	array.reverse()
	conversion_arrey_string(array)
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
	conversion_arrey_string(array)
	return string
}

// Output on display (вывод на экран)
function calc_res(string1, string2) {
	let res
	res = string1 + ',' +string2
	//console.log(res)
	let print = document.querySelector('.print')
	print.innerHTML = `${res}`
}

// Convert array to string (конвертация массива в строку)
function conversion_arrey_string(array){
	string = array.join('')
	return string
}
