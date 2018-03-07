import React, { Component } from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';

import {Model, Controller} from 'ringa';
import {attach} from 'react-ringa';

export const UserModel = Model.construct('UserModel', ['userName']);

class UserController extends Controller {
  constructor() {
    super();

    const userModel = this.addModel(new UserModel());
    
    this.addListener('fetchUser', [500, () => fetch("https://randomuser.me/api/").then(response => response.json()).then(function(result){
      userModel.userName = result.results[0].name.title + result.results[0].name.first + result.results[0].name.last
    })]);
  }
}

class Demo extends Component {
  constructor() {
    super();

    attach(this, new UserController());
  }

  render() {
      return (
        <div className="unstated container left">
          <div>{ 'Ringa' }</div>
          <div className="outerbox left">
            <ComponentOne />
            <ComponentTwo />
          </div>
          <div className="outerbox left">
            <ComponentThree />
            <ComponentFour />
          </div>
        </div>
      );
  }
}

export default Demo;
