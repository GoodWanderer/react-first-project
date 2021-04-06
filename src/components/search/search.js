import React, { Component } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  font-size: 24px;
  padding: 0 30px;
  margin: 0 0 35px 0;
`

export default class Search extends Component {

  changesearch = (e) => {
    const term = e.target.value;
    this.props.changesearch(term)
  }

  render() {
    return (
      <SearchInput type="text" placeholder="Поиск товара" onChange={this.changesearch} />
    );
  }
}