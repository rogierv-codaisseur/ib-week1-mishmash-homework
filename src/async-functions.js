const giveItBackLater = (value, callback) => {
  setTimeout(() => callback(value), 42);
};

const addSomePromises = somePromise => {
  return somePromise
    .then(value => value.repeat(2))
    .catch(value => value.repeat(3));
};

const promiseToGiveItBackLater = value => {
  return new Promise(resolve => {
    giveItBackLater(value, input => input)
    resolve(value);
  });
};

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater };