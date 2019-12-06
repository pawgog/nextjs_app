import React, { Component } from 'react';
import Head from 'next/head';
import 'isomorphic-unfetch';

import BatmanBox from '../components/batmanBox';
 
 
export default class Movies extends Component {
  static async getInitialProps() {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const json = await response.json();
 
    return { movies: json }
  }
 
  render() {
    return (
      <div>
        <Head>
            <title>Next routing</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {this.props.movies.map((movie, index) => (
          <BatmanBox
            key={index}
            movie={movie}
          />
        ))}
      </div>
    )
  }
}