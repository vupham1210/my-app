import {Link} from 'react-router-dom';
import Styled from 'styled-components';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {BusinessOutline, ReaderOutline, CartOutline } from 'react-ionicons'

import ReactHtmlParser from 'react-html-parser';
import ParticleHome from '../components/ParticleHome';
// Import Images 
import ProcessImg from '../imgs/process-bg-e.jpg';
import HomeBackground from '../imgs/background.jpg';
import TimeLine_1 from '../imgs/qt.png';
import TimeLine_2 from '../imgs/qt2.png';
import TimeLine_3 from '../imgs/qt3.png';
import TimeLine_4 from '../imgs/qt4.png';
import TimeLine_5 from '../imgs/qt5.png';

import Sdip_1 from '../imgs/landing-home-1.jpg';
import Sdip_2 from '../imgs/landing-home-2.jpg';
import Sdip_3 from '../imgs/landing-home-3.jpg';
import Sdip_4 from '../imgs/landing-home-4.jpg';
import Sdip_5 from '../imgs/landing-home-5.jpg';
import Sdip_6 from '../imgs/landing-home-6.jpg';
import Sdip_7 from '../imgs/landing-home-7.jpg';
import Sdip_8 from '../imgs/landing-home-8.jpg';

import CategorySlider from '../components/CategorySlider';


// Banner Section 
import BackgrounSectionBanner from '../imgs/bg-1.jpg';
import bg_banner_1 from '../imgs/blog8.jpg';
import overlay_banner_1 from '../imgs/10.png';
import bg_banner_2 from '../imgs/bg-adsw.jpg';
import overlay_banner_2 from '../imgs/adwords.png';
import bg_banner_3 from '../imgs/blog2.jpg';
import overlay_banner_3 from '../imgs/cateloge_1.png';
import bg_banner_4 from '../imgs/blog1.jpg';
import overlay_banner_4 from '../imgs/34.png';
import bg_banner_5 from '../imgs/blog7.jpg';
import overlay_banner_5 from '../imgs/11.png';
// 
import banner_tk_web from '../imgs/thiet-ke-website.png';
import banner_tk_web2 from '../imgs/bg_gt_3.png';

const Flip = require('react-reveal/Flip');
const Fade = require('react-reveal/Fade');


const Layout = [
   {
     image: Sdip_1,
     title: 'STACKED PORTFOLIO',
     description: 'WPBAKERY PAGE BUILDER </br> ELEMENTOR PAGE BUILDER',
  }, 
    {
      image: Sdip_2,
      title: 'STACKED PORTFOLIO',
      description: 'WPBAKERY PAGE BUILDER </br> ELEMENTOR PAGE BUILDER',
  }, 
  {
    image: Sdip_3,
    title: 'STACKED PORTFOLIO',
    description: 'WPBAKERY PAGE BUILDER </br> ELEMENTOR PAGE BUILDER',
  }, 
  {
    image: Sdip_4,
    title: 'STACKED PORTFOLIO',
    description: 'WPBAKERY PAGE BUILDER </br> ELEMENTOR PAGE BUILDER',
  }, 
  {
    image: Sdip_5,
    title: 'STACKED PORTFOLIO',
    description: 'WPBAKERY PAGE BUILDER </br> ELEMENTOR PAGE BUILDER',
  }, 
  {
    image: Sdip_6,
    title: 'STACKED PORTFOLIO',
    description: 'WPBAKERY PAGE BUILDER </br> ELEMENTOR PAGE BUILDER',
  }, 
  {
    image: Sdip_7,
    title: 'STACKED PORTFOLIO',
    description: 'WPBAKERY PAGE BUILDER </br> ELEMENTOR PAGE BUILDER',
  }, 
  {
    image: Sdip_8,
    title: 'STACKED PORTFOLIO',
    description: 'WPBAKERY PAGE BUILDER </br> ELEMENTOR PAGE BUILDER',
  }, 
];
const TimeLine = [
  {
    Title: 'Tìm hiểu và tư vấn xây dựng Website',
    Class : 'd-flex flex-wrap align-items-end',
    Component : TimeLine_1
  },
  {
    Title: 'Báo giá, tạo ý tưởng & Demo giao diện Website',
    Class : 'd-flex flex-wrap align-items-center',
    Component : TimeLine_2
  },
  {
    Title: 'Ký hợp đồng thiết kế Website',
    Class : 'd-flex flex-wrap align-items-start',
    Component : TimeLine_3
  },
  {
    Title: 'Xây dựng Module & hoàn thiện Website',
    Class : 'd-flex flex-wrap align-items-center',
    Component : TimeLine_4
  },
  {
    Title: 'Nghiệm thu, thanh lý HĐ & Chuyển giao công nghệ',
    Class : 'd-flex flex-wrap align-items-end',
    Component : TimeLine_5
  },
];

const Home = (props:any) => {
  return(
    <>
    <HeaderBanner>
      <ParticleHome />
    </HeaderBanner>
    <ProcessSection>
        <Container className="m-auto">
            <Row>
                <Col xs={12}>
                  <Flip left cascade>
                    <ul>
                      <h3 className='fw-bolder text-center'>QUY TRÌNH LÀM VIỆC CHUYÊN NGHIỆP</h3>
                    </ul>
                  </Flip>
                </Col>
                <Col xs={12} className="processContainer">
                <Fade cascade bottom>
                    <ul className='list-unstyled d-flex flex-wrap'>
                      {TimeLine.map((val, index) => (
                      <li className='col' key={index}>
                        <TimeLineContent className={val.Class}>
                          <div>
                          <TimeLineImg src={val.Component} />
                          <TimeLineTitle>{val.Title}</TimeLineTitle>
                          </div>
                        </TimeLineContent>
                        </li>))}
                    </ul>
                  </Fade>
                </Col>
                <p className='text-center fw-bolder py-3'>Sở hữu hàng trăm mẫu giao diện thiết kế hiện đại, tích hợp đầy đủ chức năng giúp bạn có thể dễ dàng thao tác chỉnh sửa theo mong muốn. Website dễ dàng lên TOP Google trong lần đầu submit. Cam kết không phát sinh bất kì thêm chi phí nào.</p>
              </Row>
          </Container>
      </ProcessSection>
      
      <LayoutSection>
        <Container>
          <Row>
            <Col xs={12}>
                <Flip cascade left>
                  <ul className="list-unstyled row">
                    {
                      Layout.map((val, index) => (
                        <ListlayoutItems key={index} className="col-12 col-md-4">
                          <LayoutItems>
                              <LayoutItemsThumbnail>
                                <img src={val.image} />
                                <h4 className="fw-bolder">{ReactHtmlParser(val.description)}</h4>
                              </LayoutItemsThumbnail>
                              <h3 className="fw-bolder">{val.title}</h3>
                          </LayoutItems>
                        </ListlayoutItems>
                      ))
                    }
                  </ul>
                </Flip>
              </Col>
            </Row>
          </Container>
        </LayoutSection>
        <CallToActSection>
        <Container className="m-auto">
          <Row>
            <Col xs={12}>
              <Fade cascade bottom>
                <h3 className='fw-bolder text-center mb-3'>HÃY CHỌN NHU CẦU THIẾT KẾ WEBSITE CỦA BẠN</h3>
              </Fade>
              <Fade cascade bottom>
                  <ul className="CallToActSection list-unstyled d-flex flex-wrap">
                      <li className='col-12 col-md-4 d-block'>
                        <CallToActSimple className="text-center">
                          <BusinessOutline
                                  width={'45px'} 
                                  height={'45px'}
                                  color={'#00000'} 
                                />
                          <h4 className="text-md">Thiết kế website</h4>
                          <h3 className="fw-bolder">GIỚI THIỆU - DOANH NGHIỆP</h3>
                          <p>Phát triển và thúc đẩy doanh nghiệp, gia tăng giá trị thương hiệu</p>
                        </CallToActSimple>
                        </li>
                      <li className='col-12 col-md-4 d-block'>
                        <CallToActAdvandce>
                            <ReaderOutline
                                width={'45px'} 
                                height={'45px'}
                                color={'#ffffff'} 
                              />
                              <h4 className="text-md text-white">Thiết kế website</h4>
                              <h3 className="fw-bolder text-light">THEO YÊU CẦU</h3>
                              <p className="text-light">Bạn chỉ cần tập trung vào dịch vụ của mình, Phát triển tất cả chức năng phù hợp với nhu cầu của bạn hãy để chúng tôi</p>
                              <StyledButton variant='custom position-relative border text-white rounded-0'><span>Xem thêm</span></StyledButton>
                        </CallToActAdvandce>
                      </li>
                      <li className='col-12 col-md-4 d-block'> 
                        <CallToActSimple className="text-center">
                          <CartOutline
                                width={'45px'} 
                                height={'45px'}
                                color={'#00000'} 
                              />
                           <h4>Thiết kế website</h4>
                           <h3 className="fw-bolder">SHOP BÁN HÀNG</h3>
                           <p>Bạn chỉ cần nâng cao chất lượng diện mạo thương hiệu, tiếp cận với nhiều khách hàng tiềm năng</p>
                        </CallToActSimple>
                     </li>
                  </ul>
                  <h4 className='text-center mb-3'><strong>HOẶC CHỌN THEO NGHÀNH NGHỀ CỦA BẠN ĐỂ CHỌN GIAO DIỆN PHÙ HỢP NHẤT</strong></h4>
                  <div className="py-4">
                      <CategorySlider />
                  </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </CallToActSection>
      <BannerSection>
          <Row>
                <Col md={4} sm={12} xs={12}>
                  <SectionTitle className={'text-md-end text-center'}>
                      <RotateSectionTitle>Dịch vụ</RotateSectionTitle>
                  </SectionTitle>
                </Col>
                <Col md={8} sm={12} xs={12}>
                    <Row className={'p-3'}>
                      <Col xs={6}>
                        <Fade cascade bottom>
                            <BlockPortfolio >
                                  <LinkOverLay to={'/demo'}></LinkOverLay>
                                  <RotateStatus>Web Design</RotateStatus>
                                  <ImgResponsive src={bg_banner_1} />
                                  <ImgAdditional src={overlay_banner_1} />
                                  <PortfolioInfo>
                                    <h4 className='fw-bolder text-uppercase'>Thiết kế Website</h4>
                                    <span className="project-category text-shadown">Thiết kế hiện đại theo ý tưởng khách hàng</span>
                                  </PortfolioInfo>
                            </BlockPortfolio>
                          </Fade>
                      </Col>
                      <Col xs={6}>
                      <Fade cascade bottom>
                          <BlockPortfolio >
                                <LinkOverLay to={'/demo'}></LinkOverLay>
                                <RotateStatus>Google Adwords</RotateStatus>
                                <ImgResponsive src={bg_banner_2} />
                                <ImgAdditional src={overlay_banner_2} />
                                <PortfolioInfo>
                                  <h4 className='fw-bolder text-uppercase'>Google Adwords</h4>
                                  <span className="project-category text-shadown">Quảng cáo trên Google</span>
                                </PortfolioInfo>
                            </BlockPortfolio>
                        </Fade>
                      </Col>
                      <Col xs={6} md={4}>
                      <Fade cascade bottom>
                        <BlockPortfolio >
                              <LinkOverLay to={'/demo'}></LinkOverLay>
                              <RotateStatus>Quản trị Website</RotateStatus>
                              <ImgResponsive src={bg_banner_3} />
                              <ImgAdditional src={overlay_banner_3} />
                              <PortfolioInfo>
                                <h4 className='fw-bolder text-uppercase'>Quản trị Website</h4>
                                <span className="project-category text-shadown">Cập nhật nội dung Website</span>
                              </PortfolioInfo>
                          </BlockPortfolio>
                        </Fade>
                      </Col>
                      <Col xs={6} md={4}>
                        <Fade cascade bottom>
                          <BlockPortfolio >
                                <LinkOverLay to={'/demo'}></LinkOverLay>
                                <RotateStatus>Marketing Online</RotateStatus>
                                <ImgResponsive src={bg_banner_4} />
                                <ImgAdditional src={overlay_banner_4} />
                                <PortfolioInfo>
                                  <h4 className='fw-bolder text-uppercase'>Marketing Online</h4>
                                  <span className="project-category text-shadown">Chiến lược tổng thể tiếp cận KH online</span>
                                </PortfolioInfo>
                            </BlockPortfolio>
                          </Fade>
                      </Col>
                      <Col xs={6} md={4}>
                        <Fade cascade bottom>
                          <BlockPortfolio >
                                <LinkOverLay to={'/demo'}></LinkOverLay>
                                <RotateStatus>Viết bài chuẩn SEO</RotateStatus>
                                <ImgResponsive src={bg_banner_5} />
                                <ImgAdditional src={overlay_banner_5} />
                                <PortfolioInfo>
                                  <h4 className='fw-bolder text-uppercase'>Viết bài chuẩn SEO</h4>
                                  <span className="project-category text-shadown">Cung cấp bài viết chỉ từ 55.000đ/bài</span>
                                </PortfolioInfo>
                            </BlockPortfolio>
                          </Fade>
                      </Col>
                    </Row>
                </Col>
          </Row>
      </BannerSection>
      <Section className="bg-custom">
        <Container className="m-auto">
            <Row className="align-items-center">
                <Col xs={12} md={5}>
                 <Fade cascade left>
                    <img className="w-100" src={banner_tk_web}/>
                  </Fade>
                </Col>
                <Col xs={12} md={7}>
                    <Fade bottom>
                      <h3 className='fw-bolder mb-3'>THIẾT KẾ WEBSITE SOUTH TEAM</h3>
                      <Sep />
                    </Fade>
                    <Fade bottom>
                      <p className='mb-3'>Với tốc độ phát triển Internet cao hiện nay, xu hướng người dùng tìm kiếm thông tin trên Internet ngày càng tăng. Đây là thị trường thu nhỏ của việc kinh doanh truyền thống, hình thức kinh doanh trên Internet đã ra đời. Trong xu thế đó, việc các cá nhân, doanh nghiệp cần thiết kế một website chuyên nghiệp là rất cần thiết.</p>
                    </Fade>
                </Col>
            </Row>
        </Container>
      </Section>
      <Section className="bg-whitesmoke">
        <Container className="m-auto">
            <Row className="align-items-center">
                <Col xs={12} md={8}>
                    <Fade bottom>
                      <h3 className='fw-bolder mb-3'>THIẾT KẾ WEBSITE CHUYÊN NGHIỆP LÀ GÌ?</h3>
                      <Sep />
                    </Fade>
                    <Fade cascade bottom>
                      <ul className="list-unstyled">
                        <li><p className='mb-3'>Thiết kế web hay thiết kế website đơn giản là công việc tạo một trang web cho cá nhân, công ty, doanh nghiệp hoặc tổ chức. Có 2 phương thức chính để thiết kế: </p></li>
                        <li><p className='mb-3'> <strong>Thiết kế web tĩnh</strong> là sử dụng các đoạn mã HTML (HTML5), hình ảnh, Video, Audio, Flash, Javascript (jQuery) và CSS để tạo một giao diện cho trang web.</p></li>
                        <li><p className='mb-3'> <strong>Thiết kế web động</strong> là thiết kế website chuyên nghiệp, có hệ thống cơ sở dữ liệu dùng để cung cấp thông tin cho website, có khả năng quản lý dữ liệu tốt, tương tác trên hệ thống, dễ cập nhật nội dung và thêm các tính năng tiện ích quản lý cho doanh nghiệp, thân thiện với người dùng.</p></li>
                      </ul>
                    </Fade>
                </Col>
                <Col xs={12} md={4}>
                  <Fade cascade left>
                      <img className="m-auto w-100" src={banner_tk_web2}/>
                    </Fade>
                </Col>
            </Row>
        </Container>
      </Section>
    </>
  );
}

export default Home;
export const Sep = Styled.span`
  width: 60px;
  height: 3px;
  background: black;
  display: block;
  margin: 20px 0px;
  border-radius: 4px;
`;
export const Section = Styled.section`
  padding: 75px 0px;
`;
export const PortfolioInfo = Styled.div`
  opacity: 0;
  position: absolute;
  z-index: 5;
  text-align: center;
  width: 100%;
  top: 42%;
  left: 0;
  padding: 0 20px;
  transform: translateY(10px);
  transition: all .3s ease-in-out;
  h4{
    position: relative;
    padding-bottom: 20px;
    &:after{
        position: absolute;
        content: "";
        left: 50%;
        margin-left: -15px;
        bottom: 0;
        height: 2px;
        width: 30px;
        background-color: rgba(38,35,40,.3);
        transition: all 1s ease;
    }
  }
  span{
    font-size: 15px;
    color: rgba(38,35,40,.7);
    line-height: 25px;
    word-spacing: 1px;
  }
`;
export const ImgResponsive = Styled.img`
  width: 100%;
  min-width: 100%;
  transition: all 1.5s ease;
`;
export const ImgAdditional = Styled.img`
  position: absolute;
  left: 10%;
  top: 30%;
  min-width: 100%;
  transition: all 1.5s ease;
`;
export const RotateStatus = Styled.span`
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 7;
  bottom: 25px;
  left: 16px;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: left;
  display: block;
  width: 15px;
  white-space: nowrap;
  color: rgba(38,35,40,.9);
  transform: rotate(-90deg);
`;
export const LinkOverLay = Styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
`;
export const BlockPortfolio = Styled.div`
  position: relative;
  border: 5px solid #fff;
  overflow: hidden;
  margin-bottom: 30px;
  backface-visibility: hidden;
  height: auto;
  display: flex;
  align-items: center;
  &:after{
    position: absolute;
    content: "";
    transition: all 0.3s ease;
    background-color: rgba(255,255,255,.9);
    top: 110%;
    left: 10px;
    bottom: 10px;
    right: 10px;
    z-index: 0;
  }
  &:hover {
    &:after{
      top: 10px;
    }
    ${ImgAdditional}{
      transform: scale(1.1);
    }
    ${ImgResponsive}{
      transform: scale(1.1);
    }
    ${PortfolioInfo}{
      opacity: 1;
      transform: translateY(0px);
      transition: all .3s ease-in-out;
    }
  }
`;
export const RotateSectionTitle = Styled.h2`
  text-align: center;
  font-size: 55px;
  color: red;
  text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;
  @media (min-width: 768px){
    text-transform: uppercase;
    transform: rotate(-90deg);
    transform-origin: bottom right 0;
    display: inline-block;
    white-space: nowrap;
  }
`;
export const SectionTitle = Styled.div``;

export const BannerSection = Styled.section`
  background: url(${BackgrounSectionBanner});
  background-size: cover;
  background-attachment: fixed;
  padding: 50px 0px;
  position: relative;
  & > .row{
    position: relative;
    z-index: 1;
  }
  &:after{
    content:"";
    width: 100%;
    height: 100%;
    position: absolute;
    background: black;
    opacity: .5;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;
export const StyledButton = Styled(Button)`
  &:hover{
    &:after{
      height: 100%;
      transition: all .3s ease-in-out;
    }
    span{
      color: black;
    }
  }
  &:after{
    content: "";
    height: 0%;
    width: 100%;
    background: white;
    position: absolute;
    top:0;
    left:0;
    transition: all .3s ease-in-out;
  }
  span{
    font-weight: bold;
    position: relative;
    z-index: 1
  }
`;
export const LayoutItemsThumbnail = Styled.div`
  margin-bottom: 20px;
  position: relative;
  img{
    box-shadow: 0 0 26px 0.15px rgb(0 0 0 / 7%);
    transition: all .3s ease-in-out;
  }
  h4{
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 0px;
    width: 100%;
    text-align: center;
    transform: translateY(-80%);
    opacity: 0;
    transition: all .3s ease-in-out;
  }
`;
export const LayoutItems = Styled.div`
  margin-bottom: 35px;
  padding: 10px;
  &:hover ${LayoutItemsThumbnail}{
    img{
      transform: translateY(-10px);
      filter: invert(0.8);
    }
    h4{
      transform: translateY(-50%);
      opacity: 1;
      color: black;
      background: white;
      border-bottom: 2px solid #fdc92e;
      padding: 10px;
    }
  }
  h3{
    text-align: center;
    font-size: 18px;
  }
`;
export const LayoutSection = Styled.section`
  width: 100%;
  padding: 100px 0px;
  background: #e1dbc9;
`;
export const ListlayoutItems = Styled.li`
  margin-bottom: 15px;
  img{
    width: 100%;
    display: block;
    border-radius: 10px;
    box-shadow: 0px 0px 8px -5px;
  }
`;
export const CallToActAdvandce = Styled.div`
  background: white;
  padding: 20px
  box-shadow: 0px 0px 8px -5px;
  background: #e1dbc9;
  padding: 30px;
  height: 130%;
  margin-top: -10%;
  background: url(${HomeBackground});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  position: relative;
  & > span{
    padding: 15px;
    display: block;
  }
  &:hover:before, &:hover:after{
    transform: scaleX(1);
  }
  &:before{
    content:"";
    width: 94%;
    height: 90%;
    border-top: 2px solid #e1dbc9;
    border-bottom: 2px solid #e1dbc9;
    position: absolute;
    left: 3%;
    top: 5%;
    transform: scaleX(0);
    transform-origin: left;
    transition: all .3s ease-in-out;
  }
  &:after{
    content:"";
    width: 90%;
    height: 94%;
    border-right: 2px solid #e1dbc9;
    border-left: 2px solid #e1dbc9;
    position: absolute;
    left: 5%;
    top: 3%;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: all .3s ease-in-out;
  }
`;
export const CallToActSimple = Styled.div`
  background: white;
  padding: 20px
  box-shadow: 0px 0px 8px -5px;
  background: #e1dbc9;
  padding: 30px;
  span{
    padding: 15px;
    background: white;
    margin-bottom: 17px;
    display: block;
    border-bottom: 2px solid #aea485;
  }
`;
export const CallToActSection = Styled.section`
  width: 100%;
  padding: 50px 0px;
  svg{
    margin-bottom: 10px;
  }
  .CallToActSection{
    padding: 80px 0px;
    h4{
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 5px;
    }
    h3{
      font-size: 22px;
    }
    p{
      font-size: 14px
    }
  }
`;
export const TimeLineTitle = Styled.h4`
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
`;
export const TimeLineContent = Styled.div`
  height: 330px;
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  `;
export const TimeLineImg = Styled.img`
  width: 90px;
  height: 90px;
  display: block;
  margin-bottom: 25px !important;
  border-radius: 50%;
  background: black;
  transition: all .3s ease-in-out;
  margin: auto;
  &:hover{
    background: red
  }
`;

export const ProcessSection = Styled.section`
  width: 100%;
  background-color: #f8f8f8;
  padding: 95px 0px 0px 0px;
  & .processContainer{
    padding: 0px 0px 255px 0px;
    background: url(${ProcessImg});
    background-repeat: no-repeat;
    background-position-x: center;
  }
`;
export const SepDot = Styled.span`
  display: inline-block;
  width: 3px;
  height: 15px;
  background: #e1dbc9;
  margin-bottom: -5px;
  margin-right: 17px;
  margin-left: 17px
`;
export const StyledH1 = Styled.span`
  font-size: 65px;
`;
export const HeaderBanner = Styled.div`
  background: url(${HomeBackground});
  display: flex;
  align-items-center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
`;

export const ImageStyled = Styled.img`
  margin: auto;
  max-width: 500px;
  display: block
`
export const Main = Styled.div`
  width: 100%;
`;