import {Component} from 'react';
import run from './Form/form.js';

class App extends Component {

  render()
  {
  var r;
  r = new run();
  return (
    r.create()
  );
  }

}
export default App;
