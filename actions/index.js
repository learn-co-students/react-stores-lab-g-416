const counterStore = require('../stores/counterStore');

function decrement(){
  counterStore.decrement();
}

function increment(){
  counterStore.increment();
}

module.exports = {
  // Your implementation here.
  // Hint: We need two actions!

  increment,
  decrement
};
