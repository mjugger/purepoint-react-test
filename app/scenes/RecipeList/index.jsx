import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
//const styles = require('./styles.styl');
import * as RecipeListActions from './actions';
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
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

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  componentDidMount() {}

  handleOnChange(value) {
    this.setState({searchTerm: value}, () => {
      this.handleSearch(value);
    });
  }

  handleSearch(searchTerm) {
    const { actions } = this.props;
    if (searchTerm) {
      actions.recipeContainsNameRequested(searchTerm);
    }
  }

  renderRecipeCell(recipes) {
    return recipes.map((recipe, i) => {
      return (
        <TableRow key={`recipe-${i}`}>
          <TableCell component="th" scope="row">
            {recipe.title}
          </TableCell>
          <TableCell numeric>{recipe.ingredients}</TableCell>
        </TableRow>
      );
    });
  }

  render() {
    const { recipes } = this.props;
    const { searchTerm } = this.state;
    return (
      <Grid
        className="recipe-list-container"
        container
        spacing={0}
        alignItems="center"
        direction="column"
        justify="center"
      >
        <Grid
          container
          alignItems="flex-end"
          justify="center"
        >
          <Grid item xs={6}>
            <form className="search-form">
              <TextField
                className="search-field"
                fullWidth
                id="recipeSearch"
                label="search term"
                autoComplete="current-password"
                margin="normal"
                onChange={(event) => this.handleOnChange(event.target.value)}
              />
            <div>
              <Button variant="outlined" color="primary" onClick={() => this.handleSearch(searchTerm)}>
                SEARCH
              </Button>
            </div>
            </form>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
        >
          <Grid item xs={8}>
            <Table className="recipe-list">
              <TableHead>
                <TableRow>
                  <TableCell className="header-title">Recipe Name</TableCell>
                  <TableCell className="header-title">Ingredients</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.renderRecipeCell(recipes)}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

RecipeList.propTypes = {
  actions: PropTypes.object.isRequired,
  recipes: PropTypes.array.isRequired,
  error: PropTypes.string
}

function mapStateToProps(state) {
  return {
    recipes: state.RecipeListReducer.recipes,
    error: state.RecipeListReducer.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RecipeListActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);
