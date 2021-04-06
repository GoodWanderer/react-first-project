import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`

const QuantityInput = styled.input`
  width: 160px;
  height: 40px;
  font-size: 20px;
  padding: 0 15px;
  border: 3px solid ${props => props.border};
  :focus {
    outline-color: ${props => props.border};;
  }
` 

const Span = styled.span`
  display: block;
  font-size: 20px;
  margin: 0 0 15px;
`

export default class Quantity extends Component {
  
  state = {
    min: 0,
    max: 9999999,
    qmin: 'black',
    qmax: 'black'
  }

  changeQuantityMin = (e) => {
    let value = e.target.value;
    if (value === '') { value = 0 } 
    if (value <= this.state.max && value >= 0) {
      const quantitymin = value;
      this.setState({min: quantitymin, qmin: 'black'})
      this.props.changeQuantityMin(quantitymin)
    } else {
      this.setState({
        qmin: 'red'
      });
    }
  }

  changeQuantityMax = (e) => {
    let value = e.target.value;
    if (value === '') { value = 9999999 }
    if (value >= this.state.min) {
      const quantitymax = value;
      this.setState({max: quantitymax, qmax: 'black'})
      this.props.changeQuantityMax(quantitymax)
    } else {
      this.setState({
        qmax: 'red'
      });
    }
  }

  render() {
    const {active, setActive} = this.props;
    return (
      <div>
        <Span>Сортировать по количеству</Span>
        <Row>
          <span>От: </span>
          <QuantityInput border={this.state.qmin} type="text" placeholder="0" onChange={this.changeQuantityMin}/>
          <span>До:</span>
          <QuantityInput border={this.state.qmax} type="text" onChange={this.changeQuantityMax}/>
        </Row>
      </div>
    );
  }
}
