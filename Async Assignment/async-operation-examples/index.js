"use strict";
//                               Async Assignment
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Task No1: 
// **create a function called "getData" that returns a promise and using setTimeout with a 1-second delay:
let getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Fetched Successfully!");
        }, 1000);
    });
};
getData()
    .then((res) => {
    console.log(res);
})
    .catch((error) => {
    console.log(error);
});
//                             XXXXXXXXXXXXXXXXXXXX   
// Task No2: 
// **implement `getUserData` using a callback function for fetching data 
// asynchronously, and then refactor it using `async` and `await`!
let getUserData = (callback) => {
    setTimeout(() => {
        let userData = "User data fetched asynchronously with callbacks";
        callback(userData);
    }, 1000);
};
let getUserDataAsyn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userData = "User data fetched asynchronously with async/await";
            resolve(userData);
        }, 1000);
    });
};
getUserDataAsyn()
    .then((res) => {
    console.log(res);
})
    .catch((error) => {
    console.log(error);
});
//                             XXXXXXXXXXXXXXXXXXXX   
// Task No3:
// **write a function in JavaScript that returns a Promise and resolves with an object after a delay of 2 seconds.
let delayedObject = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: "Object resolved after 2 seconds" });
        }, 2000);
    });
};
delayedObject()
    .then((res) => {
    console.log(res);
});
//                             XXXXXXXXXXXXXXXXXXXX   
// Task No4: 
// **write a callback function that simulates an asynchronous operation with a delay of 3 seconds:
let simulateAsyncOperation = (callback) => {
    setTimeout(() => {
        callback();
    }, 3000);
};
console.log("Starting asynchronous operation...");
simulateAsyncOperation(() => {
    console.log("Asynchronous operation completed after 3 seconds.");
});
//                             XXXXXXXXXXXXXXXXXXXX   
// Task No5: 
// **create an async function that uses ‘setTimeout’ to delay for 2.5 seconds and then prints a message:
let delayAndPrintMessage = () => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise(resolve => setTimeout(resolve, 2500));
    console.log("Message after 2.5 seconds");
});
delayAndPrintMessage();
