function shunXu() {
    for (let i = 0; i < arguments.length-1; i++) {
        for (let j = 0; j < arguments.length-i-1; j++) {
            if (arguments[j] > arguments[j+1]) {
                var a = arguments[j+1];
                arguments[j+1] = arguments[j];
                arguments[j] = a;
            }


            
        }
        
    }
    return arguments;
    
}


console.log(shunXu(4,6456,234,2,34,54));