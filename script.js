let num
num=prompt('Десятичное число: ')
let arrey=[]
let string1
let string2
let fractional
//calc(num)

if (!Number.isInteger(+num)){
	let n = 11; //точность. Сколько брать чисел после запятой
	// fractional = Math.floor((num % 1) * Math.pow(10, n));
	// fractional = '0' + '.' + fractional
	//calc_multiplication(+fractional)
	fractional = (num % 1) 
	num = Math.floor(num)
	string1 = calc_division(num)
	string2 = calc_multiplication(fractional)
	calc_res(string1, string2)
}
else{
	// num = Math.floor(num)
	// let n = 5; //точность. Сколько брать чисел после запятой
	// fractional = Math.floor((num % 1) * Math.pow(10, n));
	calc_division(num)
	string1 = string
	calc_res(string1)
	//calc_multiplication(fractional)
}

function calc_division(num){
	let i=0
	for (n=num; n>=2; i++){
	n=Math.trunc(num/2)
	arrey[i] = num - n*2
	num=n
	//i++
	}
	arrey.push(1)
	arrey.reverse()
	arrey_string(arrey)
	//string1 = string
	//calc_res(string1)
	return string
	// alert(arrey.join(' '))
}

function calc_multiplication(num){
	let i = 0
	let n=5
	for (number = num; i<=10; i++){
		//console.log(number)
		number = num *2 
		arrey[i] = Math.floor(number)
		//console.log(arrey)
		num = (number % 1)
		//console.log(num)
		//num = '0' + '.' + num
		//num = +num
		console.log(num)
	}
	arrey_string(arrey)
	//string2 = string
	//calc_res(string2)
	return string
}

function calc_res(string1, string2) {
	console.log(string1)
	console.log(string2)
	let res
	// if (string2 === true){
	// 	res = (string1 + ',' + string2)
	// 	console.log(res)
	// }
	// else {res = string1}
	res = string1 + ',' +string2
	console.log(res)
	let print = document.querySelector('.print')
	print.innerHTML = `${res}`
}

function arrey_string(arrey){
	string = arrey.join('')
	return string
}