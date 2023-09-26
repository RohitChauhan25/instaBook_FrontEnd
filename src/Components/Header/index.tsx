import React from 'react'
import { NavTitle } from '../../Constant/navbarData'
import logo from '../../Assets/images/QuickStore.png'
import {
  WishList,
  Container,
  NavContainer,
  Title,
  LogoWrapper,
  CartWrapper,
} from '../../Styles/Header'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { BsHandbag } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const tab = useSelector((state: any) => state?.headerReducer?.tab)

  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" height={80} width={250} />
      </LogoWrapper>
      <NavContainer>
        {NavTitle?.map((item, index) => (
          <nav>
            <ul>
              <li>{/* <Link to="/">Home</Link> */}</li>
            </ul>
          </nav>
        ))}
      </NavContainer>
      <CartWrapper>
        <WishList>
          <BiUser size="2vw" className="icon" />
          Profile
        </WishList>
        <WishList>
          <AiOutlineHeart size="2vw" className="icon" /> Wishlist
        </WishList>
        <WishList>
          <BsHandbag size="2vw" className="icon" />
          Cart
        </WishList>
      </CartWrapper>
    </Container>
  )
}

export default Header
