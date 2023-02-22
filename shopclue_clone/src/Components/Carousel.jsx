import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Carousel() {
  const cards = [
    'https://cdn.shopclues.com/images/banners/2023/Feb/22/HB1_MensClothing_Web_SYM_22Feb23.jpg',
    'https://cdn.shopclues.com/images/banners/2023/Feb/22/HB5_Asus_Web_SYM_22Feb23.jpg',
    'https://cdn.shopclues.com/images/banners/2023/Feb/22/HB2_RefurbMobile_Web_SYM_22Feb23.jpg',
    'https://cdn.shopclues.com/images/banners/2023/Feb/22/HB3_JDD_Web_Esha_22Feb23.jpg',
    'https://img.freepik.com/free-psd/boxing-day-landing-page-template_23-2149845255.jpg',
   
  ];
  const [slider, setSlider] = React.useState({Slider});
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  return (
    <Box
      position={'relative'}
      height={'500px'}
      width={'100%'}
      marginTop={'10px'}
      overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        {/* <BiLeftArrowAlt /> */}
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        {/* <BiRightArrowAlt /> */}
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'2xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}