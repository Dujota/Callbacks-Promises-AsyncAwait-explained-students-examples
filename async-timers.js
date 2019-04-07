document.addEventListener('DOMContentLoaded', () => {
  /*

  Example code of a plaing async function

  const second = () => {
    setTimeout(() => {
      console.log('Async Call - Hello There');
    }, 2000);
  };

  const first = () => {
    console.log('Say this first');
    second(); // first function calls our async function
    console.log('this shoudl be last');
  };

  first();
  */
  /* Traditional way of dealing with Asyncronous code.
   Let's build a resource reader, (simulate loading data from a remote server ) */

  function getBook() {
    // simulate the ajax call

    // first get a couple of ids
    setTimeout(() => {
      const booksId = [434, 343, 645, 898];
      console.log(booksId);

      // then get some books
      setTimeout(
        id => {
          const book = { title: 'Learn Functional Programming with Elixir', publisher: 'Pragmatic Bookshelf' };
          console.log(`${id}: ${book.title}`);

          // third callback to get the books by same publisher
          setTimeout(
            publisher => {
              const book2 = { title: 'Metaprogramming Elixir', publisher: 'Pragmatic Bookshelf' };
              console.log(`${publisher}: ${book2.title}`);
            },
            1500,
            book.publisher
          );
        },
        1500,
        booksId[2]
      ); // the 3rd argument to the set timeout is the argument if reqwuired for the callback function that is being passed into the timeout function
    }, 1500);
  }

  getBook();

  // This is an example of callback hell, which is basically chain of nested callbacks
});
