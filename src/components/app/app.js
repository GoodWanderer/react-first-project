import React, { Component } from 'react';
import styled from 'styled-components';

import GetData from '../../services/getData';
import AddCart from '../addCart/addCart';
import CartList from '../cartList/cartList';
import Row from '../castomStyles/row';
import EditCart from '../editCart/editCart';
import Modal from '../modal/modal';
import PlusBtn from '../plusBtn/plusBtn';
import Quantity from '../quantity/quantity';
import Search from '../search/search';



const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
  padding: 30px 0 0;
`

export default class App extends Component {

  state = {
    cards: null,
    term: '',
    id: '',
    quantitymin: 0,
    quantitymax: 9999999,
    modalActive: false,
    content: ''
  }

  componentDidMount() {
    const getdata = new GetData;
    getdata.getAllCarts()
      .then(cards => {
        this.setState({
          cards
        })
      });
  };

  changesearch = (term) => {
    this.setState({
      term
    });
  }

  changeQuantityMin = (quantitymin) => {
    this.setState({
      quantitymin
    });
  }

  changeQuantityMax = (quantitymax) => {
    this.setState({
      quantitymax
    });
  }

  validCart = () => {

    let { term, quantitymin, quantitymax, cards } = this.state;
    if (cards == null || cards.length === 0) {
      return cards
    }
    if (!quantitymax) {
      quantitymax = 9999999;
    }
    return cards.filter((item) => {
      if (item.title.indexOf(term) > -1 && item.quantity >= quantitymin && item.quantity <= quantitymax) {
        return item;
      }
    });
  }

  delCart = (id) => {
    this.setState({
      content: 'delete',
      id
    })
    this.toggleActiveModal()
  }

  delCartConfirm = () => {
    this.toggleActiveModal()
    const getdata = new GetData;
    getdata.delCart(this.state.id)
      .then(cards => {
        this.setState({
          cards,
          id: ''
        })
      });
  }

  toggleActiveModal = () => {
    this.setState({
      modalActive: !this.state.modalActive
    })
    const getdata = new GetData;
    getdata.getAllCarts()
      .then(cards => {
        this.setState({
          cards
        })
      });
  };

  addCart = () => {
    this.setState({
      content: 'add'
    })
    this.toggleActiveModal()
  }

  editCart = (id) => {
    this.setState({
      content: 'edit',
      id
    })
    this.toggleActiveModal()
  }

  content = () => {
    switch (this.state.content) {
      case 'add':
        return <AddCart toggleActiveModal={this.toggleActiveModal} />

      case 'delete':
        return (
          <div>
            <p>Вы точно хотите удалить?</p>
            <button onClick={this.delCartConfirm}>Да</button>
            <button onClick={this.toggleActiveModal}>нет</button>
          </div>
        );

      case 'edit':
        return <EditCart toggleActiveModal={this.toggleActiveModal} id={this.state.id}/>


      default:
        return <span>Ошибка</span>
    }
  }

  render() {

    const cards = this.validCart()

    return (
      <Wrapper>
        <Search changesearch={this.changesearch} />
        <Row>
          <Quantity changeQuantityMin={this.changeQuantityMin} changeQuantityMax={this.changeQuantityMax} />
          <PlusBtn addCart={this.addCart} />
        </Row>
        <CartList cards={cards} delCart={this.delCart} editCart={this.editCart}/>
        <Modal active={this.state.modalActive} toggleActiveModal={this.toggleActiveModal}>
          {this.content()}
        </Modal>
      </Wrapper>
    )
  }
}