/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/weather-redux/src/containers/search-bar.js
 */

import _ from "lodash";
import React, { Component } from "react";
import { Form, Button, Input, Grid, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/actions-root";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => {
    this.setState({
      isLoading: false,
      searchTerm: ""
    });
  };

  handleResultSelect = (e, { result }) =>
    this.setState({
      searchTerm: result.title
    });

  // onSearchChange = (e, { value }) => {
  //   this.setState({
  //     isLoading: true,
  //     searchTerm: value
  //   });
  //   this.props.fetchWeather(this.state.searchTerm);

  //   //this.props.onSearchTermChange(value);

  //   this.setState({ isLoading: false });
  // };

  onSubmit = (e, x) => {
    console.log(e);
    // this.setState({
    //   isLoading: true,
    //   searchTerm: value
    // });
    this.props.fetchWeather(this.state.searchTerm);

    //this.props.onSearchTermChange(value);

    this.setState({ isLoading: false });
  };

  render() {
    const { isLoading, searchTerm, results } = this.state;
    return (
      <Grid>
        <Grid.Column width={8}>
          <Form onSubmit={this.onSubmit}>
            <Input
              fluid
              // onChange={_.debounce(this.onSearchChange, 5000, {
              //   leading: true
              // })}
              onChange={e => this.setState({ searchTerm: e.target.value })}
              icon={
                <Icon
                  onClick={this.onSubmit}
                  name="search"
                  inverted
                  circular
                  link
                />
              }
              //icon="search"
              placeholder="Get a five-day forecast in your favorite cities"
            />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
