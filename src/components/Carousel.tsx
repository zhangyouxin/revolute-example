import { Card, CardProps } from "./Card";
import bgIcon1 from "../assets/bg1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useSceenInfo } from "../hooks/useSceenInfo";
import { useState } from "react";

const CardsConfig: CardProps[] = new Array(10).fill(null).map((_, index) => ({
  title: `$ ${index}00`,
  body: `Card ${index + 1}`,
  bgIcon: bgIcon1,
  footer: (
    <button className="bg-black text-white px-6 py-2.5 rounded-full self-start md:self-auto mx-4">
      Get started
    </button>
  ),
}));

export const Carousel = () => {
  const { isMobile } = useSceenInfo();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-[calc(100vw-2rem)] overflow-hidden mx-[1rem]">
      <Swiper
        className="w-full md:max-w-[60rem] lg:max-w-[70rem]"
        loop
        slidesPerView={"auto"}
        centeredSlides={isMobile ? false : true}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        onSlideChange={(e) => {
          setActiveIndex(e.activeIndex);
        }}
      >
        {CardsConfig.map((config, index) => (
          <SwiperSlide key={index}>
            <Card {...config} isActive={activeIndex === index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
