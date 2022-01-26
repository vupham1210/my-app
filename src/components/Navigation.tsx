import { MenuItems } from '../api/NavApi';
import Styled , {css, createGlobalStyle} from 'styled-components';
import { Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import { Nav, NavDropdown, Button} from 'react-bootstrap';
import { ChevronDownOutline , SearchOutline} from "react-ionicons";
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { showMobileMenu, ShowMobileMenuState } from '../api/MobileMenuSlice';
import { useEffect, useState } from 'react';

export const Navigation = () => {
  return(
    <Nav>
    {
      MenuItems.map((val:any, index:number) => {
        return(
          <Nav.Item key={index}>
            {
              val.submenu != undefined ?
              <NavItemsDropDown className={'nav-item position-relative rotationDropdown'}>
                <Nav>
                  <Link className='px-3 text-light text-decoration-none' to={val.path} state="page">{val.name}</Link>
                  <ChevronDownOutline color={'white'}/>
                </Nav>
                 <Nav.Item className="rotationDropdownItems">
                  {
                    val.submenu.map((val:any, index:number) => {
                      return(
                        <Nav key={index}><Link className='px-3 text-light text-decoration-none' to={val.path} state="page">{val.name}</Link></Nav>
                      );
                    })
                  }
                  </Nav.Item>
              </NavItemsDropDown>
              : <Nav>
                  <Link className='px-3 text-light text-decoration-none' to={val.path} state="page">{val.name}</Link>
                </Nav>
            }
          </Nav.Item>
        );
      })
    }
  </Nav>
  );
}

export const Buger = () => {
  const dispatch = useAppDispatch();
  const isMobileShow = useAppSelector(ShowMobileMenuState);
  const [classBurger, setClassBurger] = useState<string>('');
  useEffect(() => {
    setClassBurger(isMobileShow ? 
      'hamburger hamburger--elastic js-hamburger is-active' : 
      'hamburger hamburger--elastic js-hamburger');
    console.log(isMobileShow);  
  },[dispatch, isMobileShow])

  return(
    <div className={classBurger} onClick={() => {
        dispatch(showMobileMenu(isMobileShow ? false : true))
      }
     }>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
    </div>
  );
}
export const MobileNavigation = (props:{open:boolean}) => {
  const dispatch = useAppDispatch();
  return(
      <Menu 
      burgerButtonClassName={ "d-none" }
      className='px-0'
      isOpen={ props.open } 
      onClose= {() => dispatch(showMobileMenu(false))}
      pageWrapId={ "page-wrap" } 
      outerContainerId={ "outer-container" }>
         <GlobalStyle />
         <MobileBuger>
            <Buger />
         </MobileBuger>
         <MobileMenuWrapper>
        {
           MenuItems.map((val:any, index:number) => {
            return(
              <StyledMobileNav className="w-100" key={index}>
                  {
                    val.submenu != undefined ?
                    <MobileSubLink>
                      <Link className='px-3 text-light text-decoration-none' to={val.path} state="page">{val.name}</Link>
                      <NavDropdown title={<ChevronDownOutline color={'white'} width={'15px'} height={'15px'}/>} id="basic-nav-dropdown">
                        {
                            val.submenu.map((val:any, index:number) => {
                              return(
                                <Link key={index} className='px-3 text-light text-decoration-none' to={val.path} state="page">{val.name}</Link>
                              );
                            })
                          }
                      </NavDropdown>
                    </MobileSubLink>
                    : 
                      <Link className='px-3 text-light text-decoration-none' to={val.path} state="page">{val.name}</Link>
                  }
                </StyledMobileNav>
              );
           })
        }
        </MobileMenuWrapper>
    </Menu>
  );
}

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
export const MobileMenuWrapper = Styled.div`
  margin-top: 50px;
  position: relative;
`;
export const MobileBuger = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 2;
  background: #141414;
  display: flex !important;
  justify-content: flex-end;
`;
export const StyledMobileNav = Styled(Nav)`
  a{
    padding: 5px 0px;
    display: block;
    width: 200px;
  }
`
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

export const MobileSubLink = Styled.div`
  position: relative;
  width: 100%;
  & a{
    padding: 5px 40px 5px 0px;
  }
  .dropdown-menu{
    position: relative !important;
    margin: 0px;
    transform: unset !important;
    width: 100%;
    background: black;
    padding: 0px;
  }
  #basic-nav-dropdown{
    position: absolute;
    right: -30px;
    top: -30px;
    background: black;
    height: 30px;
    width: 30px;
    padding: 0px;
    text-align: center;
    &:after{
      display: none;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible; }
  .hamburger:hover {
    opacity: 0.7; }
  .hamburger.is-active:hover {
    opacity: 0.7; }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: #fff; }

.hamburger-box {
  width: 30px;
  height: 24px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 30px;
    height: 2px;
    background-color: white;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; }
  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block; }
  .hamburger-inner::before {
    top: -10px; }
  .hamburger-inner::after {
    bottom: -10px; }
    /*
   * Elastic
   */
.hamburger--elastic .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .hamburger--elastic .hamburger-inner::before {
    top: 10px;
    transition: opacity 0.125s 0.275s ease; }
  .hamburger--elastic .hamburger-inner::after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(135deg);
  transition-delay: 0.075s; }
  .hamburger--elastic.is-active .hamburger-inner::before {
    transition-delay: 0s;
    opacity: 0; }
  .hamburger--elastic.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(-270deg);
    transition-delay: 0.075s; }`;