const array = ['Paris', 'Lyon', 'Montréal', 'Bordeaux'];

console.log(array);
//boucle for (tant que i est inférieur à la longueur du tableau, continue de faire la boucle et d'énumérer)
for(i=0; i < array.length; i++){
	console.log(typeof array[i][2]);
}
array.sort()