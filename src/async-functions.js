const giveItBackLater = (value, callback) => {
  setTimeout(() => callback(value), 100);
}

const addSomePromises = somePromise => {
  somePromise
    .then(promise => promise)
    .then(result = new Promise((resolve, reject) => {
      if (condition) {
        resolve();
      } else {
        reject();
      }
    }))
}

const promiseToGiveItBackLater = value => {
  return new Promise(resolve => {
    giveItBackLater(value, input => { console.log(input) })
    resolve(value);
  });
}

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater }


// Calling addSomePromises(somePromise) should chain one or more promises to the somePromise and return the last one. Your code should add both a fulfillment handler and a rejection handler.

// When somePromise resolves with a string, for example "foo", then the returned promise should resolve with a string "foofoo".
// When somePromise is rejected with a string, for example "bar", then the returned promise should resolve with "barbarbar".
// So, your fulfillment handler should double the string and the rejection handler should triple the string. The testing code will reject or resolve the provided somePromise with a string value, and inspect what your returned promise resolves with.