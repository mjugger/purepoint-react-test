import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
//const styles = require('./styles.styl');
import * as HelloWorldActions from './actions';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  Dialog,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Typography,
  Paper,
  Grid
} from '@material-ui/core';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.helloWorldRequested();
  }

  render() {
    const { helloWorld } = this.props;
    return (
      <Grid
        className="hello-world-container"
        container
        spacing={0}
        alignItems="center"
        direction="row"
        justify="center"
      >
        <Grid item xs={4}>
          <Paper elevation={4} className="hello-world-Paper">
            <Typography variant="headline" component="h3">
              {helloWorld}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

HelloWorld.PropTypes = {
  actions: PropTypes.object.isRequired,
  helloWorld: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    helloWorld: state.HelloWorldReducer.helloWorld,
    error: state.HelloWorldReducer.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HelloWorldActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorld);
