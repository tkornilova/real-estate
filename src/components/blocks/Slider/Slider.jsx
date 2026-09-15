import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slider1Img from '../../../assets/images/slider/slider-1.jpg';
import slider2Img from '../../../assets/images/slider/slider-2.jpg';
import slider3Img from '../../../assets/images/slider/slider-3.jpg';
import slider4Img from '../../../assets/images/slider/slider-4.jpg';

import './Slider.scss';

const sliderData = [
  {
    id: 1,
    img: slider1Img,
    alt: 'Новостройка на улице Новая',
    address: 'Ул. Новая, дом 8',
    rating: 4,
  },
  {
    id: 2,
    img: slider2Img,
    alt: 'Новостройка на улице Садовая',
    address: 'Ул. Садовая, дом 2',
    rating: 5,
  },
  {
    id: 3,
    img: slider3Img,
    alt: 'Новостройка на улице Мира',
    address: 'Ул. Мира, дом 1',
    rating: 4,
  },
  {
    id: 4,
    img: slider4Img,
    alt: 'Новостройка на улице Главная',
    address: 'Ул. Главная, дом 3',
    rating: 3,
  },
];

export const Slider = () => {
  return (
    <div className="slider">
      <button
        className="slider__button slider__button-prev button"
        type="button"
        aria-label="Предыдущий слайд"
      />

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.slider__button-next',
          prevEl: '.slider__button-prev',
        }}
        pagination={{
          el: '.slider__pagination',
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        loop
      >
        {sliderData.map((slide) => (
          <SwiperSlide className="slider__item" key={slide.id}>
            <a href="#" className="slider__link link">
              <img src={slide.img} alt={slide.alt} width="470" height="341" />

              <div className="slider__description">
                <h3 className="slider__title">{slide.address}</h3>

                <div className="slider__stars" aria-label={`Рейтинг ${slide.rating} из 5`}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg key={index} width="14" height="14" aria-hidden="true">
                      <use
                        href={`${import.meta.env.BASE_URL}icons.svg#${
                          index < slide.rating ? 'star-red-icon' : 'star-white-icon'
                        }`}
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="slider__button slider__button-next button"
        type="button"
        aria-label="Следующий слайд"
      />

      <div className="slider__pagination" />
    </div>
  );
};
