function count(param, repeat){
    myCounter = 0;
    for (var i = 0; i < param.length; i++) {
        if(typeof(param[i]) === 'object'){
            JSON.stringify(param[i]);
            if (JSON.stringify(param[i]) === JSON.stringify(repeat)) {
                myCounter++;
            }
        } else if (param[i] == repeat){
            myCounter++;
        }
    }

    return myCounter;
}

function countAll(params, repeat){
    myCounterAll = 0;
    for (var i = 0; i < params.length; i++) {
       myCounterAll += count(param[i], repeat);
    }
    return myCounterAll;
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

console.log(unique([1, {a: 1}], [1, 2, 3, {a: 2}]));

