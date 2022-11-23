import React from 'react'
import PageHero from '../components/PageHero';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <main>
      <PageHero title={"cart"}/>
      <Wrapper>

      </Wrapper>
    </main>
  )
}
const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;


export default CartPage