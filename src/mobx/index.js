import { observable, action, configure } from 'mobx';
let number = 1;

configure({ enforceActions: true });
class Store {
  @observable number = 0;
  @action add = () => {
    console.log('number', number);
    this.number++;
  };
}

export default Store;
