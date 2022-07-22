let num
num=prompt('Десятичное число: ')
let array=[]
calc(num)

function calc(num){
	let i=0
	for (n=num; n>=2;){
	n=Math.trunc(num/2)
	array[i] = num - n*2
	num=n
	i++
	}
	array.push(1)
	array.reverse()
	//alert(array.join(' '))
	let res = array.join(' ')
	let print = document.querySelector('.print')
	print.innerHTML = `${res}`
}