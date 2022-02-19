
console.log("first message");


setTimeout(() => {
    console.log("message after 0 sec")
}, 0);


setTimeout(() => {
    console.log("message after 1 sec")
}, 1000);

// 
for (let index = 0; index < 1000; index++) {
    console.log("last message" + index);
}

