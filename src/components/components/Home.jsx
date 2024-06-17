import React from 'react';
import '../assests/Home.css';
import logo from '../assests/images/Vector (1).png';
import text from '../assests/images/VIEW AI.png';
import profile from '../assests/images/Profile.png';
import star from '../assests/images/Group_27-removebg-preview.png';
import star1 from '../assests/images/Star 1.png';
import social1 from '../assests/images/Linkedin Logo.png';
import social2 from '../assests/images/Instagram Logo.png';
import text2 from '../assests/images/VIEW AI 1.png';
import rectangle from '../assests/images/Rectangle 155.png';
import scroll from '../assests/images/Scroll.png';
import downrec from '../assests/images/Rectangle 156.png';
import bg from '../assests/images/iPad Mini.png';

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
        <div className="flex items-center border border-white rounded-2xl px-2 py-0.5 mr-10 mt-3 bg-gray-500">
          <img src={profile} className="w-7 h-7 mr-3" alt="Profile" />
          <p className="text-white bg-gray-500 mr-1 text-xl cursor-pointer mb-0.5">Connect</p>
        </div>
      </div>
      <div className=''>
        <img src={bg} alt='ipad mini'></img>
      </div>
    </div>
  );
}
