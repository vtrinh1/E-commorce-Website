import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { medium } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  ${medium({ height: "50px" })};
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${medium({ padding: "10px 0px" })};
`

const Left = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  ${medium({ display: "none" })}
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
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
`

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${medium({ textAlign: "start" })};
`

const Logo = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
  font-size: 32px;
  ${medium({ fontSize: "24px", paddingLeft: "10px" })};
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled(Link) `
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: black;
  ${medium({ fontSize: "12px", margin: "0px 10px" })};
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
