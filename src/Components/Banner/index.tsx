import Slider from "react-slick";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { BannerImages } from "Constant/BannerData";
import { ImageWrapper, SliderWrap } from "Styles/Banner";
const Banner = () => {
  return (
    <SliderWrap>
      <Splide
        options={{
            dots: true,
            rewind: true,
            gap   : '1rem',
            arrows: false,
            autoplay: true,
            speed: 500
            
        }}
      >
        {BannerImages?.map((item)=><SplideSlide>
            <ImageWrapper>
            <img src={item?.source} alt="Image 1"  />
            </ImageWrapper>
        </SplideSlide>)}
      </Splide>
    </SliderWrap>
  );
};

export default Banner;
