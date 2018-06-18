import React, { Component } from 'react';
import {
  Button,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Grid
} from '@material-ui/core';

class SiteHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar className="header">
        <Toolbar>
          <Typography variant="title" color="inherit">
             Recipe finder
           </Typography>
           <Button color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default SiteHeader;
