import Store from './Store'

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!

  constructor() {
    super(0);
  }

  getState() {
    return this.state;
  }

  increment() {
    this.state++;
  }

  decrement() {
    this.state--;
  }
}

module.exports = new CounterStore();
