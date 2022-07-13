let num
num=prompt('Десятичное число: ')
let arrey=[]

function culc(num){
	let i=0
	for (n=num; n>=2;){
	n=Math.trunc(num/2)
	arrey[i] = num - n*2
	num=n
	i++
	}
	arrey.push(1)
	arrey.reverse()
	alert(arrey.join(' '))
}