import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow  } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import rectangle84 from '../../assets/images/rectangle84.png'
import rectangle85 from '../../assets/images/rectangle85.png'
import rectangle88 from '../../assets/images/rectangle88.png'
import rectangle89 from '../../assets/images/rectangle89.png'


import styles from "./TestPage.module.css";

function TestPage() {
   return (
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
         <ParallaxLayer offset={0} speed={0.5}>
            <div data-aos-duration='1500' data-aos='fade-down' className={styles.titleContainer}>
               <h1 className={styles.title}>ПРОЕКТЫ</h1>
            </div>
         </ParallaxLayer>

         <ParallaxLayer
            offset={0}
            speed={0.3}
            factor={1}
            style={{
               backgroundImage: `url(${rectangle84})`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
            }}
           
         />
           <ParallaxLayer
            offset={0}
            speed={0.8}
            factor={1}
            style={{
               backgroundImage: `url(${rectangle85})`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
            }}
           
         />

         {/* 🔵 Вторая фоновая картинка (ближе к контенту) */}
         <ParallaxLayer
            offset={1}
            speed={0.8}
            factor={1}
            style={{
               backgroundImage: `url(${rectangle88})`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
               mixBlendMode: "screen", // опционально — эффект наложения
            }}
         />
     <ParallaxLayer
            offset={1}
            speed={0.3}
            factor={1}
            style={{
               backgroundImage: `url(${rectangle89})`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
               mixBlendMode: "screen", // опционально — эффект наложения
            }}
         />

         {/* <ParallaxLayer offset={0.3} speed={1}>
            <div className={styles.content}>
               <h2 className={styles.subtitle}>КЛИПЫ</h2>
               <p className={styles.desc}>
                  Какое-то крутое и прикольное описание клипов и авторов
               </p>

               <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={window.innerWidth < 768 ? 1 : 3}
                  loop={true}
                  coverflowEffect={{
                     rotate: 50,
                     stretch: 0,
                     depth: 100,
                     modifier: 1,
                     slideShadows: true,
                  }}
                  pagination={{ clickable: true }}
                  navigation={true}
                  modules={[EffectCoverflow ]}
                  className="mySwiper"
               >
                  <SwiperSlide>
                     <img
                        src="https://www.nikon.com.sg/media/learn-explore/guide-better-black-white-photography-sept-2022/tunnel-nikon-z-series-tips-nikon-cameras-lenses-accessories.jpg"
                        alt="clip4"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img
                        src="https://www.nikon.com.sg/media/learn-explore/guide-better-black-white-photography-sept-2022/tunnel-nikon-z-series-tips-nikon-cameras-lenses-accessories.jpg"
                        alt="clip4"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img
                        src="https://www.nikon.com.sg/media/learn-explore/guide-better-black-white-photography-sept-2022/tunnel-nikon-z-series-tips-nikon-cameras-lenses-accessories.jpg"
                        alt="clip4"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img
                        src="https://www.nikon.com.sg/media/learn-explore/guide-better-black-white-photography-sept-2022/tunnel-nikon-z-series-tips-nikon-cameras-lenses-accessories.jpg"
                        alt="clip4"
                     />
                  </SwiperSlide>
               </Swiper>
            </div>
         </ParallaxLayer> */}


           <ParallaxLayer offset={0.2}  speed={1}>
          <div data-aos-duration='1500' data-aos='fade-down'  className={styles.content}>
            <h2 className={styles.subtitle}>КЛИПЫ</h2>
            <p className={styles.desc}>
              Какое-то крутое и прикольное описание клипов и авторов
            </p>

            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={window.innerWidth < 768 ? 1 : 3}
              loop={true}
              coverflowEffect={{
                rotate: -13,
                stretch: 0,
                depth: 10,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
              className={styles.swiper}
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SwiperSlide key={i}>
                  <img
                    src="https://www.nikon.com.sg/media/learn-explore/guide-better-black-white-photography-sept-2022/tunnel-nikon-z-series-tips-nikon-cameras-lenses-accessories.jpg"
                    alt={`clip${i}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ParallaxLayer>
        
           <ParallaxLayer offset={1.000}  speed={1}>
          <div data-aos-duration='1500' data-aos='fade-down'  className={styles.content}>
            <h2 className={styles.subtitle}>КЛИПЫ</h2>
            <p className={styles.desc}>
              Какое-то крутое и прикольное описание клипов и авторов
            </p>

            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={window.innerWidth < 768 ? 1 : 3}
              loop={true}
              coverflowEffect={{
                rotate: -13,
                stretch: 0,
                depth: 10,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
              className={styles.swiper}
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SwiperSlide key={i}>
                  <img
                    src="https://www.nikon.com.sg/media/learn-explore/guide-better-black-white-photography-sept-2022/tunnel-nikon-z-series-tips-nikon-cameras-lenses-accessories.jpg"
                    alt={`clip${i}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ParallaxLayer>
                <ParallaxLayer offset={0.99999999999} speed={1}>
          <div data-aos-duration='1500' data-aos='fade-down'  className={styles.content}>
            <h2 className={styles.subtitle}>КЛИПЫ</h2>
            <p className={styles.desc}>
              Какое-то крутое и прикольное описание клипов и авторов
            </p>

            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={window.innerWidth < 768 ? 1 : 3}
              loop={true}
              coverflowEffect={{
                rotate: -13,
                stretch: 0,
                depth: 10,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
              className={styles.swiper}
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SwiperSlide key={i}>
                  <img
                    src="https://www.nikon.com.sg/media/learn-explore/guide-better-black-white-photography-sept-2022/tunnel-nikon-z-series-tips-nikon-cameras-lenses-accessories.jpg"
                    alt={`clip${i}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ParallaxLayer>
      </Parallax>
   );
}

export default TestPage;
