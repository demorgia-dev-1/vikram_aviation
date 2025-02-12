import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function Carousel({ slides, autoSlide = true, autoSlideInterval = 3000 }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(nextSlide, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [current, autoSlide, autoSlideInterval]);

    return (
        <div className='carousel-container relative w-full h-[60vh] sm:h-[70vh] md:h-[60vh] lg:h-[90vh] overflow-hidden mt-24 sm:mt-20'>
            <div
                className='flex h-full transition-transform ease-out duration-500'
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((s, index) => (
                    <div className='relative w-full h-full flex-shrink-0' key={index}>
                        <img src={s} alt={`carousel-${index}`} className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                        <AnimatePresence mode="wait">
                            {current === index && (
                                <motion.div
                                    className='absolute inset-x-0 top-0 flex flex-col justify-start items-center text-white p-4 text-center'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <motion.h1
                                        className='text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 md:mb-4 text-yellow-500 mt-20'
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                    >
                                        {index === 0 && 'Aviation Services'}
                                        {index === 1 && 'Maintenance Experts'}
                                        {index === 2 && 'High-Flying Support'}
                                    </motion.h1>
                                    <motion.h2
                                        className='text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 md:mb-4'
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                    >
                                        {index === 0 && 'Creative & Professional'}
                                        {index === 1 && 'Precision and Excellence'}
                                        {index === 2 && 'Innovative & Expertise'}
                                    </motion.h2>
                                    <motion.p
                                        className='text-xs sm:text-sm md:text-lg lg:text-2xl font-bold max-w-4xl'
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.8, duration: 0.5 }}
                                    >
                                        {index === 0 && 'Unlocking Skies with Certified Engineering Excellence - Elevating Aviation Services through Creativity and Professionalism.'}
                                        {index === 1 && 'Welcome to Your Trusted Aviation Maintenance Experts! With a relentless commitment to precision and excellence, we ensure the skies remain safe for all.'}
                                        {index === 2 && 'Welcome to High Flying Aviation Maintenance Support - Where Innovation Meets Expertise! Trust us to keep your aircraft soaring with precision and creativity.'}
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={previousSlide} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <HiChevronLeft size={30} />
                </button>
                <button onClick={nextSlide} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <HiChevronRight size={30} />
                </button>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_, i) => (
                        <div
                            onClick={() => setCurrent(i)}
                            key={i}
                            className={`
                              transition-all w-2 h-2 bg-white rounded-full
                              ${current === i ? "p-2" : "bg-opacity-50"}
                            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;