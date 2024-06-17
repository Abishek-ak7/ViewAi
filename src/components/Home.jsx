import React from 'react';
import '../assests/Home.css';
import logo from '../assests/images/Vector (1).png';
import text from '../assests/images/VIEW AI.png';
import profile from '../assests/images/Profile.png';
import star from '../assests/images/Group_27-removebg-preview.png';
import star1 from '../assests/images/Star 1.png';
import arrow from '../assests/images/Group 102.png'
// import social1 from '../assests/images/Linkedin Logo.png';
// import social2 from '../assests/images/Instagram Logo.png';
// import text2 from '../assests/images/VIEW AI 1.png';
// import rectangle from '../assests/images/Rectangle 155.png';
// import scroll from '../assests/images/Scroll.png';
// import downrec from '../assests/images/Rectangle 156.png';
import bg from '../assests/images/iPad Mini.png';
import b from '../assests/images/Rectangle 158.png'

export default function Home() {
  return (
    <div className="Home bg-ipad-mini bg-no-repeat bg-cover bg-center p-4 min-h-screen">
      <div className="relative flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <img src={logo} className="flex ml-5 mt-3 w-16 h-10" alt="Logo" />
            <img src={star1} className="absolute top-2 left-14 w-4 h-4" alt="Star" />
            <img src={star} className="absolute top-1 left-16 w-4 h-4" alt="Star 1" />
          </div>
          <img src={text} className="h-7 mt-3" alt="View AI" />
        </div>
        <div className="flex  justify-evenly border border-white rounded-2xl pr-2 py-0.5 mr-10 mt-3 bg-gray-500">
          <img src={profile} className="w-8 h-8 mr-2 rounded-full ml-0.5" alt="Profile" />
          <p className="text-white bg-gray-500 mr-1 text-xl cursor-pointer mb-0.5">Connect</p>
        </div>
      </div>
      <div className='flex justify-end h-full '>
        <div className=' mt-9'>
      <div className=' w-1/4 left-80 absolute h-[90%]  bg-gray-800 rounded-xl backdrop-blur-sm bg-opacity-20 border-2 border-gray-500 pt-10"'>
            <div className='flex mt-10 bg-transparent'>
            <img src={b} className='w-3 h-10 mt-5 ' alt="" />
            <p className='text-white text-3xl w-full bg-transparent pl-3'>AI and E-Commerce Innovation</p> </div>
            <div className='flex bg-transparent pt-16 w-full px-3'>
              <img src={text} className=" bg-transparent w-full h-2/3" alt="View AI" />
            <p className=' bg-purple-600 text-purple-600 h-44 p-1 rounded-sm'>s</p>
            </div>
            <p className='text-white mt-10 w-11/12 whitespace-normal bg-transparent px-3'>We revolutionize formal wear shopping with our custom e-commerce platform.</p>
           <div className='flex items-center p-1 w-2/5  justify-center  bg-white/30  rounded-full mt-20 border-2 border-white ml-4'>
                 <p className='text-white text-xl font-semibold pb-1 bg-transparent'>Get Started</p>
          <img src={arrow} className='w-8 h-8  bg-transparent rounded-full  p-1 ' alt="Arrow" />
      </div>
</div>
</div>

        <img src={bg} className='h-screen w-3/4 -mt-8 ' alt='ipad mini'></img>
      </div>

    </div>
  );
}