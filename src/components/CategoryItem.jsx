import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { medium } from '../responsive'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${medium({ height: "20vh" })};
`

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
`

const Button = styled(Link)`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  transition: all 300ms ease;
  text-decoration: none;

  :hover {
    background-color: #ddd;
  }
`

function CategoryItem({item}) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button to={`/products/${item.cat}`}>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
