/*
DEFENITION: What is a promise?
 - Object that keeps track wether a certain event has happened already or not
 - Determines what happens after the event has happened
 - implements the concept of a future value we're expecting


 PROMISE STATES:
 Pendding ---> event happens --->  Settled / Resolved  ( fulfilled or rejected)
  use callbacks for fullfilment or rejection of promises

  A promise is just another Javascript object and we initialize it the same way as anything else, using the new keyword  `new Promise()`
*/

/*
  Accepts a callback as an argument, which is called the executer function

  the executer function takes in 2 argument, resolve and reject callbacks -- because the executer is used to tell the promise if it is successful or not and run the callback that is appropriate
*/
const getIds = new Promise((resolve, reject) => {
  // fake the call to the api via the browser
  setTimeout(() => {
    // call the resolve function in case the event is successful, which takes an argument, which is the result of the promise. this is how we return a value from a promise
    resolve([343, 544, 877, 203]);
  }, 1500);
});

// Consume the promise with the then() & catch() which adds an event handler to the promise
getIds.then(id => {
  console.log(id);
});
