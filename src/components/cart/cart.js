import React, { Component } from 'react';
import styled from 'styled-components';

const Cart = styled.div`
  width: 200px;
  background-color: #bcc;
  text-align: center;
  padding: 0 0 25px 0;
`

const Span = styled.span`
  display: block;
  margin: 20px auto;
`

export default class ItemDetail extends Component {

  delCart = () => {
    this.props.delCart(this.props.data.id)
  }

  editCart = () => {
    this.props.editCart(this.props.data.id, this.props.data)
  }

  render() {
    const {title, description, quantity} = this.props.data;
    return (
      <Cart>
        <Span>{title}</Span>
        <Span>{description}</Span>
        <Span>Кол-во: {quantity}</Span>
        <button onClick={this.editCart}>Редактировать</button>
        <button onClick={this.delCart}>Удалить</button>
      </Cart>
    );
  }
}