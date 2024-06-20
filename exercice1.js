// function triPersonnalise(arr, key){
//     return arr.sort((a,b) => a[key] - b[key])
// }

// utilisation du tri par insertion pour trier 
function triPersonnalise(arr, key, ordre) {
    var len = arr.length;       
    var tmp, i, j;                  
    
    for(i = 1; i < len; i++) {
        //stocker la valeur actuelle 
        tmp = arr[i]
        j = i - 1

        if (ordre === 'croissant') {
            while (j >= 0 && arr[j][key] > tmp[key]) {
            // déplacer le nombre
            arr[j+1] = arr[j]
            j--
            }
        } else if (ordre === 'decroissant'){
            while(j >=0 && arr[j][key] < tmp[key]) {
                arr[j+1] = arr[j]
                j--
            }
        }
        //Insère la valeur temporaire à la position correcte dans la partie triée.
        arr[j+1] = tmp
    }
    return arr
}

// exemple
let personnes = [ {nom: 'Alice', age: 25}, {nom: 'Bob', age: 30}, {nom: 'Charlie', age: 20} ];
console.log(triPersonnalise(personnes, 'age', 'decroissant'));
console.log(triPersonnalise(personnes, 'age', 'croissant'));

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://waytolearnx.com/2019/09/tri-par-insertion-en-javascript.html