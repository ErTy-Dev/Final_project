import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { FreeMode , Autoplay , Navigation, } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardSlider from './CardSlider';
import '../firstSlider/FirstSlider.css';
import { useRef } from "react";

import img1 from './imgfirstSilder/img1.png'
import img2 from './imgfirstSilder/img2.png'
import img3 from './imgfirstSilder/img3.png'
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBestSelAction } from "../../../../../redux/actions/bestSelAction";



const FirstSlider = () => {
    const isMobile = useMediaQuery('(min-width:420px)');
    const swiperRef = useRef();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBestSelAction())
    },[])
    const {flowers} =useSelector(state=>state.bestSelReducer)
    console.log(flowers);
    return (
      <>{
        isMobile?
        <div className=" container  justify-content-center bg-cream slider-scroll-x" style={{minWidth: ''}}>
        <h1 className="FSlideH1">BEST SELLERS</h1>
            <Swiper
          
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            freeMode={true}
            navigation
            autoplay={{
                delay : 3000
            }}
            grabCursor={true}
            modules={[FreeMode , Autoplay , Navigation ]}
            className='mySwiper'
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
               768: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 30
               }
        }}
        >  
           <div className="container2">
                {flowers?.map((item)=>
                    <SwiperSlide key={item.id}>
                        <CardSlider data={item}  />  
                        <p className="textP">{item.title}</p>
                    </SwiperSlide>
                )}

                </div>
        </Swiper>

        <div style={{cursor: 'pointer'}} className="arrows prev" onClick={() => swiperRef.current?.slidePrev()}></div>
        <div  style={{cursor: 'pointer'}}className="arrows next" onClick={() => swiperRef.current?.slideNext()}></div>
  </div>:<div className="news">
            <h2 className="FSnews__title">BEST SELLERS</h2>

            <div className="cardss">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1.5}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    >
                   {flowers?.map((item)=><SwiperSlide key={item.id}>
                        <div className="cardd">
                            <img className="cardImageM" src={item?.photos[1]} alt="card-img" />
                            <p className="cardTextM">{item?.title}</p>
                        </div>
                    </SwiperSlide>
                   )}
                  
                </Swiper>
            </div>
        </div>
      }
      
      </>
     
    )
}

export default FirstSlider;