import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import ViewAiLogo from "./ViewAiLogo";

export default function ConnectWithUs() {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2p81dwf', 'template_j4v57bi', form.current, {
            publicKey: 'J57Egq5pKNmRHfgVM',
        })
        .then(() => {
            setSuccessMessage('Message sent successfully');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        })
        .catch((error) => {
            console.log('FAILED...', error.text);
        });
    }

    return (
        <>
            <section className="h-full p-20 flex flex-col justify-center items-center" id="contact">
                <div className="2xl:container bg-no-repeat bg-bottom bg-[length:100vw_250px] md:bg-[length:100vw_400px] connectwithuspattern">
                    <div className="mx-auto w-[80%] grid grid-cols-1 pt-10">
                        <h1 className="text-white text-center font-bold text-xl md:text-3xl font-['Raleway']">Connect with us</h1>
                    </div>
                    <div className="mx-auto w-[100%] grid grid-cols-1 relative">
                        <div className="">
                            <svg className="absolute -right-16 top-36 md:right-4 lg:right-16 md:top-40 h-5 md:h-9" fill="white" viewBox="0 0 16 16" height="30px" width="30px">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                            <svg className="absolute -right-16 md:right-4 lg:right-16 top-56 md:top-64 h-5 md:h-9" fill="white" viewBox="0 0 16 16" height="30" width="30">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <form ref={form} className="flex flex-col justify-center items-center space-y-7 " onSubmit={sendEmail}>
                                <div className="space-y-2 pt-7 ">
                                    <label htmlFor="name" className="text-white font-['Raleway'] text-base md:text-lg font-light">Name</label> <br />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder=" Enter your name"
                                        className="h-8 px-2 w-52 md:w-[455px] text-sm md:text-base md:h-12 text-white bg-gradient-to-r from-[#C9C9C9]/20 bg-transparent to-[#4622F3]/10 rounded-md bg-opacity-55 bg-clip-padding backdrop-filter backdrop-blur-md border border-opacity-20 shadow-sm border-gray-50"
                                        id="name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-white font-['Raleway'] text-base md:text-lg font-light">Email</label><br />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="h-8 px-2 w-52 md:w-[455px] md:h-12 text-sm md:text-base text-white font-normal bg-gradient-to-r from-[#C9C9C9]/20 bg-transparent to-[#4622F3]/10 rounded-md bg-opacity-55 bg-clip-padding backdrop-filter backdrop-blur-md border border-opacity-20 shadow-sm border-gray-50"
                                        placeholder=" Enter your mail id"
                                        id="email"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="msg" className="text-white font-['Raleway'] text-base md:text-lg font-light">Message</label><br />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder=" Leave your message here"
                                        className="text-sm md:text-base w-[207px] md:w-[455px] px-2 pt-2 text-white bg-gradient-to-r from-[#C9C9C9]/20 bg-transparent to-[#4622F3]/10 rounded-md bg-opacity-55 bg-clip-padding backdrop-filter backdrop-blur-md border border-opacity-20 shadow-sm border-gray-50 resize-none"
                                        rows="5"
                                        cols="60"
                                        id="msg"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    value="Send"
                                    className="text-white md:text-white/65 text-center font-['Raleway']  text-sm md:text-md font-normal md:font-semibold bg-[#85828B]/70 bg-opacity-60 rounded-full px-10 py-2 md:rounded-lg md:px-10 md:py-3"
                                >
                                    Submit
                                </button>
                            </form>
                            {successMessage && (
                                <div className="text-white text-center mt-4">{successMessage}</div>
                            )}
                            <div className=" pt-20 pb-20 ak flex justify-center items-center">
                                <ViewAiLogo/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
