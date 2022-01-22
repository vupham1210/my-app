import React, {useEffect, useState} from 'react';
import {Link, useLocation } from "react-router-dom";
import { useAppDispatch } from '../app/hooks';
import {showModal, ShowModalState} from '../api/ModalSearch';
import { useSelector } from 'react-redux';
import { Container, Navbar, Nav, Button, Modal} from 'react-bootstrap';
import { SearchOutline, ChevronDownOutline } from "react-ionicons";

import logo from '../imgs/logo.png';
import SearchForm from './searchForm';
import Styled, { css, createGlobalStyle }  from 'styled-components';

import { SwitchTransition, CSSTransition } from "react-transition-group";

const Navigation = () => {
  return(
      <Nav
        className='align-items-center'
        activeKey="/"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
      <Nav.Item>
        <Nav><Link className='px-3 text-light text-decoration-none' to={"/"} state="page">Trang chủ</Link></Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav><Link className='px-3 text-light text-decoration-none ' to={"/about"} state="page">Giới thiệu</Link></Nav>
      </Nav.Item>
      <NavItemsDropDown className={'nav-item position-relative rotationDropdown'}>
        <Nav>
          <Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Dịch vụ</Link>
            <ChevronDownOutline color={'white'}/>
          </Nav>
        <Nav.Item className="rotationDropdownItems">
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Thiết kế website</Link></Nav>
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Quản trị webiste</Link></Nav>
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Marketing Online</Link></Nav>
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Google Ads</Link></Nav>
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Viết bài chuẩn Seo</Link></Nav>
        </Nav.Item>
      </NavItemsDropDown>
      <Nav.Item>
        <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Bảng giá</Link></Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav><Link className='px-3 text-light text-decoration-none' to={"/contact"} state="page">Liên hệ</Link></Nav>
      </Nav.Item>
      <NavItemsDropDown className={'nav-item position-relative rotationDropdown'}>
        <Nav>
          <Link className='px-3 text-light text-decoration-none' to={"/giao-dien-mau"} state="page">Giao diện website mẫu</Link>
            <ChevronDownOutline color={'white'}/>
          </Nav>
        <Nav.Item className="rotationDropdownItems">
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Mẫu website bán hàng</Link></Nav>
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Mẫu website giới thiệu</Link></Nav>
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Mẫu website thời trang</Link></Nav>
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Mẫu website BĐS</Link></Nav>
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Mẫu website du lịch</Link></Nav>
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Mẫu website Khách sạn</Link></Nav>
            <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Mẫu website xây dựng</Link></Nav>
        </Nav.Item>
      </NavItemsDropDown>
      <Nav.Item>
        <Nav><Link className='px-3 text-light text-decoration-none' to={"/home"} state="page">Các dự án</Link></Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav><Link className='px-3 text-light text-decoration-none' to={"/contact"} state="page">Liên hệ</Link></Nav>
      </Nav.Item>
    </Nav>
  );
}

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
  const location = useLocation();

  useEffect(() => {
    dispatch(showModal(false));
  },[dispatch, location.pathname])

  const handleClose = () => dispatch(showModal(false));

  return(
    <>  
        <GlobalStyle />
        <HeaderContainer>
          <Container>
            <Navbar className='align-items-center justify-content-between'>
              <Navbar.Brand href="#home">
                  <img src={logo} height={'60px'} className="App-logo" alt="logo" />
              </Navbar.Brand>
              <Navigation />
              <Button variant='outline-dark' onClick={() => dispatch(showModal(isShowModal ? false : true))}>
                 <SearchOutline color={'white'}/> 
              </Button>
            </Navbar> 
            </Container>
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

export const HeaderContainer = Styled.div`
  background: black;
  border-bottom: 2px solid #585442;
`
const Rotation = () => {
  let styles = '';
  
  for (let i = 0; i < 10; i += 1) {
     styles += `
      &:hover {
       & > .rotationDropdownItems div:nth-child(${i + 1}) {  
          visibility: visible;
          transform: rotateY(0);
          opacity: 1;
          transition: all .5s ease-in-out;
          transition-delay: ${i*50 + 50}ms;
        }
      }
      & > {
        & .rotationDropdownItems div:nth-child(${i + 1}) {  
          transform: rotateY(180deg);
          background: white;
          opacity: 0;
          transform-style: preserve-3d;
          transition: all .5s ease-in-out;
          transition-delay: ${i*50 + 50}ms;
          margin-bottom: 1px;
            a {
              color: black !important;
              padding: 10px;
              width: 100%;
              transition: .3s ease-in-out;
              &:hover{
                background: black;
                color: white !important;
              }
          }
        }
      }
     `
  }

  styles += `&:hover {
                & svg{
                transform: rotate(180deg);
                transition: all .5s ease-in-out;
                }
              } 
            & svg{
              transform: rotate(0deg);
              transition: all .5s ease-in-out;
            } 
         `;

  return css`${styles}`;
}


export const NavItemsDropDown = Styled.div`
  & .rotationDropdownItems{
    position: absolute;
    top: 30px;
    left: -15px;
    z-index: 9;
    width: 240px;
    pointer-events: none;
  }
  &:hover .rotationDropdownItems{
    pointer-events: all;
  }
  ${Rotation()}
`;
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