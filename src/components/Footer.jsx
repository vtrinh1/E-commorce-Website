import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``
const Description = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${props => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`


function Footer() {
  return (
    <Container>
      <Left>
        <Logo>TRINHS.</Logo>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nobis ut, eius, nostrum eaque saepe modi dolores alias quaerat magni expedita reiciendis distinctio recusandae. Autem amet nesciunt deserunt unde quod?
        </Description>
        <SocialContainer>
          <SocialIcon bg="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Mens Fashion</ListItem>
          <ListItem>Womens Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>T&C</ListItem>
          <ListItem>Shipping</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}} />123 Sesame St, New York 992323</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}} /> +1 234 56 78</ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}} /> contact@trinhs.dev</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer