import React from 'react';
import styled from 'styled-components'

const Add = styled.div`
  font-size: 50px;
  background-color: green;
  margin: auto 0 0;
  border-radius: 50%;
  padding: 0 15px;
  cursor: pointer;
`

const PlusBtn = ({addCart}) => (
  <Add onClick={addCart}>+</Add>
);

export default PlusBtn;