let num
num=prompt('Десятичное число: ')
let arrey=[]
calc(num)

function calc_division(num){
	let i=0
	for (n=num; n>=2; i++){
	n=Math.trunc(num/2)
	arrey[i] = num - n*2
	num=n
	//i++
	}
	calc_res(arrey)
	// arrey.push(1)
	// arrey.reverse()
	// alert(arrey.join(' '))
}

function calc_multiplication(num){
	let i = 0
	for (n = num; n <= 0; i++){
		n = num *2 
		num = n
		arrey[i] = Math.floor(n)
	}
}

function calc_res(arrey){
	arrey.push(1)
	arrey.reverse()
	alert(arrey.join(' '))
}