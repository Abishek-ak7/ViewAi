import React from 'react';
import '../assests/Home.css';
import logo from '../assests/images/Vector (1).png';
import text from '../assests/images/VIEW AI.png';
import profile from '../assests/images/Profile.png';
import star from '../assests/images/Group_27-removebg-preview.png';
import star1 from '../assests/images/Star 1.png';
import arrow from '../assests/images/Group 102.png';
import mlogo from '../assests/images/ep_menu.png'
import bg from '../assests/images/iPad Mini.png';
import b from '../assests/images/Rectangle 158.png';
import Unique from './Unique';
import  { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll'


const Home = () =>{
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 27) {
        handleClose();
        if (menuOpen) toggleMenu();
      }
    };

    if (isVisible || menuOpen) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isVisible, menuOpen]);

  return (
    <div className="Home bg-ipad-mini p-4 min-h-screen overflow-hidden" id="Home">
      <div className="relative flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <img src={logo} className="flex ml-5 mt-3 w-16 h-10" alt="Logo" />
            <img src={star1} className="absolute top-2 left-14 w-4 h-4" alt="Star" />
            <img src={star} className="absolute top-1 left-16 w-4 h-4" alt="Star 1" />
          </div>
          <img src={text} className="h-7 mt-3" alt="View AI" />
        </div>
        <div className='hidden sm:hidden md:block lg:block'>
          <div className="flex justify-evenly pr-2 py-0.5 mr-10 mt-3">
            <img src={profile} className="w-8 h-8 mr-2 rounded-full ml-0.5 border-2 border-white" alt="Profile" />
            <p className="text-white mr-1 text-xl cursor-pointer mb-0.5 font-bold">Connect</p>
          </div>
        </div>
        <div className='bg-white/45 p-1 border-2 rounded-full block sm:block md:hidden lg:hidden'>
          <div className='bg-black/60 border-2 border-white rounded-full'>
            <img src={mlogo} onClick={toggleMenu} className='w-8 h-8 p-1' alt="Menu" />
          </div>
        </div>
        {menuOpen && (
          <div className="fixed inset-0 bg-white/10 h-3/4 ml-auto border-white border-2 backdrop-blur flex flex-col items-center justify-center w-1/2">
            <div onClick={toggleMenu} className='bg-white/45 p-1 absolute top-8 right-7 text-black border-2 rounded-full block sm:block md:hidden lg:hidden'>
            <div className='bg-black/60 border-2 border-white rounded-full'>
              <FontAwesomeIcon icon={faTimes} style={{ width: '35px', height: '30px',color:'white' }} />
              </div>
              </div>
            <ul className="flex flex-col gap-11 text-start mt-16">
              <li><Link onClick={toggleMenu} to="Home" spy={true} smooth={true} offset={-350} duration={500} className=" text-white font-bold text-lg  ">Home</Link></li>
              <li><Link onClick={toggleMenu} to="second" spy={true} smooth={true} offset={5} duration={500} className=" text-white font-bold text-lg  ">Make us Unique</Link></li>
              <li><Link onClick={toggleMenu} to="about" spy={true} smooth={true} offset={50} duration={500} className=" text-white font-bold text-lg  ">About</Link></li>
              <li><Link onClick={toggleMenu} to="contact" spy={true} smooth={true} offset={50} duration={500} className=" text-white font-bold text-lg ">Connect with us</Link></li>
            </ul>
            <div className='flex  mt-9 '>
                <div>
                    <svg className=" m-5" fill="white"viewBox="0 0 16 16" height="30px"width="30px">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>  
                </div> 
                <div>                 
                    <svg className=" m-5 " fill="white" viewBox="0 0 16 16"height="30"width="30">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
                    </svg>
                </div>
            </div>
          </div>
        )}
      </div>
      <div className='flex justify-end h-full'>
        <div className='md:mt-9'>
          <div className='w-1/2 mt-14 md:mt-0 md:w-1/3 xl:w-1/4 xl:left-80 md:left-10 absolute h-4/5 sm:transparent md:bg-gray-800 rounded-xl md:backdrop-blur-sm md:bg-opacity-20 lg:bg-opacity-20 xl:bg-opacity-20 md:border-2 lg:border-2 xl:border-2 md:border-gray-500 lg:border-gray-500 xl:border-gray-500 pt-10'>
            <div className='flex bg-transparent md:pt-16 w-full px-3'>
              <img src={text} className="bg-transparent w-full h-full md:w-full md:h-2/3" alt="View AI" />
            </div>
            <div className='flex md:mt-10 mt-3 bg-transparent'>
              <img src={b} className='md:w-3 md:h-10 w-3 h-10 md:mt-5' alt="" />
              <p className='text-white md:text-3xl w-full sm:text-lg bg-transparent pl-3'>AI and E-Commerce Innovation</p>
            </div>
            <p className='text-white md:mt-10 mt-3 w-11/12 whitespace-normal bg-transparent px-3 ml-2'>We revolutionize formal wear shopping with our custom e-commerce platform.</p>
            <div className='flex mt-10 items-center p-1 w-3/4 md:w-3/4 md:mt-4 justify-center md:bg-white/30 md:rounded-full rounded-lg lg:mt-10 xl:mt-28 md:border-2 border-[1px] md:border-white border-gray-600 md:ml-4 ml-1'>
              <p className='text-white text-xl font-semibold pb-1 bg-transparent'>Get Started</p>
              <img src={arrow} className='w-8 h-8 bg-transparent rounded-full p-1' alt="Arrow" />
            </div>
          </div>
        </div>
        <div>
          <img src={bg} className='md:h-screen h-fit mt-14 w-full md:-mt-8 ml-36' alt='ipad mini' />
        </div>
      </div>
      <div className='mt-44 md:mt-0' id="second">
        <div className='flex items-center justify-center'>
          <h1 className='text-4xl font-semibold text-white'>Making Us Unique</h1>
        </div>
        <p className='md:ml-20 text-center mt-10 text-lg text-white md:mb-10'>Our custom formal e-commerce SaaS platform stands out by integrating cutting-edge AI for personalized recommendations,<br />
          real-time virtual tailoring, and seamless multi-brand integration. Built with a robust backend using Python and cloud-native technologies, our platform ensures scalability, security, and an exceptional user experience.
        </p>
      </div>
      <Unique/>
        
      </div> 
  );
}
export default Home;