let num
num=prompt('Десятичное число: ')
let arrey=[]
let string1
let string2
//calc(num)

if (!Number.isInteger(+num)){
	let n = 5; //точность. Сколько брать чисел после запятой
	fractional = Math.floor((num % 1) * Math.pow(10, n));
	fractional = '0' + '.' + fractional
	calc_multiplication(+fractional)
	num = Math.floor(num)
	calc_division(num)
}
else{
	// num = Math.floor(num)
	// let n = 5; //точность. Сколько брать чисел после запятой
	// fractional = Math.floor((num % 1) * Math.pow(10, n));
	calc_division(num)
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
	string1 = string
	calc_res(string1)
	// alert(arrey.join(' '))
}

function calc_multiplication(num){
	let i = 0
	for (n = num; n < 1; i++){
		n = num *2 
		num = n
		arrey[i] = Math.floor(n)
		console.log(arrey)
	}
	arrey_string(arrey)
	string2 = string
	calc_res(string2)
}

function calc_res(string1, string2) {
	if (string2 === true){
		alert(string1 + ',' + string2)
	}
	else alert(string1)
	
}

function arrey_string(arrey){
	return string = arrey.join(' ')
}