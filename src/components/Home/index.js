import React from "react";
import {connect} from "react-redux";
import styled from "styled-components";
import {BaseButton} from "../../style/GlobalButtons";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const Nav = styled.div`
  width: 95%;
  height: 10%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
  color: #606060;
  }
`

const LogoDiv = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 40px;
      color: #00B995;
      font-weight: bold;
      margin-right: 5px;
    }
    h1 {
      color: #00B995;
      font-size: 40px;
      margin-top: 5px;
      
    }
`



const Login = styled(BaseButton)`
  padding: 10px 20px;
  background-color: #00B995;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  
`


const Home = ({videoReducer: {data}}) => {


    return (
        <PageContainer>
            <Nav>
                <LogoDiv>
                    <span id="nav-toggle" href="#">&#9776;</span>
                    <h1>CareerFairy</h1>
                </LogoDiv>
                <h1>NEXT LIVE STREAMS</h1>
                <h1>PAST LIVE STREAMS</h1>
                <h1>WISHLIST</h1>
                <Login>Login</Login>
            </Nav>
        </PageContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        videoReducer: state.videoReducer,
    };
};

export default connect(mapStateToProps)(Home);
