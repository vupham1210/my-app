import {useEffect, useState} from 'react';
import {Link, useLocation } from "react-router-dom";
import { useAppDispatch } from '../app/hooks';
import {showModal, ShowModalState} from '../api/ModalSearch';
import {showMobileMenu , ShowMobileMenuState} from '../api/MobileMenuSlice';
import { useSelector } from 'react-redux';
import { Container, Navbar , Button, Modal} from 'react-bootstrap';
import { SearchOutline } from "react-ionicons";

import logo from '../imgs/logo.png';
import SearchForm from './searchForm';
import Styled, { createGlobalStyle }  from 'styled-components';
import { Navigation, Buger } from './Navigation';
import {useWindowWidth} from "@react-hook/window-size";

const SearchNavigation = () => {
  return (
    <SearchContainer>
        <SearchForm />
    </SearchContainer>
  )
}

const Header = () => {

  const dispatch = useAppDispatch();
  const isShowModal = useSelector(ShowModalState);
  const isMobileShow = useSelector(ShowMobileMenuState);
  const location = useLocation();
  const width:number = useWindowWidth();
  const [fixed, setFixed] = useState<boolean>(false);

  useEffect(() => {
    window.onscroll = (e:any) => {
      window.scrollY > 300 ? setFixed(true) : setFixed(false);
    }
  })

  useEffect(() => {
    dispatch(showModal(false));
    dispatch(showMobileMenu(false));
  },[dispatch, location.pathname])

 const handleClose = () => dispatch(showModal(false));
  
  return(
    <>  
      <GlobalStyle />
        <HeaderContainer className={ fixed ? 'fixed' : '' }>
            <Navbar className='align-items-center justify-content-between'>
              <Navbar.Brand href="#home">
                <Link to={'/'}>
                  <img src={logo} height={'60px'} className="App-logo" alt="logo" />
                </Link>
              </Navbar.Brand>
              {width <= 855 ? "" : <Navigation /> }
              <FlexButton>
                <Button variant='outline-dark' onClick={() => dispatch(showModal(isShowModal ? false : true))}>
                  <SearchOutline color={'white'}/> 
                </Button>
                {width <= 855 ? <Buger /> : '' }
              </FlexButton>
            </Navbar> 
        </HeaderContainer>
        <Modal 
          show={isShowModal} 
          onHide={handleClose} 
          animation={true}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="fw-bolder">Tìm kiếm giao diện mẫu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SearchNavigation />  
          </Modal.Body>
        </Modal>
      </>
  );
  
}

export default Header;
export const FlexButton = Styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  collumn-gap: 10px;
`;
export const HeaderContainer = Styled.div`
  background: black;
  border-bottom: 2px solid #585442;
  &.fixed{
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%
  }
`
export const SearchContainer = Styled.div`
  width: 100%;
  margin: auto;
`;
export const SwitchContainer = Styled.div`
  width: 80%;
`;
const GlobalStyle = createGlobalStyle`
  .selection{
    max-width: 200px;
  }
  .enter {
     & > div , > span {
      opacity: 0;
      transform: translateY(-100%);
     }
  }
  .enter-active {
    & > div , > span {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  .enter-exit {
    & > div , > span {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  .exit-active {
    &  > div , > span{
      opacity: 0;
      transform: translateY(100%);
    }
  }
  .enter-active , .exit-active {
    & > div, > span {
      transition: all .5s ease-in-out;
    }
  }
`