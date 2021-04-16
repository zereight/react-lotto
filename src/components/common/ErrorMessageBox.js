import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Text = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 0;
`;
export default class ErrorMessageBox extends Component {
  render() {
    return <Text>{this.props.text}</Text>;
  }
}

ErrorMessageBox.propTypes = {
  text: PropTypes.string.isRequired,
};