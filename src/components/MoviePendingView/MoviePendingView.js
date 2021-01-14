import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class MoviePendingView extends Component {
  render() {
    return <Loader type="Grid" color="#e50914" height={60} width={60} />;
  }
}
