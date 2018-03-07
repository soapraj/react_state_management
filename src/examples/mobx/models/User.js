import { observable, action, extendObservable } from 'mobx';

class User {
  constructor () {
    extendObservable(this, {
      name: '',
      loading: false,
      updateStore: action(name => {
        this.name = name;
      }),
      clearStore: action(() => {
        this.name = '';
      }),
      fetchStore: action(() => {
        this.loading = true;

        let self = this;
        fetch("https://randomuser.me/api/").then(response => response.json()).then(function(result){
          const name = result.results[0].name.title + result.results[0].name.first + result.results[0].name.last
          self.name = name;
          self.loading = false;
        });
      })
    });
  }
}

export default User;
