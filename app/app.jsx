import React, { Component } from 'react';
import Routes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './global/components/Header';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        {Routes}
      </React.Fragment>
    );
  }
}
export default App;
