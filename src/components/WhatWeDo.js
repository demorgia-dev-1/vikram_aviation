import React, { useCallback, useState, useEffect } from 'react';
import { BsCheck2 } from "react-icons/bs";
import { FaRegHandPeace, FaRegLightbulb, FaCartArrowDown } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";

function WhatWeDo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      icon: <BsCheck2 />,
      title: "PRECISION CALIBRATION & GSE",
      description: "Elevate your aviation experience with our meticulous calibration services. From altimeters to airspeed indicators, our expert technicians fine-tune your instruments to ensure optimal performance. Our commitment extends to Ground Support Equipment (GSE) Calibration & Repairs, where we meticulously inspect, calibrate, and repair hydraulic test stands, aircraft jacks, and essential GSE, contributing to the seamless efficiency of your ground operations"
    },
    {
      icon: <FaRegHandPeace />,
      title: "AIRCRAFT BLANKING",
      description: "We offer a comprehensive range of services designed to protect and enhance the functionality of your aviation equipment. Our services encompass steamers for efficient cleaning and maintenance, Pitot covers to safeguard critical instrumentation, engine covers to shield engines from environmental factors, rotor covers for added protection, various inlet and outlet covers to maintain peak performance, body covers for all-around protection, and front glass shield covers to ensure visibility and safety. With our extensive array of services, we provide top-notch solutions for the aviation industry, ensuring the longevity and reliability of your aircraft components."
    },
    {
      icon: <MdElectricBolt />,
      title: "REPAIR & MAINTENANCE OF HEADSETS",
      description: "We are specialized in the repair and maintenance of aircraft headsets. Our comprehensive expertise enables us to pinpoint and address a myriad of headset issues, from electrical malfunctions to mechanical intricacies. Our skilled technicians possess the acumen to diagnose faults accurately, ensuring swift and precise repairs that reinstate optimal functionality and reliability to each headset. Trust to navigate the complexities of headset intricacies with unmatched proficiency, ensuring seamless communication in aviation operations."
    },
    {
      icon: <FaRegHandPeace />,
      title: "AIRCRAFT INTERIOR CLEANING",
      description: "The purpose of cleaning standards in commercial aircraft is to ensure the health and safety of passengers and crew. Aircraft cleaning standards are regulatory requirements that civil aviation authorities impose on the airline operators to ensure the minimum level of cleanliness onboard. For making an Aircraft dust, dirt and insect free through aircraft cleaning process is performed. The interior cleaning involves the following sub process; Vacuum Cleaning , Deep Cleaning & Dry Cleaning."
    },
    {
      icon: <MdElectricBolt />,
      title: "ELECTRICAL BENCH CHECKS & REPAIRS",
      description: "Experience top-tier avionics reliability through our exhaustive bench checks and advanced repair techniques. We meticulously assess and repair your aircraft's electrical systems, ensuring flawless functionality. Examples include precision diagnostics for navigation systems, thorough testing of communication equipment, and advanced repairs on critical electrical components for optimal in-flight performance."
    },
    {
      icon: <FaRegLightbulb />,
      title: "AIRCRAFT FUMIGATION",
      description: "Operators have reported aircraft infestations by rodents, including mice and rats, as well as reptiles like snakes and lizards, causing passenger and crew discomfort, potential damage, and grounding in extreme cases, especially when electrical wiring is affected. These pests are often attracted to the odor emitted by wire insulation. Our in-service experience reveals that rodents and reptiles tend to access aircraft through open doors and access panels during extended parked periods. Beyond fumigation, we offer comprehensive aircraft disinfection services to eliminate viruses and harmful bacteria, covering specific areas or providing full aircraft disinfection."
    },
    {
      icon: <FaCartArrowDown />,
      title: "CONSUMABLES AND SPARE PARTS",
      description: "In the realm of Aircraft Consumables and Spare Parts, we offer an extensive array of essential products and components that ensure the uninterrupted operation of your aircraft. Our services encompass a wide range of consumables and spare parts, from critical safety equipment to routine maintenance supplies, all designed to meet the stringent standards and requirements of the aviation industry. We are dedicated to providing reliable, top-quality solutions to keep your aircraft flying safely and efficiently."
    },
    {
      icon: <HiOutlineSpeakerphone />,
      title: "AIRCRAFT EXTERIOR CLEANING",
      description: "This cleaning is a light exterior cleaning intended to maintain a favorable appearance of the aircraft's exterior between major detailed cleaning events. It is intended to address areas of the exterior that need immediate attention and plainly visible to owners. When it comes to washing an aircraft's exterior, there are two basic types of methods; Wet Method & Dry Method The wet wash is the most familiar: Spray on water and cleaning agent (soap), scrub the surface, rinse and dry."
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  }, [services.length]);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className='mt-8 sm:mt-16 bg-gray-100 p-4 sm:p-8'>
      <div className='text-center mb-6 sm:mb-8'>
        <h1 className='text-3xl sm:text-4xl font-bold border-b-2 border-gray-500 inline-block pb-2 sm:pb-4 mt-6 sm:mt-10'>
          What <span className='text-yellow-500'>We Do</span>
        </h1>
        <p className='text-sm sm:text-xl p-3 sm:p-5'>
          We offer a comprehensive range of aircraft interior products and services, <br className='hidden sm:inline' />
          including upholstery, leather, seat cushion & headset repairs, as well as the supply of ready-to-install components, meeting FAA standards.
        </p>
      </div>

      <div
        className='relative bg-white rounded-lg p-4 sm:p-6 overflow-hidden mx-2 sm:mx-10'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className='flex transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={index} className='w-full flex-shrink-0 px-4 sm:px-20 py-6 sm:py-12'>
              <h1 className='text-xl sm:text-2xl md:text-3xl pb-2 flex items-center justify-center animate-bounce'>
                <span className='text-3xl sm:text-4xl md:text-6xl font-bold pr-2 sm:pr-4 md:pr-10 text-yellow-500 animate-pulse'>{service.icon}</span>
                {service.title}
              </h1>
              <p className='text-sm md:text-base lg:text-lg pl-2 sm:pl-12 md:pl-24'>{service.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className='text-lg sm:text-xl px-2 py-2 sm:px-3 sm:py-3 absolute left-1 sm:left-4 top-1/2 hover:bg-gray-400 transform -translate-y-1/2 bg-yellow-500 text-white rounded-full z-10 transition-opacity duration-300 hover:opacity-75 text-center'
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className='text-lg sm:text-xl px-2 py-2 sm:px-3 sm:py-3 absolute right-1 sm:right-4 top-1/2 hover:bg-gray-400 transform -translate-y-1/2 bg-yellow-500 text-white rounded-full z-10 transition-opacity duration-300 hover:opacity-75'
        >
          &gt;
        </button>
      </div>

      <div className='flex justify-center mt-4'>
        {services.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
