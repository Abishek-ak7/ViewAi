import React from 'react';
import '../assests/Home.css';
import logo from '../assests/images/Vector (1).png';
import text from '../assests/images/VIEW AI.png';
import profile from '../assests/images/Profile.png';
import star from '../assests/images/Group_27-removebg-preview.png';
import star1 from '../assests/images/Star 1.png';
import arrow from '../assests/images/Group 102.png';
// import social1 from '../assests/images/Linkedin Logo.png';
// import social2 from '../assests/images/Instagram Logo.png';
// import text2 from '../assests/images/VIEW AI 1.png';
// import rectangle from '../assests/images/Rectangle 155.png';
// import scroll from '../assests/images/Scroll.png';
// import downrec from '../assests/images/Rectangle 156.png';
import bg from '../assests/images/iPad Mini.png';
import b from '../assests/images/Rectangle 158.png';
// import bgmi from '../assests/images/bgi.png';

export default function Home() {
  return (
    <div>
      <div className="Home bg-ipad-mini p-4 min-h-screen overflow-hidden ">
        <div className="relative flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img src={logo} className="flex ml-5 mt-3 w-16 h-10" alt="Logo" />
              <img src={star1} className="absolute top-2 left-14 w-4 h-4" alt="Star" />
              <img src={star} className="absolute top-1 left-16 w-4 h-4" alt="Star 1" />
            </div>
            <img src={text} className="h-7 mt-3" alt="View AI" />
          </div>
          <div className="flex justify-evenly border border-white rounded-2xl pr-2 py-0.5 mr-10 mt-3 bg-gray-500">
            <img src={profile} className="w-8 h-8 mr-2 rounded-full ml-0.5" alt="Profile" />
            <p className="text-white bg-gray-500 mr-1 text-xl cursor-pointer mb-0.5">Connect</p>
          </div>
        </div>
        <div className='flex justify-end h-full'>
          <div className='md:mt-9'>
            <div className='w-1/2 mt-14 md:mt-0 md:w-1/3 xl:w-1/4 xl:left-80 md:left-10 absolute h-4/5 sm:transparent md:bg-gray-800 rounded-xl md:backdrop-blur-sm md:bg-opacity-20 lg:bg-opacity-20 xl:bg-opacity-20 md:border-2 lg:border-2 xl:border-2 md:border-gray-500 lg:border-gray-500 xl:border-gray-500 pt-10'>
            <div className='flex bg-transparent md:pt-16 w-full px-3'>
                <img src={text} className="bg-transparent w-full h-full md:w-full md:h-2/3" alt="View AI" />
                {/* <p className=' bg-purple-600 text-purple-600 h-44 p-1 rounded-sm'>s</p> */}
              </div>
              <div className='flex md:mt-10 mt-3 bg-transparent'>
                <img src={b} className='md:w-3 md:h-10 w-3 h-10 md:mt-5' alt="" />
                <p className='text-white md:text-3xl w-full sm:text-lg bg-transparent pl-3'>AI and E-Commerce Innovation</p>
              </div>
             
              <p className='text-white md:mt-10 mt-3 w-11/12 whitespace-normal bg-transparent px-3 ml-2'>We revolutionize formal wear shopping with our custom e-commerce platform.</p>
              <div className='flex mt-10 items-center p-1 w-3/4 md:w-3/4 md:mt-4 justify-center md:bg-white/30 md:rounded-full rounded-lg  lg:mt-10 xl:mt-28 md:border-2 border-[1px] md:border-white border-gray-600 md:ml-4 ml-1'>
                <p className='text-white text-xl font-semibold pb-1 bg-transparent'>Get Started</p>
                <img src={arrow} className='w-8 h-8 bg-transparent rounded-full p-1' alt="Arrow" />
              </div>
            </div>
          </div>
          <div className="pattern">
            <img src={bg} className='md:h-screen h-fit mt-14  w-full md:-mt-8 ml-36 ' alt='ipad mini' />
          </div>
        </div>
      </div>
    </div>
  );
}