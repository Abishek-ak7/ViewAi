import anirudhicon from "../assets/images/anirudh avatar.png";
import viewailogo from "../assets/images/view ai logo.png";
import kavirajaricon from "../assets/images/KAVIRAJAR AVATAR.png";
import ConnectWithUs from "./ConnectWithUs";

export default function About() {

  return (
    < >
      <div className="bg-gradient-to-b  from-[#2c0094] to-[#0e002e] shadow-lg " >
      <section id="about" className="py-10">
        <div className="2xl:container ">
          <div className="w-[80%] mx-auto text-center">
            <p className="font-['Urbanist'] text-4xl font-bold text-white ">
              About
            </p>
          </div>
        </div>

        <div className="2xl:container mt-16 patternabout ">
          <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-10  place-items-center lg:px-16">
          <div className="bg-[#160e39] bg-opacity-[85%] flex flex-col items-center justify-evenly gap-y-6 rounded-3xl w-[280px] h-[362px] md:w-[309px] md:h-[400px] border-[#CCCCCC] border-[2px] border-opacity-[50%] relative pt-6">
            <div className=" absolute  top-3 right-3">
                <svg
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="#CCCCCC"
                  height="2.2em"
                  width="2.2em"
                >
                  <path d="M17.5 8.999a5.419 5.419 0 00-2.565.645A1 1 0 0014 8.999h-4a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1v-5.5a1 1 0 112 0v5.5a1 1 0 001 1h4a1 1 0 001-1v-7.5a5.507 5.507 0 00-5.5-5.5zm3.5 12h-2v-4.5a3 3 0 10-6 0v4.5h-2v-10h2v.703a1 1 0 001.781.625A3.483 3.483 0 0121 14.5zm-14-12H3a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1v-12a1 1 0 00-1-1zm-1 12H4v-10h2zM5.015 1.542a3.233 3.233 0 10-.057 6.457h.028a3.233 3.233 0 10.029-6.457zm-.029 4.457h-.028a1.222 1.222 0 01-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 016.41 4.771c0 .746-.56 1.228-1.425 1.228z" />
                </svg>
                </div>
              <div className="flex gap-x-20 justify-end items-center">
                <div className=" ">
                <img
                  src={anirudhicon}  alt="anirudh avatar" className="h-36 bg-[#5F44F0] rounded-full "/>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-4">
                <p className="font-['Raleway'] text-white text-2xl font-semibold ">ANIRUDH B</p>
                <p className="font-['Raleway'] text-white text-lg font-normal">Chief Executive Officer (CEO)</p>
                <img src={viewailogo} alt="" className=" h-8 md:h-10" />
              </div>
            </div>

            <div className="bg-[#160E39]  bg-opacity-[85%] flex flex-col items-center justify-evenly gap-y-6 rounded-3xl w-[280px] h-[362px] md:w-[309px] md:h-[400px] border-[#CCCCCC] border-[2px] border-opacity-[50%] relative pt-6">
            <div className=" absolute  top-3 right-3">
                <svg
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  fill="#CCCCCC"
                  height="2.2em"
                  width="2.2em"
                >
                  <path d="M17.5 8.999a5.419 5.419 0 00-2.565.645A1 1 0 0014 8.999h-4a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1v-5.5a1 1 0 112 0v5.5a1 1 0 001 1h4a1 1 0 001-1v-7.5a5.507 5.507 0 00-5.5-5.5zm3.5 12h-2v-4.5a3 3 0 10-6 0v4.5h-2v-10h2v.703a1 1 0 001.781.625A3.483 3.483 0 0121 14.5zm-14-12H3a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1v-12a1 1 0 00-1-1zm-1 12H4v-10h2zM5.015 1.542a3.233 3.233 0 10-.057 6.457h.028a3.233 3.233 0 10.029-6.457zm-.029 4.457h-.028a1.222 1.222 0 01-1.37-1.228c0-.747.56-1.229 1.427-1.229A1.234 1.234 0 016.41 4.771c0 .746-.56 1.228-1.425 1.228z" />
                </svg>
                </div>
              <div className="flex gap-x-20 justify-end items-center">
                <div className="">
                <img
                  src={kavirajaricon}  alt="anirudh avatar" className="h-36 bg-[#5F44F0] rounded-full"/>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-4">
                <p className="font-['Raleway'] text-white text-2xl font-semibold ">KAVIRAJAR B</p>
                <p className="font-['Raleway'] text-white text-lg font-normal">Chief Technology Officer (CTO)</p>
                <img src={viewailogo} alt="" className=" h-8 md:h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConnectWithUs/>
      </div>
    </>
  );

}