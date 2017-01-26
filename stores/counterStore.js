const Store = require('../stores/Store');

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
  constructor (props) {
    super(props);
    this.state = 0;
  }

  decrement(){
    this.state -= 1;
  }

  increment(){
    this.state += 1;
  }
}

module.exports = new CounterStore();
