import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { height } from "@mui/system";

export function HotProduct() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{ height: '100%' }}
            >
                <SwiperSlide>
                    <div>
                        <img src="https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-14pr/deeppurple/landscape-apple-iphone14pro-deeppurple-02-900x1200.jpg" style={{ height: 700 }} />
                    </div>
             
                </SwiperSlide>
       
                <SwiperSlide>
                    <div>
                        <img src="https://images.macrumors.com/t/GiQYiBS8RfmRiwlGSaHweMIQqUk=/1600x/article-new/2017/11/snowyiphonex2.jpg" style={{ height: 700 }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://cdn.tgdd.vn/Products/Images/60/237543/op-lung-magsafe-iphone-12-12-pro-da-apple-mhke3-290722-013628-600x600.jpg" style={{ height: 700 }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://cdn.tgdd.vn/Products/Images/42/153856/s16/iphone-11-den-1-650x650.jpg" style={{ height: 700 }} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="https://www.xtmobile.vn/vnt_upload/product/01_2022/thumbs/(600x600)_crop_iphone-13-128gb-cu-likenew.jpg" style={{ height: 700 }} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
