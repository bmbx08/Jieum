import React from "react";
import CarouselItem from "./CarouselItem";
import categoryArray from "../categoryArray";
import Carousel from "react-multi-carousel";
import responsive from "./responsive/responsive";
import "react-multi-carousel/lib/styles.css";
import "../HomepageComponent.style.css"

const StudyCarousel = () => {
  return (
    <>
      <div className="carousel-section-title">맞춤형 추천 스터디</div>
      <div className="carousel-container">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={false}
        responsive={responsive}
        infinite={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        transitionDuration={200}
        // keyBoardControl={true}
        // sliderClass="carousel-inner-container"
        // itemClass="carousel-inner-container"
        containerClass="carousel-inner-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {categoryArray.map((item) => (
          <CarouselItem item={item} />
        ))}
      </Carousel>
      </div>
    </>
  );
};

export default StudyCarousel;
