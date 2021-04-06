import React, { Component } from 'react';
import ItemDetail from '../cart/cart'

import styled from 'styled-components';
import Row from '../castomStyles/row';
import GetData from '../../services/getData';

const Wrpapper = styled.div`
  margin: 25px 0 0;
  > span {
    font-size: 20px
  }
`

const RowList = styled(Row)`
  margin: 25px 0 0;
`;

class CartList extends Component {

  renderItems(cards) {
    return cards.map(item => {
      return <ItemDetail key={item.id} data={item} delCart={this.props.delCart} editCart={this.props.editCart}/>
    })
  }

  render() {
    const { cards } = this.props;
    if (!cards) { return <span></span>}

    const card = this.renderItems(cards);

    return (

      <Wrpapper>
        <span>Товары:</span>
        <RowList>
          {card}
        </RowList>
      </Wrpapper>
    );
  }
}

export default CartList;