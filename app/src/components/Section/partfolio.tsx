import {useEffect, useState} from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import druplicon from '../../assets/portflio /img.png'
import portfolio from '../../assets/portflio /img_1.png'
import capa from '../../assets/portflio /img_2.png'
import progress from "../../assets/UI/Group 3.svg";



const Partfolio = () => {

    const [slidesPerView, setSlidesPerView] = useState(3);

    const handleResize = () => {
        // Изменение количества слайдов в зависимости от ширины экрана
        if (window.innerWidth < 1024) {
            setSlidesPerView(1);
        }
        else if (window.innerWidth < 1280) {
            setSlidesPerView(2);
        }
         else {
            setSlidesPerView(3);
        }
    };

    useEffect(() => {
        // Установка начального значения при загрузке компонента
        handleResize();

        // Добавление слушателя события изменения размера окна
        window.addEventListener('resize', handleResize);

        // Удаление слушателя события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const Span = styled.span`
    position: relative;
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        top: 110%;
        left: 0;
        background-color: #FF4A57;
        border-radius: 3px;
    }`;

    const slides = [
        { id: 1, imageUrl: druplicon, caption: 'drupale-coder' },
        { id: 1, imageUrl: portfolio, caption: 'portfolio' },
        { id: 1, imageUrl: capa, caption: 'capa' },
        { id: 1, imageUrl: druplicon, caption: 'portfolio' },
        { id: 1, imageUrl: portfolio, caption: 'drupale-coder' },
        { id: 1, imageUrl: capa, caption: 'portfolio' },
    ];

    return (
        <div className={'container mx-auto px-8 mb-40'}>
            <h2 data-aos={'fade-right'} data-aos-easing="ease-out-cubic"
                data-aos-duration="500" data-aos-delay={'100'} className={'text-center text-5xl text-accent mb-10 sm:text-left'}>
                <Span>Portfolio</Span></h2>
            <div className={'sm:columns-2 flex flex-row justify-center'}>
                <div data-aos={'fade-right'} data-aos-easing="ease-out-cubic"
                     data-aos-duration="500" data-aos-delay={'300'} className={'basis-6/12 w-full sm:w-11/12'}>
                    <Swiper
                        modules={[Navigation, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor
                        centeredSlides
                        slidesPerView={slidesPerView}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 20,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,}}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        loop={true}
                        className={'md:m-16'}
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className={'p-3 bg-header w-full h-100 rounded-3xl'}>
                                    <img className={'rounded-t-3xl mb-2'} src={slide.imageUrl} alt={slide.caption}/>
                                    <h6 className={'font-bold text-xl text-center'}>{slide.caption}</h6>
                                    {/*<p className={'text-xs text-gray-600'}>{description}</p>*/}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {window.innerWidth > 992 &&
                        <div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    }

                </div>
                <div data-aos-easing="ease-out-cubic"
                     data-aos-duration="500" data-aos-delay={'300'} data-aos={'fade-left'}
                     className={'md:basis-6/12 md:flex justify-end items-center hidden'}>
                    <img className={'h-52'} src={progress} alt={'progress'}/>
                </div>
            </div>
        </div>
    );
};

export default Partfolio;