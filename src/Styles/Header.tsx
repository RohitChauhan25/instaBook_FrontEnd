import exp from 'constants'
import styled from 'styled-components'

export const Container = styled.div`
  /* background-color: #189889; */
  /* background-color: #8fcbe0; */

  width: 100%;
  display: flex;
  gap: 100px;

  .nav-link > :hover {
    color: orange;
  }
  .rightSide {
    display: flex;
    grid-column: 4;
    justify-content: center;
  }
  .rightSide > button {
    cursor: pointer;
    border: none;
    margin-left: 1vw;
    background-color: transparent;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 40%;
  padding: 15px;
`
export const Title = styled.div<{ color: string }>`
  display: flex;
  font-weight: 600;
  text-decoration: ${(props) => (props.color ? `underline` : `none`)};
  color: ${(props) => (props.color ? `green` : `black`)};
  cursor: pointer;
  /* transition: color 2s ease-out 100ms; */
`
export const LogoWrapper = styled.div`
  padding-left: 50px;
  img {
    cursor: pointer;
  }
`

export const CartWrapper = styled.div`
  display: flex;
  margin-left: 100px;
  padding: 30px;
  gap: 30px;
  justify-content: flex-end;
  .icon {
    cursor: pointer;
  }
`
export const WishList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
`

export const CartButton = styled.button`
  sup {
    color: red;
    font-weight: bold;
    font-size: 1.2vw;
  }
`
