import AppMenu from "../components/AppMenu";
import styled from "styled-components";
import portfolioAvatar from "../assets/images/MyPhoto.jpg"
import {AppButtonStyled} from "../components/ui/AppButton.styled";
import Icons from "../components/icons/Icons";

export default function AppHeader(){
    return(
        <AppHeaderStyled>
            <div className="container">
                <div className="leftSide"></div>
                <div className="rightSide"></div>
            </div>

            <AppMenu />
            <InformationAboutPersonStyled >
                <h1>Hello! <br/> I’m Suren Poghosyan</h1>
                <p>
                    I’am freelance <span>web developer</span> based in Indonesia who loves to craft attractive design experiences for the web.
                </p>
                <ConnectionWithPerson>
                    <AppButtonStyled
                        paddingBlock="20px" paddingInline={"40px"}
                    >
                        <Icons
                            nameLogo="email"
                            width="18"
                            height="14"
                        />
                        Email me
                    </AppButtonStyled>
                    <a href="#"><Icons nameLogo="download" width="20px" height="20px"/> Download CV</a>
                </ConnectionWithPerson>
            </InformationAboutPersonStyled>
        </AppHeaderStyled>
    )
}

const ConnectionWithPerson = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  a{
    color: white;
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 6px;
  }
 
`
const InformationAboutPersonStyled = styled.div`
  position: absolute;
  padding-inline: 120px;
  top: 50%;
  transform: translateY(-50%);
  
  h1 {
    font-size: 90px;
    font-weight: bold;
    color: white;
    font-family: "PlayfairDisplay", "sans-serif";
  }
  
  p {
    width: 400px;
    font-size: 20px;
    line-height: 34px;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.5);
  }

  p span {
    color: white;
  }
`

const AppHeaderStyled = styled.header`
 
  position: relative;
  height: 760px;
  width: 100%;
  .container {
    display: flex;
    height: 100%;
    .leftSide,
    .rightSide {
      flex: 1;
      background-size: cover;
      background-position: center;
    }
    .leftSide {
      background:#222A36;
    }

    .rightSide {
      background-image: url(${portfolioAvatar});
      background-position-y: center;
    }
  }
`;
