import React, { Component } from 'react';
import GetData from '../../services/getData';


export default class AddCart extends Component {

  state = {
    data: {
      title: '',
      description: '',
      quantity: ''
    }
  }

  onchangeTitle = (e) => {
    this.setState({
      data: {...this.state.data, title: e.target.value}
    })
  }

  onchangeDescription = (e) => {
    this.setState({
      data: {...this.state.data, description: e.target.value}
    })
  }

  onchangeQuantity = (e) => {
    this.setState({
      data: {...this.state.data, quantity: e.target.value}
    })
  }

  onAdd = () => {
    const getData = new GetData;
    getData.addCart(this.state.data)
    .then(this.props.toggleActiveModal)
    .then(this.setState({
      data: {title: '', description: '', quantity: ''}
    }))
  }

  render () {
    const {data} = this.state;
    return (
      <>
        <input type="text" placeholder="Заголовок" value={data.title} onChange={this.onchangeTitle}/>
        <input type="text" placeholder="Описание" value={data.description} onChange={this.onchangeDescription}/>
        <input type="text" placeholder="Количество" value={data.quantity} onChange={this.onchangeQuantity}/>
        <button onClick={this.onAdd}>Добавить</button>
        <button onClick={this.props.toggleActiveModal}>Отменить</button>
      </>
    );
  }
}