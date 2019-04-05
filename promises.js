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

const getBook = bookId =>
  new Promise((resovle, reject) => {
    setTimeout(
      id => {
        const book = { title: 'Learn Functional Programming with Elixir', publisher: 'Pragmatic Bookshelf' };
        resovle(`${id}: ${book.title}`);
      },
      1500,
      bookId // use the 3rd argument to pass in the variable to the timeout
    );
  });

const getRelated = publisher =>
  new Promise((resolve, reject) => {
    setTimeout(
      publisher => {
        const book2 = { title: 'Metaprogramming Elixir', publisher: 'Pragmatic Bookshelf' };
        resolve(`${publisher} : ${book2.title}`);
      },
      1500,
      publisher
    );
  });

// Consume the promise with the then() & catch() which adds an event handler to the promise
getIds
  .then(id => {
    console.log(id);
    // getBook(id[2]).then(); we could do this here, but that doesnt fix callback hell, instead we use promise chain instead we return a promise so we can chain on to it.

    return getBook(id[3]); // / we have to return a value or else the .next will not have access to the next value
  })
  .then(book => {
    console.log(book);
    return getRelated('Pragmatic Bookshelf');
  })
  .then(publisher => {
    console.log(publisher);
  })
  .catch(error => console.log('Error', error)); // since timers cant fail, it will not throw error, but try to comment this out and set resolved to reject
