import React, { Component } from 'react';
import GetData from '../../services/getData';

export default class EditCart extends Component {

  state = {
    data: {
      id: '',
      title: '',
      description: '',
      quantity: ''
    }
  }

  componentDidMount() {

  }

  componentDidUpdate() {

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

  onPut = () => {
    const getdata = new GetData;
    getdata.putcart(this.state.data.id, this.state.data)
    .then(this.props.toggleActiveModal);
  }

  render() {

    const {data} = this.state;

    const {id} = this.props;

    if (id != data.id) {
      const getdata = new GetData;
      getdata.getcart(id)
        .then(({title, description, quantity}) => {
          this.setState({
            data: {id, title, description, quantity}
          })
        });
    }

    return (
      <>
        <input type="text" placeholder="Заголовок" value={data.title} onChange={this.onchangeTitle}/>
        <input type="text" placeholder="Описание" value={data.description} onChange={this.onchangeDescription}/>
        <input type="text" placeholder="Количество" value={data.quantity} onChange={this.onchangeQuantity}/>
        <button onClick={this.onPut}>Добавить</button>
        <button onClick={this.props.toggleActiveModal}>Отменить</button>
      </>
    );
  }
}