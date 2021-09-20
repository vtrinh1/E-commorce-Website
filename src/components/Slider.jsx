import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {sliderItems} from '../data'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 1300px) {
    display: none;
  }
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  cursor: pointer;
  margin: auto;
  opacity: 0.5;
  z-index: 2;
  transition: all 300ms ease;

  :hover {
    background-color: #fff;
    opacity: 0.8;
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props)=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 91vh;
  display: flex;
  align-items: center;
  background-color: #${(props)=>props.bg};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 100%;
`

const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`

const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled(Link)`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: all 300ms ease;
  text-decoration: none;
  color: black;
  border: 1px solid;

  :hover {
    background-color: #fff;
  }
`



function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if(direction==="left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 )
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
        <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <Button to='productList'>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
