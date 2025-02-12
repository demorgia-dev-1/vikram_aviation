import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import OurStory from './components/OurStory';
import ReachUs from './components/ReachUs';
import WhatWeDo from './components/WhatWeDo';
import sliderImg1 from './img/slider_img1.jpg';
import sliderImg4 from './img/slider_img4.jpg';
import sliderImg5 from './img/slider_img5.jpg';

const slides = [
  sliderImg1,
  sliderImg4,
  sliderImg5
];

const App = () => {
  const location = useLocation();
  const homeRef = useRef(null);

  useEffect(() => {
    if (location.pathname === '/') {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      window.scrollTo({
        top: -navbarHeight,
        behavior: 'smooth'
      });
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Vikram Aviation Pvt Ltd</title>
        <meta name="description" content="Welcome to Vikram Aviation Pvt Ltd" />
        <link rel="canonical" href="https://www.vikramaviation.com" />
      </Helmet>
      <div ref={homeRef}></div>
      <Navbar />
      <div className="navbar-offset">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const Home = () => (
  <>
    <Helmet>
      <title>Home - Vikram Aviation Pvt Ltd</title>
      <meta name="description" content="Home page of Vikram Aviation Pvt Ltd" />
      <link rel="canonical" href="https://www.vikramaviation.com/" />
    </Helmet>
    <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
    <OurStory />
    <WhatWeDo />
    <ReachUs />
  </>
);

const ScrollToComponent = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.slice(1);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>{location.pathname.slice(1).replace(/-/g, ' ')} - Vikram Aviation Pvt Ltd</title>
        <meta name="description" content={`Section ${location.pathname.slice(1).replace(/-/g, ' ')} of Vikram Aviation Pvt Ltd`} />
        <link rel="canonical" href={`https://www.vikramaviation.com${location.pathname}`} />
      </Helmet>
      <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
      <div id="about-us"><OurStory /></div>
      <div id="what-we-do"><WhatWeDo /></div>
      <div id="reach-us"><ReachUs /></div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:section",
        element: <ScrollToComponent />
      }
    ]
  }
]);

export default appRouter;