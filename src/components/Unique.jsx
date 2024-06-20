import React from 'react';
import chatbot from '../assests/images/chat-bot.png';
import cube from '../assests/images/cube.png'
import key from '../assests/images/license-key 4.png'
import wall from '../assests/images/firewall.png'
import print from '../assests/images/printer.png'
import human from '../assests/images/cyborg 4.png'
import slide from '../assests/images/Icon Container.png'


const Unique = () => {
  // Define the background image style
  const bgc = {
    backgroundImage: `url(${require('../assests/images/vertical.png')})`,
    backgroundSize: 'cover', // Ensures the background image covers the entire div
    backgroundPosition: 'center', // Centers the background image
     // Full height of the viewport
  };
  const bg = {
    backgroundImage: `url(${require('../assests/images/Second_pattern.png')})`,
    backgroundSize: 'cover', // Ensures the background image covers the entire div
     // Centers the background image
     // Full height of the viewport
  };

  return (
    <div className='flex-col bg-gradient-to-b from-black to-[#20016c]' style={bg} >
      <div className='md:flex md:justify-around mt-12'>
          <div className='flex justify-around '>
              <div style={bgc} className='md:w-1/3 sm:w-2/5  h-11/12 rounded-3xl m-3'>
                <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                    <img src={chatbot} alt="Chatbot" className="mx-auto w-1/2" />
                    <h1 className='font-bold text-center mt-4 w-28 lg:w-full lg:p-3 text-white'>Advanced AI Personalization</h1>
                </div>
              </div>
              <div style={bgc} className='md:w-1/3 sm:w-2/5  h-11/12 rounded-3xl m-3'>
                <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                    <img src={cube} alt="Chatbot" className="mx-auto w-1/2" />
                    <h1 className='font-bold text-center mt-4 w-28 lg:w-full lg:p-3 text-white'>3D Model Customization</h1>
                </div>
              </div>
          </div>
          <div className='flex justify-around'>
            <div style={bgc} className='md:w-1/3 sm:w-2/5 h-11/12 rounded-3xl m-3'>
              <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                  <img src={key} alt="Chatbot" className="mx-auto w-1/2" />
                  <h1 className='font-bold text-center mt-4 w-28 lg:w-full lg:p-3 text-white'>Custom AI Integration</h1>
              </div>
            </div>
            <div style={bgc} className='md:w-1/3 sm:w-2/5  h-11/12 rounded-3xl m-3'>
                <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                <img src={wall} alt="Chatbot" className="mx-auto w-1/2" />
                <h1 className='font-bold text-center mt-4 w-28 lg:w-full lg:p-3 text-white'>User-Friendly Pannel</h1>
            </div>
          </div>
        </div>
    </div>
    <div className='md:flex md:justify-around '>
      <div className='flex justify-around'>
        <div style={bgc} className='md:w-1/3 sm:w-2/5  h-11/12 rounded-3xl m-3'>
          <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
              <img src={wall} alt="Chatbot" className="mx-auto w-1/2" />
              <h1 className='font-bold text-center w-28 mt-4 lg:w-full lg:p-3 text-white'>Efficient CI/CD Pipeline</h1>
          </div>
        </div>
        <div style={bgc} className='md:w-1/3 sm:w-2/5   h-11/12 rounded-3xl m-3'>
          <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
            <img src={print} alt="Chatbot" className="mx-auto w-1/2" />
            <h1 className='font-bold text-center w-28 mt-4 lg:w-full lg:p-3 text-white'>Responsive Design</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-around'>
          <div style={bgc} className='md:w-1/3 sm:w-2/5  h-11/12 rounded-3xl m-3'>
            <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
              <img src={human} alt="Chatbot" className="mx-auto w-1/2" />
              <h1 className='font-bold text-center w-28 mt-4 lg:w-full lg:p-3 text-white'>Data - Driven Insights</h1>
            </div>
          </div>
          <div style={bgc} className='md:w-1/3 sm:w-2/5  h-11/12 rounded-3xl m-3'>
            <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                <img src={slide} alt="Chatbot" className="mx-auto w-1/2" />
                <h1 className='font-bold text-center w-28 mt-4 lg:w-full lg:p-3 text-white '>Get Started</h1>
            </div>
          </div>
      </div>
  </div>
</div>

  );
};

export default Unique;
