import React from 'react';
import chatbot from '../assets/images/chat-bot.png';
import cube from '../assets/images/cube.png';
import key from '../assets/images/licensekey4.png';
import wall from '../assets/images/firewall.png';
import print from '../assets/images/printer.png';
import human from '../assets/images/cyborg4.png';
import slide from '../assets/images/IconContainer.png';
import About from './About';
import '../assets/Home.css';

const Unique = () => {
  // Define the combined background image and gradient style
  const bg = {
    background: `linear-gradient(to bottom, #000000, #2c0094), url(${require('../assets/images/Second_pattern.png')})`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
     //

  };

  const bgc = {
    backgroundImage: `url(${require('../assets/images/vertical.png')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div  className='flex  flex-col justify-center items-center pt-10 '>
      <div className='2xl:container' style={bg}>
        <div className="flex-col">
          <div className="md:flex md:justify-around mt-12">
            <div className="flex justify-around">
              <div style={bgc} className="md:w-1/3 sm:w-2/5 h-11/12 rounded-3xl m-3">
                <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                  <img src={chatbot} alt="Chatbot" className="mx-auto w-1/2" />
                  <h1 className="font-bold text-center mt-4 w-28 lg:w-full lg:p-3 text-white">Advanced AI Personalization</h1>
                </div>
              </div>
              <div style={bgc} className="md:w-1/3 sm:w-2/5 h-11/12 rounded-3xl m-3">
                <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                  <img src={cube} alt="Cube" className="mx-auto w-1/2" />
                  <h1 className="font-bold text-center mt-4 w-28 lg:w-full lg:p-3 text-white">3D Model Customization</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-around">
              <div style={bgc} className="md:w-1/3 sm:w-2/5 h-11/12 rounded-3xl m-3">
                <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                  <img src={key} alt="Key" className="mx-auto w-1/2" />
                  <h1 className="font-bold text-center mt-4 w-28 lg:w-full lg:p-3 text-white">Custom AI Integration</h1>
                </div>
              </div>
              <div style={bgc} className="md:w-1/3 sm:w-2/5 h-11/12 rounded-3xl m-3">
                <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                  <img src={wall} alt="Wall" className="mx-auto w-1/2" />
                  <h1 className="font-bold text-center mt-4 w-28 lg:w-full lg:p-3 text-white">User-Friendly Panel</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-around">
            <div className="flex justify-around">
              <div style={bgc} className="md:w-1/3 sm:w-2/5 h-11/12 rounded-3xl m-3">
                <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                  <img src={wall} alt="Wall" className="mx-auto w-1/2" />
                  <h1 className="font-bold text-center w-28 mt-4 lg:w-full lg:p-3 text-white">Efficient CI/CD Pipeline</h1>
                </div>
              </div>
              <div style={bgc} className="md:w-1/3 sm:w-2/5 h-11/12 rounded-3xl m-3">
                <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                  <img src={print} alt="Printer" className="mx-auto w-1/2" />
                  <h1 className="font-bold text-center w-28 mt-4 lg:w-full lg:p-3 text-white">Responsive Design</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-around">
              <div style={bgc} className="md:w-1/3 sm:w-2/5 h-11/12 rounded-3xl m-3">
                <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                  <img src={human} alt="Human" className="mx-auto w-1/2" />
                  <h1 className="font-bold text-center w-28 mt-4 lg:w-full lg:p-3 text-white">Data-Driven Insights</h1>
                </div>
              </div>
              <div style={bgc} className="md:w-1/3 sm:w-2/5 h-11/12 rounded-3xl m-3">
                <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
                  <img src={slide} alt="Slide" className="mx-auto w-1/2" />
                  <h1 className="font-bold text-center w-28 mt-4 lg:w-full lg:p-3 text-white">Get Started</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About/>
    </div>
  );
};

export default Unique;
