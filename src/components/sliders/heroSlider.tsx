import React from "react";
import SlickSlider from "react-slick";
import CardVersionOne from "../cards/cardVersionOne";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const HeroSlider = () => {
  return (
    <SlickSlider {...settings}>
      <div>
        <CardVersionOne
          imageUrl="/images/hero_suit.webp"
          title="Suits"
          buttonName="Shop suit's"
        />
      </div>
      <div>
        <CardVersionOne
          imageUrl="/images/hero_sharwani.webp"
          title="Formals"
          buttonName="Shop formals"
        />
      </div>
      <div>
        <CardVersionOne
          imageUrl="/images/hero_formals.webp"
          title="Formals"
          buttonName="Shop Formals"
        />
      </div>
    </SlickSlider>
  );
};
export default HeroSlider;
