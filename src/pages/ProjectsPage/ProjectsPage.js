// src/pages/ProjectsPage/ProjectsPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import CustomSlider from "../../components/CustomSlider/CustomSlider";

// ДЕСКТОПНЫЕ фоны
import rectangle84 from "../../assets/images/rectangle84.png";
import rectangle85 from "../../assets/images/rectangle85.png";
import rectangle88 from "../../assets/images/rectangle88.png";
import rectangle89 from "../../assets/images/rectangle89.png";
// МОБИЛЬНЫЕ фоны
import rectangle84Mobile from "../../assets/images/1.png";
import rectangle85Mobile from "../../assets/images/2.png";
import rectangle88Mobile from "../../assets/images/3.png";
import rectangle89Mobile from "../../assets/images/4.png";

import styles from "./ProjectsPage.module.css";

function ProjectsPage() {
  const [props, api] = useSpring(() => ({ x: 0, y: 0 }));
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  // рефы для трёх слайдеров
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  const swiperRef3 = useRef(null);

  // параллакс от движения мыши
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      api.start({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [api]);

  // колесо мыши листает слайды только при ховере над слайдером (и на ≥1024px)
  useEffect(() => {
    const handleWheel = (e) => {
      if (window.innerWidth < 1024) return;
      if (!isSliderHovered) return;

      const target =
        swiperRef1.current?.el?.matches(":hover")
          ? swiperRef1.current
          : swiperRef2.current?.el?.matches(":hover")
          ? swiperRef2.current
          : swiperRef3.current?.el?.matches(":hover")
          ? swiperRef3.current
          : null;

      if (!target) return;
      e.preventDefault();
      e.deltaY > 0 ? target.slideNext() : target.slidePrev();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isSliderHovered]);

  // следим за шириной для переключения фонов
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // выбрать нужные картинки
  const bg84 = isMobile ? rectangle84Mobile : rectangle84;
  const bg85 = isMobile ? rectangle85Mobile : rectangle85;
  const bg88 = isMobile ? rectangle88Mobile : rectangle88;
  const bg89 = isMobile ? rectangle89Mobile : rectangle89;

  // данные для слайдеров (пример)
  const slidesClips = [
    { id: 1, image: "https://photo-works.net/images/tutorial/how-ot-make-picture-black-and-white-after.jpg", link: "/projects/1", alt: "Clip 1" },
    { id: 2, image: "https://photo-works.net/images/tutorial/how-ot-make-picture-black-and-white-after.jpg", link: "/projects/2", alt: "Clip 2" },
    { id: 3, image: "https://photo-works.net/images/tutorial/how-ot-make-picture-black-and-white-after.jpg", link: "/projects/3", alt: "Clip 3" },
    { id: 4, image: "https://photo-works.net/images/tutorial/how-ot-make-picture-black-and-white-after.jpg", link: "/projects/4", alt: "Clip 4" },
    { id: 5, image: "https://photo-works.net/images/tutorial/how-ot-make-picture-black-and-white-after.jpg", link: "/projects/5", alt: "Clip 5" },
  ];
  const slidesAds = [
    { id: 11, image: "https://www.cutoutimage.com/wp-content/uploads/2022/02/What-is-Black-and-white-photography.webp", link: "/projects/ad/1", alt: "Ad 1" },
    { id: 12, image: "https://www.cutoutimage.com/wp-content/uploads/2022/02/What-is-Black-and-white-photography.webp", link: "/projects/ad/2", alt: "Ad 2" },
    { id: 13, image: "https://www.cutoutimage.com/wp-content/uploads/2022/02/What-is-Black-and-white-photography.webp", link: "/projects/ad/3", alt: "Ad 3" },
    { id: 14, image: "https://www.cutoutimage.com/wp-content/uploads/2022/02/What-is-Black-and-white-photography.webp", link: "/projects/ad/4", alt: "Ad 4" },
    { id: 15, image: "https://www.cutoutimage.com/wp-content/uploads/2022/02/What-is-Black-and-white-photography.webp", link: "/projects/ad/5", alt: "Ad 5" },
    { id: 16, image: "https://www.cutoutimage.com/wp-content/uploads/2022/02/What-is-Black-and-white-photography.webp", link: "/projects/ad/6", alt: "Ad 6" },
  ];
  const slidesFilms = [
    { id: 21, image: "https://images.pexels.com/photos/57905/pexels-photo-57905.jpeg?cs=srgb&dl=pexels-jhawley-57905.jpg&fm=jpg", link: "/projects/film/1", alt: "Film 1" },
    { id: 22, image: "https://images.pexels.com/photos/57905/pexels-photo-57905.jpeg?cs=srgb&dl=pexels-jhawley-57905.jpg&fm=jpg", link: "/projects/film/2", alt: "Film 2" },
    { id: 23, image: "https://images.pexels.com/photos/57905/pexels-photo-57905.jpeg?cs=srgb&dl=pexels-jhawley-57905.jpg&fm=jpg", link: "/projects/film/3", alt: "Film 3" },
  ];

  // брейкпоинты для Swiper (прокинутся в CustomSlider)
  const sliderBreakpoints = {
    0:   { slidesPerView: 1.2 },
    576: { slidesPerView: 2   },
    768: { slidesPerView: 3   },
    1024:{ slidesPerView: 3   },
  };

  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }}>
      {/* Заголовок */}
      <ParallaxLayer offset={0} speed={0.8}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>ПРОЕКТЫ</h1>
        </div>
      </ParallaxLayer>

      {/* Фоновые слои с mobile/desktop */}
      <ParallaxLayer offset={0} speed={0.3} factor={1}>
        <animated.div
          className={styles.animatedBackground}
          style={{
            backgroundImage: `url(${bg84})`,
            transform: props.y.to((y) => `translateY(${y * 1.5}px)`),
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.8} factor={1}>
        <animated.div
          className={styles.animatedBackground}
          style={{
            backgroundImage: `url(${bg85})`,
            transform: props.y.to((y) => `translateY(${y * -1.2}px)`),
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8} factor={1}>
        <animated.div
          className={styles.animatedBackground}
          style={{
            backgroundImage: `url(${bg88})`,
            transform: props.y.to((y) => `translateY(${y * 1.2}px)`),
          }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.3} factor={1}>
        <animated.div
          className={styles.animatedBackground}
          style={{
            backgroundImage: `url(${bg89})`,
            transform: props.y.to((y) => `translateY(${y * -1.5}px)`),
          }}
        />
      </ParallaxLayer>

      {/* Первый слайдер */}
      <ParallaxLayer offset={0.3} speed={1}>
        <div data-aos-duration="1500" data-aos="fade-down" className={styles.content}>
          <h2 className={styles.subtitle}>КЛИПЫ</h2>
          <p className={styles.desc}>
            Какое-то крутое и прикольное описание клипов и авторов
          </p>
          <CustomSlider
            swiperRef={swiperRef1}
            setIsSliderHovered={setIsSliderHovered}
            slides={slidesClips}
            breakpoints={sliderBreakpoints}
            imgClassName={styles.slideImg}
          />
        </div>
      </ParallaxLayer>

      {/* Второй слайдер */}
      <ParallaxLayer offset={0.999999999999999} speed={1}>
        <div
          style={{ marginTop: "100px" }}
          data-aos-duration="1500"
          data-aos="fade-down"
          className={styles.content}
        >
          <h2 className={styles.subtitle}>РЕКЛАМЫ</h2>
          <p className={styles.desc}>
            Описание рекламных проектов и креативных идей
          </p>
          <CustomSlider
            swiperRef={swiperRef3}
            setIsSliderHovered={setIsSliderHovered}
            slides={slidesAds}
            breakpoints={sliderBreakpoints}
            imgClassName={styles.slideImg}
          />
        </div>
      </ParallaxLayer>

      {/* Третий слайдер */}
      <ParallaxLayer offset={1} speed={1}>
        <div
          data-aos-duration="1500"
          data-aos="fade-down"
          className={styles.content}
        >
          <h2 className={styles.subtitle}>ФИЛЬМЫ</h2>
          <p className={styles.desc}>
            Какое-то крутое и прикольное описание фильмов и авторов
          </p>
          <CustomSlider
            swiperRef={swiperRef2}
            setIsSliderHovered={setIsSliderHovered}
            slides={slidesFilms}
            breakpoints={sliderBreakpoints}
            imgClassName={styles.slideImg}
          />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default ProjectsPage;
