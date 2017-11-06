function fn(n){
	var newarr = [];
    for (var j =0; j < arguments.length; j++) {
    	if (Array.isArray(arguments[j])) {
    	 	for (var i =0; i < arguments[j].length; i++) {
    			newarr = newarr.concat(fn(arguments[j][i]));
    	 	}
    	}else if(typeof(arguments[j]) === 'object') {
    		for(var key in arguments[j]){
  				newarr = newarr.concat(arguments[j][key]);
  			}
    	} else {
    		newarr.push(arguments[j]);
    	}

    }
    return unique(newarr);
}


function unique(arr){    
	var resultarr = [];    
	for(var i = 0; i < arr.length; i++){        
		if(resultarr.indexOf(arr[i]) == -1){        
			resultarr.push(arr[i]);        
		}    
	}    
	return resultarr;
}



console.log(fn(	1, 	'string',	[ 2, 'a', 1, {c: 5} ]));	







// }else if(typeof(arguments[j]) === 'object') {
//     		for(var key in func[i]) {
//   				newarr.push(func[i][key]);
//   			}