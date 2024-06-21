import React from 'react';
import bg from '../assets/images/iPad Mini.png';
import b from '../assets/images/Rectangle 158.png';
import arrow from '../assets/images/Group 102.png';
import text from '../assets/images/VIEW AI.png';



const Dashboard = () => {
  return (
    <div className='flex justify-center h-full '>
    <div className='md:mt-9 '>
      <div className='w-1/2 mt-14 md:mt-0 md:w-1/3 lg:w-1/3 xl:w-[35vh] xl:h-fit  absolute  h-fit pb-5 sm:transparent md:bg-gray-800 rounded-xl md:backdrop-blur-sm md:bg-opacity-20 lg:bg-opacity-20 xl:bg-opacity-20 md:border-2 lg:border-2 xl:border-2 md:border-gray-500 lg:border-gray-500 xl:border-gray-500 pt-10'>
        <div className='flex bg-transparent md:pt-16 w-full px-3'>
          <img src={text} className="bg-transparent w-full h-full md:w-1/2 md:h-2/3 " alt="View AI" />
        </div>
        <div className='flex md:mt-10 mt-3 bg-transparent'>
          <img src={b} className='md:w-3 md:h-10 w-3 h-10 md:mt-5' alt="" />
          <p className='text-white md:text-3xl w-full sm:text-lg bg-transparent pl-3'>AI and E-Commerce Innovation</p>
        </div>
        <p className='text-white md:mt-10  mt-3 w-11/12 whitespace-normal bg-transparent px-3 ml-2'>We revolutionize formal wear shopping with our custom e-commerce platform.</p>
        <div className='flex mt-10 items-center p-1 w-3/4 md:w-3/4 md:mt-4 justify-center md:bg-white/30 md:rounded-full rounded-lg lg:mt-10 xl:mt-10 md:border-2 border-[1px] md:border-white border-gray-600 md:ml-4 ml-1'>
          <p className='text-white text-xl font-semibold pb-1 bg-transparent'>Get Started</p>
          <img src={arrow} className='w-8 h-8 bg-transparent rounded-full p-1' alt="Arrow" />
        </div>
      </div>
    </div>
    <div className=''>
      <img src={bg} className='md: h-fit mt-14 w-full md:-mt-8 ml-36' alt='ipad mini' />
    </div>
  </div>

  );
};

export default Dashboard;


    