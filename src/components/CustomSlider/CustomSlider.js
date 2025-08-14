import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import styles from "./CustomSlider.module.css"; // можно заменить на твой общий модуль

/**
 * Props:
 * - swiperRef: React.RefObject (для контроля из родителя)
 * - setIsSliderHovered: (bool) => void (нужен для блокировки скролла страницы на desktop)
 * - slides: Array<{ id?: string|number, image: string, link?: string, alt?: string }>
 * - breakpoints?: Swiper breakpoints (опционально)
 * - className?: string (для контейнера Swiper)
 * - imgClassName?: string (класс для <img>) — можно передать styles.slideImg из твоего модуля
 */
export default function CustomSlider({
  swiperRef,
  setIsSliderHovered,
  slides = [],
  breakpoints = {
    0: { slidesPerView: 1.2 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 3 },
  },
  className,
  imgClassName,
}) {
  const navigate = useNavigate();

  const onEnter = () => {
    if (window.innerWidth >= 1024) setIsSliderHovered(true);
  };
  const onLeave = () => {
    if (window.innerWidth >= 1024) setIsSliderHovered(false);
  };

  const handleClick = (e, link) => {
    // Не навигируем, если это был drag (свайп)
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (swiper.allowClick && link) navigate(link);
  };

  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ width: "100%" }}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        breakpoints={breakpoints}
        coverflowEffect={{
          rotate: -13,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className={className ?? styles.swiper}
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={s.id ?? idx}>
            <img
              src={s.image}
              alt={s.alt ?? `slide-${idx + 1}`}
              className={imgClassName ?? styles.slideImg}
              draggable={false}
              onClick={(e) => handleClick(e, s.link)}
              style={{ cursor: s.link ? "pointer" : "default" }}
              onKeyDown={(e) => {
                if (s.link && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  handleClick(e, s.link);
                }
              }}
              tabIndex={s.link ? 0 : -1}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
