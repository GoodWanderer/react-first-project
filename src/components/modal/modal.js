import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs()`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.opacity};
  pointer-events: ${props => props.pEvent};
  transition: 0.2s;
`


const Content = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  width: 50vw;
`

export default class Modal extends Component {

  render() {
    const { active, toggleActiveModal, children } = this.props;
    let opacity, pEvent;
    if (active) {
      opacity = 1;
      pEvent = `all`; 
    } else {
      opacity = 0;
      pEvent = `none`;
    }

    return (
      <Wrapper opacity={opacity} pEvent={pEvent} onClick={toggleActiveModal}>
        <Content onClick={e => e.stopPropagation()}>
          {children}
        </Content>
      </Wrapper>
    );
  }
}