const add = (a,b)=>{
    return a+b;
}

const sub = (a,b) =>{
    return a-b;
}

module.exports = example1 = () =>{
    console.log('====================================');
    console.log('hello world!');
    console.log('====================================');
}

// you can use exports as reference directly
exports = example2 = () => {
    console.log('exports');
}
module.exports = {add,sub};