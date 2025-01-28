import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img from '../img/098.jpg';
import ShowHide from './ShowHide';

function OurStory() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.div
            className='text-center'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h1
                className='text-4xl font-bold border-b-2 border-gray-500 inline-block pb-4 mt-8'
                variants={itemVariants}
            >
                Our <span className='text-yellow-500'>Story</span>
            </motion.h1>

            <div className='flex flex-col md:flex-row mt-10 justify-between items-center mx-4 md:mx-14'>
                <motion.div
                    className='w-full md:w-1/2 md:pr-8'
                    variants={itemVariants}
                >
                    <motion.h1
                        className='text-2xl font-bold'
                        variants={itemVariants}
                    >
                        What Do You <span className='text-yellow-500'>Want To Know</span>
                    </motion.h1>
                    <motion.p
                        className='text-sm md:text-base lg:text-lg mt-4 text-start'
                        variants={itemVariants}
                    >
                        Welcome to Vikram Aviation Pvt Ltd (VAPL), where we take immense pride in our rich heritage and
                        commitment to excellence in aviation.
                    </motion.p>
                    {!showMore && (
                        <motion.button
                            className='bg-yellow-400 text-black text-md p-2 rounded-lg px-3 mt-4'
                            onClick={toggleShowMore}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Know More
                        </motion.button>
                    )}
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: showMore ? 'auto' : 0, opacity: showMore ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {showMore && (
                            <div className='text-md relative'>
                                <div className='text-sm md:text-base lg:text-lg text-start'>
                                    <p>
                                        At VAPL, we believe in providing top-notch training and services to aspiring aviation professionals. Our journey began with a vision to create a premier institution that nurtures talent and fosters growth in the aviation industry. Over the years, we have grown and evolved, staying true to our mission of delivering excellence and innovation.
                                    </p>
                                </div>
                                <motion.button
                                    className='bg-yellow-400 text-black text-md p-2 rounded-lg px-3 mt-4 mb-4 md:mb-0'
                                    onClick={toggleShowMore}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Show Less
                                </motion.button>
                            </div>
                        )}
                    </motion.div>
                    <div className='mt-8'>
                        <ShowHide />
                    </div>
                </motion.div>

                <motion.div
                    className='w-full md:w-1/2 md:pl-8 mt-6'
                    variants={itemVariants}
                >
                    <motion.img
                        src={img}
                        alt="Our Story"
                        className='w-full h-auto shadow-lg rounded-lg'
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default OurStory;