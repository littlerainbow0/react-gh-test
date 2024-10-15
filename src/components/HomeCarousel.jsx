// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import '../assets/css/style.css'

    const HomeCarousel = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const slides = [
        {
            image: "../../src/assets/images/train_exterior/train_exterior_starTrain.png.png",
            title: "星鳴號 即將推出",
            description: "星星的閃爍：星星在夜空中閃耀，就像是夢想與希望的象徵。火車穿梭於城市與大自然之間，宛如星星閃耀，象徵著追逐美好願望的過程。乘客登上星鳴號，彷彿搭乘一顆流星，朝著甜點之夢前進。",
        },
        {
            image: "../../src/assets/images/dessert/dessert_newDessert.jpg",
            title: "季節甜點",
            description: "甜點列車推出全新季節限定甜點！伴隨著四季的變換，精心挑選當季新鮮食材，將自然風味與巧妙創意融入每一口甜點。",
        },
        {
            image: "../../src/assets/images/train_interior/train_interior_newSite.png",
            title: "最新接駁休息站點介紹",
            description: "甜點列車即將推出全新接駁休息站點！這些站點不僅提供便捷的接駁服務，還設有舒適的休息區和特色小吃。",
        },
        {
            image: "../../src/assets/images/people/people_pastryChef.png",
            title: "米其林甜點大廚",
            description: "甜點列車隆重宣布與米其林三星大廚合作，共同打造奢華的甜點饗宴！每一款甜點都由大廚精心設計，將精緻工藝與極致口感完美結合。",
        },
        ];
    
        const updateCarousel = (index) => {
        setCurrentSlide(index);
        };
    
        const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        };
    
        const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        };
    
        return (
        <div className="relative mx-auto mt-10 overflow-hidden rounded-lg shadow-lg">
            <div className="flex carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
            {slides.map((slide, index) => (
                <div className="flex-shrink-0 w-full" key={index}>
                <div className="relative flex justify-center w-full h-screen">
                    <div className="relative flex items-center justify-center w-full h-screen p-4">
                    {/* 圖卡片 */}
                    <div className="relative w-full max-w-[90%] z-10 aspect-[13/10] mx-auto">
                        <img className="object-fill w-full h-full max-w-full max-h-screen pl-16 md:pl-48 xl:pl-96" src={slide.image} alt={slide.title} />
                    </div>
                    </div>
                    {/* 文卡片 */}
                    <div className="absolute left-1/4 w-1/3 aspect-[4/4.5] bg-[#ffffff] shadow-lg transform -translate-x-1/3 translate-y-[20%] z-20 border border-solid border-[#8F755A]">
                    <h1 className="text-[#634A34] mb-6 text-left font-titleFont text-h6 sm:text-h5 md:text-h4 lg:text-h2 font-bold mt-10 pl-10">{slide.title}</h1>
                    <p className="px-10 mt-1 font-normal text-left sm:mt-1 font-bodyFont text-p-3 sm:text-p-3 md:text-p-2 lg:text-p-1 text-indent-1 max-h-[250px] overflow-y-auto">{slide.description}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
    
            {/* Navigation Buttons */}
            <button className="absolute w-3 h-3 p-2 transform rotate-90 -translate-y-1/2 bg-opacity-50 bg-center bg-no-repeat bg-contain rounded-full cursor-pointer top-1/2 left-4 bg-custom-icon4" onClick={prevSlide}></button>
            <button className="absolute w-3 h-3 p-2 transform -rotate-90 -translate-y-1/2 bg-opacity-50 bg-center bg-no-repeat bg-contain rounded-full cursor-pointer top-1/2 right-4 bg-custom-icon4" onClick={nextSlide}></button>
    
            {/* Dots Indicator */}
            <div className="absolute flex space-x-2 bottom-4 right-4">
            {slides.map((_, index) => (
                <div
                key={index}
                className={`w-3 h-3 bg-center bg-no-repeat bg-contain cursor-pointer ${index === currentSlide ? 'opacity-100' : 'opacity-50'} bg-custom-icon4`}
                onClick={() => updateCarousel(index)}
                ></div>
            ))}
            </div>
        </div>
        );
    };
    
    export default HomeCarousel;