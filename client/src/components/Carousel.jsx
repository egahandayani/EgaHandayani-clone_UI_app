import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="h-[50vh] sm:h-[60vh] lg:h-[70vh]"
      >
        <SwiperSlide>
          <img
            src="https://www.bakmigm.com/cfind/source/thumb/images/banner/promo-hampers-2024/cover_w375_h375_web-banner--600-x-600-px-2.png"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.bakmigm.com/cfind/source/thumb/images/banner/paket-salju-2024/cover_w375_h375_web-banner-_600-x-600-px-100.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.bakmigm.com/cfind/source/thumb/images/banner/cover_w375_h375_web-banner--600-x-600-px-1.png"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
