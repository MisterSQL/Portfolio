import Icons from "./icons/Icons";
import styled from "styled-components";
import {AppButtonStyled} from "./ui/AppButton.styled";

export default function AppMenu(){
    return(
        <>
            <StyledNavigationMenu>
                <Icons nameLogo="logo" />
                <StyledListNavigation>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                </StyledListNavigation>
                <AppButtonStyled> Contact Me </AppButtonStyled>
            </StyledNavigationMenu>
        </>
    )
}

const StyledNavigationMenu = styled.nav`
  position: absolute;
  top: 0;
  
  margin-top: 10px;
  padding-inline: 120px;
  padding-block: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const StyledListNavigation = styled.ul`
  list-style-type: none;
  display: flex;
  li + li {
    margin-left: 40px;
  }
  a {
    font-family: "Poppins","sans-serif";
    text-decoration: none;
    color: white;
  }
`