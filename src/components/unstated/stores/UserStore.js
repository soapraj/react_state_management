import { Container } from 'unstated';

let User = {
  name: ''
};

class UserStore extends Container<User> {
  state = { name: '' };

  setName = name => {
    this.setState({ name: name });
  }

  getName = () => {
    return this.state.name;
  }

  clearStore = () => {
    this.setState({ name: '' });
  }

  fetchStore = () => {
    let self = this;
    fetch("https://randomuser.me/api/").then(response => response.json()).then(function(result){
      const name = result.results[0].name.title + result.results[0].name.first + result.results[0].name.last
      self.setName(name);
    });
  }
}

export default UserStore;
