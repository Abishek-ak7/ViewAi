import React from 'react'
import star from '../assets/images/Group_27-removebg-preview.png';
import star1 from '../assets/images/Star 1.png';
import text from '../assets/images/VIEW AI.png';
import logo from '../assets/images/Vector (1).png';

export default function ViewAiLogo(){
    return(
        <div className="flex items-center space-x-2">
        <div className="relative">
          <img src={logo} className="flex ml-5 mt-3 w-16 h-10" alt="Logo" />
          <img src={star1} className="absolute top-2 left-14 w-4 h-4" alt="Star" />
          <img src={star} className="absolute top-1 left-16 w-4 h-4" alt="Star 1" />
        </div>
        <img src={text} className="h-7 mt-3" alt="View AI" />
      </div>
    );
}