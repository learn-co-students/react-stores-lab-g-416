import counterStore from '../stores/counterStore';

module.exports = {
  increment: () => counterStore.increment(),
  decrement: () => counterStore.decrement()
};
