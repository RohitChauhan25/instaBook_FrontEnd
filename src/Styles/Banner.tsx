import styled from "styled-components";



export const SliderWrap = styled.div`
margin: 0;
  /* width: 100%; */
  /* -webkit-overflow-scrolling: touch; */

  .splide__list {
    cursor: grab;
    display: flex !important;
    backface-visibility: visible !important;
  }

  .splide__slide {
    width: max-content;
  }
`

export const ImageWrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
 img{
    width: 100%;
    height: 100%;
    max-height: 620px;
 }
`