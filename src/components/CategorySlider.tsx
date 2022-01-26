import {useEffect} from 'react'
import Carousel from "react-multi-carousel";
import {useAppDispatch, useAppSelector} from '../app/hooks';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import { danhmucAsync, dataCategory} from '../api/Category';

import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const FetchURL:string = 'https://southteam.vn/wp-json/wp/v2/categories?term=danh-muc';

const CategorySlider = () => {

  const dispatch = useAppDispatch();
  const listCategory:any = useAppSelector(dataCategory);

  useEffect(() => {
    dispatch(danhmucAsync(FetchURL));
  }, [dispatch])
  
  interface DataInterface{
    name:string,
    acf: any,
    count: number,
  }

  return (
    <Carousel responsive={responsive}>
      {
        listCategory.map((val: DataInterface, index:number) => {
          return(
            <CategoryTemplates key={index}>
                <CategoryCounter>{val.count}</CategoryCounter>
                <StyledImg src={val.acf.url}/>
                <CategoryTitle>{val.name}</CategoryTitle>
            </CategoryTemplates>
          )
        })
      }
     </Carousel>
  )
}

export default CategorySlider; 
export const CategoryCounter = Styled.span`
  width: 30px;
  height: 30px;
  background: #363636;
  color: white;
  font-size: 14px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  line-height: 30px;
`;
export const CategoryTitle = Styled.h4`
  font-size: 15px;
  margin-top: 20px;
  font-weight: bold;
`;
export const CategoryTemplates = Styled.div`
  padding: 10px;
  text-align: center;
  background: #e1dbc9;
  height: 100%;
  margin: 0px 10px;
  transition: all .3s ease-in-out;
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover{
    background: #b9b29a;
  }
`
export const StyledImg = Styled.img`
  width: 55px;
  height: auto;
  display: block;
  margin: auto;
  margin-bottom: 10px;
`