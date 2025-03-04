import { Card, CardProps } from "./Card";
import bgIcon1 from "../assets/bg1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useSceenInfo } from "../hooks/useSceenInfo";
import { useState } from "react";
import { Pagination } from "./Pagination";

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
    <div className="flex flex-col items-center gap-4 w-[calc(100vw-2rem)] overflow-hidden mx-[1rem]">
      <Swiper
        className="w-full md:max-w-[60rem] lg:max-w-[70rem]"
        slidesPerView={"auto"}
        centeredSlides={isMobile ? false : true}
        spaceBetween={50}
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        onSlideChange={(e) => {
          console.log('onSlideChange', e.activeIndex);
          setActiveIndex(e.activeIndex);
        }}
      >
        {CardsConfig.map((config, index) => (
          <SwiperSlide key={index}>
            <Card {...config} isActive={activeIndex === index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Pagination
        page={activeIndex}
        totalPages={CardsConfig.length}
      />
    </div>
  );
};
