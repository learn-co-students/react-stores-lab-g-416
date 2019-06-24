import Store from './Store';

class CounterStore extends Store {

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