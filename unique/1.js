function count(a, x){
    c = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] == x){
            c++;
        }
    }

    return c;
}



function countAll(aa, x){
    d = 0;
    for (var i = 0; i < aa.length; i++) {
       d += count(aa[i], x);
    }
    return d;
}


function unique(){
    var newarr = [];
    for (var j =0; j < arguments.length; j++) {
        for (var i =0; i < arguments[j].length; i++) {
            if(countAll(arguments, arguments[j][i]) == 1){
                newarr.push(arguments[j][i]);
            }

        }
    }

    return newarr.sort(function(a, b) {
      return a - b;
    });;
}

console.log(unique([1,2,2,5,5,5,6,7,7,8,9,10,10], [1, 3, 4, 5, 6]));

// function squash(a, b){
//     var newarr = [];
//     var lastarr= [];
//     for(var i = 0; i < a.length; i++){
// 		if(b.indexOf(a[i]) == -1){
//     		newarr.push(a[i]);
// 		} 
//     }

//     for(var u = 0; u < b.length; u++){
//     	if (a.indexOf(b[u]) == -1){
//     		newarr.push(b[u]);
// 		}
// 	}
//     for (var j = 0; j <  newarr.length; j++) {
    		
//     		if(lastarr.indexOf(newarr[j]) == -1){
//     			lastarr.push(newarr[j]);
//     		}
//         }
//     return lastarr.sort();
// }

// console.log(squash([1,2,2,5,5,5,6,7,7,8,9,10,10], [1, 3, 4, 5, 6]));


// var arr = [1,2,2,3,4,5,5,5,6,7,7,8,9,10,10];

// function unique(arr){
//     var newarr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(newarr.indexOf(arr[i]) == -1){
//         newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }

// console.log(unique(arr));

