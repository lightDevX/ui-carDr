/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import img1 from '../../../../assets/images/banner/1.jpg';
import img2 from '../../../../assets/images/banner/2.jpg';
import img3 from '../../../../assets/images/banner/3.jpg';
import img4 from '../../../../assets/images/banner/4.jpg';

const imageUrls = [
    img1, img2, img3, img4
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <>
            <div className="carousel w-full mt-5 mb-5">
                {imageUrls.map((imageUrl, index) => (
                    <div key={`slide${index}`} className={`carousel-item relative w-full h-[600px] ${currentSlide === index ? 'visible' : 'hidden'}`}>
                        <img src={imageUrl} alt={`Slide ${index}`} className="w-full" />
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <div className=''>
                                <h2>Affordable Price For Car Servicing</h2>
                                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className='flex sm:flex-row'>
                                    <button className="btn bg-[#FF3811] hover:bg-cyan-400 text-white w-44 h-14 border-none mr-4">Button</button>
                                    <button className="btn btn-outline text-white w-44 h-14">Default</button>
                                </div>
                            </div>
                            <button onClick={() => goToSlide((index + imageUrls.length - 1) % imageUrls.length)} className="btn btn-circle mr-3">❮</button>
                            <button onClick={() => goToSlide((index + 1) % imageUrls.length)} className="btn btn-circle bg-[#FF3811] border-none">❯</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Banner;
