import {Component} from 'react';
import createform from './Form/form.js';

class App extends Component {

  render()
  {
    var form;
    form = new createform();
    return (
    form.create()
  );
  }

}
export default App;


