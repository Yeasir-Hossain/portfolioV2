import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Image from "next/image";

const Swipper = ({ images }) => {
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {
                    images?.map((image, index) => <SwiperSlide
                        key={index}
                    >
                        <Image
                            src={image}
                            alt="1st image"
                            fill
                        />
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default Swipper;