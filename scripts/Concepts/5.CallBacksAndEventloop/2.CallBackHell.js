// ---- Problems with CALLBACKS ---- 
 /* It creates pyramid of doom. 
    In simple , it created callback inside another callback. So its too difficult to debug and understand.
    So we call it has callback hell.

    So its like function inside functoin. To resolve this we go with promises.
 
 */

    function login(callback) {
    console.log("Logging in...");
    callback();
}

function getUser(callback) {
    console.log("Getting user details...");
    callback();
}

function getOrders(callback) {
    console.log("Getting user orders...");
    callback();
}

login(function () {
    getUser(function () {
        getOrders(function () {
            console.log("All tasks completed!");
        });
    });
});