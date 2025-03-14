import React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import logoInsideDark from '../assets/logo/logo-inside-dark.png';
import logoOutsideDark from '../assets/logo/logo-outside-dark.png';
const Header = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const welcomeContainerRef = useRef(null);
  useGSAP(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: -150,
      yoyo: true,
      transformOrigin: "bottom",
      ease: 'power2.inOut',
      duration: 1,
    });
    gsap.fromTo(headerRef.current, {
      height: "100vh",
      ease: 'power2.inOut',
      duration: 1.5,
      delay: 2,
    }, {
      height: "10vh",
      ease: 'power2.inOut',
      duration: 1.5,
      delay: 2,
    });
   
    gsap.fromTo(textRef.current, {
      ease: 'power2.inOut',
      duration: 1.5,
      scale: 1,
      delay: 2,
    }, {
      ease: 'power2.inOut',
      duration: 1.5,
      delay: 2,
      scale: 0.8,
    });
  }, []);
  return (
    <header>
      <div ref={headerRef} className="bg-blue-800 bg-contain bg-center bg-no-repeat flex items-center justify-center">
        <div className="bg-white p-8 w-1/4 h-1/8 rounded-md overflow-hidden flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center" ref={textRef}>Weather.io</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
