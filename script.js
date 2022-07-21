let num
num=prompt('Десятичное число: ')
let arrey=[]
//calc(num)

if (Number.isInteger(num)){
	calc_division(num)
}
else{
	num = Math.floor(num)
	let n = 5; //точность. Сколько брать чисел после запятой
	fractional = Math.floor((num % 1) * Math.pow(10, n));
	calc_division(num)
	calc_multiplication(fractional)
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
	calc_res(arrey)
	// alert(arrey.join(' '))
}

function calc_multiplication(num){
	let i = 0
	for (n = num; n <= 0; i++){
		n = num *2 
		num = n
		arrey[i] = Math.floor(n)
	}
	calc_res(arrey)
}

function calc_res(arrey){
	alert(arrey.join(' ') + ',' + arrey.join(' '))
}