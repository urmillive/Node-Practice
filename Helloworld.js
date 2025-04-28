console.log("Start of the program");

// Using setTimeout
setTimeout(() => {
    console.log("setTimeout executed");
}, 0);

// Using Promises
const promise = new Promise((resolve, reject) => {
    resolve("Promise resolved");
}); 

promise.then((message) => {
    console.log(message);
});

console.log("End of the program");
