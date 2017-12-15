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


// 2. Create function called composeZ
const composeZ = (...fns) => x => { 
    let sFns = [];
    fns.forEach((curVal, index) => {
        sFns.unshift(curVal); index+1<fns.length?sFns.unshift(fns.pop()):null;
    })
    return sFns.reduce((acc, fun) => fun(acc), x);
}

console.log(composeZ(Math.sin, Math.cos, Math.asin, Math.tan)(0.5)) // sin(tan(cos(asin(0.5)))) = 0.923...
console.log(composeZ(x=>x*2, x=>x-2, x=>1/x, x=>Math.sqrt(x), x=>x*x)(0.5)) // ((sqrt(1/0.5) - 2) ^ 2) * 2 = 0.686...

// 3. Create function called merge
const merge = (o1, o2) => Object.assign({}, o1, o2)

let o1 = {a: 1, b: 2}; let o2 = {b: 3, c: 4}
console.log(merge(o1, o2))