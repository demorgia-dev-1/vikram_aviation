import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from 'react-icons/im';
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-gray-100 p-6">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mx-10">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Vikram Aviation Pvt Ltd</h3>
                        <p className="text-md">
                            At Vikram Aviation Pvt. Ltd. <br /> we adhere to aviation regulations and safety standards of DGCA (Directorate General of Civil Aviation), ensuring the highest level of professionalism and quality in its operations.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-yellow-600 font-semibold">
                            <li> <Link to="tel:+91-9654282583" className="text-md ">Civil Aviation (Marketing) <br /> +91-9654282583</Link></li>
                            <li> <Link to="tel:+91- 9891404147" className="text-md ">Defence Cordinator <br /> +91- 9891404147</Link></li>
                            <li><Link to="tel:+91-9675180888" className="text-md ">Quality Department <br /> +91-9675180888</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">What We Do</h3>
                        <ul className="space-y-2 text-md text-yellow-600 font-semibold">
                            <li>Bench Check & Calibration</li>
                            <li>GSE Calibration & Repair</li>
                            <li>Composite Maintenance</li>
                            <li>Consumable Sales</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Group Company</h3>
                        <p className="text-md">
                            <span className=' font-semibold'>Demorgia Consulting Services Pvt Ltd</span> empower individuals and industries through accurate assessments, fostering skill development, and contributing to a skilled and competent workforce.
                        </p>
                    </div>
                </div>

                <div className="flex sm:flex-row gap-6 sm:gap-10 text-2xl text-gray-900 justify-center items-center p-4 sm:p-6 m-2 sm:m-4">
                    <Link to="https://www.facebook.com/p/Vikram-Aviation-Pvt-Ltd-Gurgaon-100064402731038/?_rdr" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" target="blank">
                        <FaFacebook />
                    </Link>
                    <Link to="https://www.linkedin.com/company/vikram-aviation-pvt-ltd---india/?originalSubdomain=in" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" target="blank">
                        <ImLinkedin />
                    </Link>
                    <Link to="https://x.com/i/flow/login?redirect_after_login=%2Fdemorgia1" className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" target="blank">
                        <FaSquareXTwitter />
                    </Link>
                </div>

                <div className="mt-8 text-center text-md">
                    Developed and maintained by <Link to="https://www.demorgia.com/" className="hover:underline text-yellow-600 font-semibold" target='blank'>Demorgia Consulting Services Pvt Ltd</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;