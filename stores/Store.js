class Store {
 constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }
  
   addListener(listener) {
    this.listeners.push(listener);
    const removeListener = () =>
      this.listeners = this.listeners.filter(cListener => cListener !== listener)
    return removeListener;
  }
  
  setState(newState) {
    this.state = newState;
    this.listeners.forEach(listener => listener(newState));
  }
  
   getState() {
    return this.state;
  }
}

module.exports = Store;
