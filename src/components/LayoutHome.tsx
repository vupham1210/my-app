import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';

import {  templatesAsync, 
          dataTotalTemplate,
          dataAPITemplates,
          statusFetchPosts } from '../api/Layout';

import {  danhmucAsync, 
          dataCategory , 
          statusCategory } from '../api/Category';

import DefaultTemplates from './DefaultTemplates';
import ListTemplates from './ListTemplates';

import {Row, Col, FormSelect, Button, InputGroup} from 'react-bootstrap';
import  Styled from 'styled-components';
import {Link} from 'react-router-dom'
import {ListOutline, GridOutline} from 'react-ionicons';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ReactPaginate from 'react-paginate';

const LayoutHome = () => { 

  const dispatch = useAppDispatch();
  // Data layout
  const listTemplates:any = useAppSelector(dataAPITemplates);
  const totalNumberPost:number = useAppSelector(dataTotalTemplate);
  const statusPosts:string = useAppSelector(statusFetchPosts);
  // Data Categories
  const listCategories:any = useAppSelector(dataCategory);
  const statusListCategory:string = useAppSelector(statusCategory);

  const [perpage, setPerpage] = useState<number>(12);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [isList, setIsList] = useState<boolean>(false);
  const [firstLoading, setFirstLoading] = useState<boolean>(false);

  let FetchDataURL:string = `https://southteam.vn/wp-json/wp/v2/mau-website-demo?per_page=${perpage}&page=${currentPage ? currentPage : 1}`;
  let FetchCategoryURL:string = 'https://southteam.vn/wp-json/wp/v2/categories?term=danh-muc';
  
  const Flip = require('react-reveal/Flip');

  useEffect(() => {
    if(statusPosts === 'idle'){
      dispatch(templatesAsync(FetchDataURL));
      setFirstLoading(true);
    }
    setTotalPage(Math.ceil(totalNumberPost/perpage));
  }, [dispatch, statusPosts]);

  useEffect(() => {
    if(statusListCategory === 'idle'){
      dispatch(danhmucAsync(FetchCategoryURL));
    }
  }, [dispatch, statusListCategory]);

  
  useEffect(() => {
    setTotalPage(Math.ceil(totalNumberPost/perpage));
    dispatch(templatesAsync(FetchDataURL));
  }, [perpage , currentPage, totalNumberPost, totalPage]);
  
  useEffect(() =>{
    console.log(isList);
  }, [isList])

  const handlePageClick = (event:any) => {
    window.scrollTo(0, 0);
    const newOffset = (event.selected * 5) % 120;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setCurrentPage(event.selected + 1);
  };

  interface LabeledValue {
    title: any,
    featured_image_src: string,
    link: string,
    id: number,
  }

  interface CategoryData {
    name: string,
    slug: string,
    acf: any,
    link: string,
    count:number
  }

  const sampleContainer = {
    maxHeight: "500px"
  };

  interface DataInterface{
    name:string,
    acf: any,
    count: number,
    term_id:number,
  }

  return (
    <Row>
        <Col xs={12}>
            <Row className="mb-3 align-items-center">
              <Col>
                  <Button variant='outline-dark me-2 mb-0' onClick={() => {setIsList(true)}}>
                    <ListOutline
                        color={'#00000'} 
                        title={'Layout Ngang'}
                        height="22px"
                        width="22px"
                      />
                  </Button>
                  <Button variant='outline-dark mb-0' onClick={() => {setIsList(false)}}>
                    <GridOutline
                      color={'#00000'} 
                      title={'Gallery'}
                      height="22px"
                      width="22px"
                    />
                  </Button>
                </Col>
                <Col>
                  <InputGroup>
                      <FormSelect className={"selection"} aria-label="Default select example">
                        <option value="0" selected>Lựa chọn danh mục</option>
                        {
                          listCategories.map((val: DataInterface, index:number) => {
                            return(
                              <option key={index} value={val.term_id}>{val.name}</option>
                            )
                          })
                        }
                      </FormSelect>
                      <FormSelect className='' onChange={(e) => {setPerpage(Number(e.target.value))}}>
                        <option selected value="12">Lựa chọn số lượng</option>
                        <option value="24">16 mỗi trang</option>
                        <option value="30">24 mỗi trang</option>
                        <option value="36">36 mỗi trang</option>
                      </FormSelect>
                    </InputGroup>
                </Col>
            </Row>
            <ul className='row p-0 position-relative'>
              {listTemplates.map((val : LabeledValue, index:number) => {
                return(
                    <li className={isList ? 'd-block col-12 col-md-6' : 'd-block col-6 col-md-4'} >
                      {
                        isList ?  
                        <DefaultTemplates key={index} data={val} /> : <ListTemplates key={index} data={val} />
                      }
                    </li>
                  )
                })}
              </ul>
            <Col xs={12}>
                <StyledReactPaginate
                  breakLabel="..."
                  nextLabel="Kế tiếp"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={perpage}
                  marginPagesDisplayed={1}
                  pageCount={totalPage}
                  previousLabel="Trước"
                />
            </Col>
        </Col>
    </Row>
  );
};


export default LayoutHome;
export const StyledReactPaginate = Styled(ReactPaginate)`
  text-align: center;
  li{
    display: inline-block;
    &.disabled{
      a{
        background: #8e8e8e;
      }
    }
    &.selected{
      a{
        background: #e1dbc9;
        color: black !important
      }
    }
    a{
      display: block;
      min-width: 30px;
      padding: 7px 5px;
      background: black;
      color: white !important;
      text-decoration: unset;
      margin: 2px;
      border-radius: 5px;
      transition: all .3s ease-in-out;
      &:hover{
        background: #e1dbc9;
        color: black !important;
      }
    }
  }
`;
export const Section = Styled.section`
  padding: 50px 0px;
  background: whitesmoke;
`
export const Counter = Styled.span`
  background: black;
  position: absolute;
  right: 5px;
  color: white;
  font-size: 10px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
`;