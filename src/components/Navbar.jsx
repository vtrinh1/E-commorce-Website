import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`

const Left = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })};
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 32px;
  ${mobile({ fontSize: "24px" })};
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`

const MenuItem = styled(Link) `
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`

function Navbar() {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <SearchIcon style={{color:"gray", fontSize:"16px"}}/>
            </SearchContainer>
          </Left>
          <Center>
            <Logo to='/'>
              TRINHS.
            </Logo>
          </Center>
          <Right>
            <MenuItem to='register'>REGISTER</MenuItem>
            <MenuItem to='login'>SIGN IN</MenuItem>
            <MenuItem to='cart'>
              <Badge badgeContent={3} color="primary">
                <ShoppingCartOutlined />
              </Badge>  
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
