function dummy() {
    console.log("dummy");
}


function mapAny0(obj, mapFunction, toArray = true) {
    if (obj instanceof Array)  // toArray doesn't make much sense here
        return obj.map(mapFunction);
    
}

function mapAny(obj, mapFunction, toArray = true) {
    Object.entries(obj).forEach(x => console.log(x));
}



const composeZ = (...fns) => x => { 
    let sFns = [];
    fns.forEach((curVal, index, arr) => {
        sFns.unshift(curVal); index+1<fns.length?sFns.unshift(fns.pop()):null;
    })
    return sFns.reduce((acc, fun) => fun(acc), x);
}
// sin(tan(cos(asin(0.5)))) = 0.923...
console.log(composeZ(Math.sin, Math.cos, Math.asin, Math.tan)(0.5)) // 0.923...

// ((sqrt(1/0.5) - 2) ^ 2) * 2 = 0.686...
console.log(composeZ(x=>x*2, x=>x-2, x=>1/x, x=>Math.sqrt(x), x=>x*x)(0.5)) // 0.686