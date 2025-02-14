import axios from 'axios';
import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ContactForm() {
    const [formData, setFormData] = useState({
        title: 'Mr.',
        full_name: '',
        company_name: '',
        country: '',
        contact_number: '',
        email: '',
        message: ''
    });
    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://vikramaviation.com/api/reachForm.php', JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.message === "Success") {
                toast.success("Form submitted successfully!");
                setFormData({
                    title: 'Mr.',
                    full_name: '',
                    company_name: '',
                    country: '',
                    contact_number: '',
                    email: '',
                    message: ''
                });
                setStep(1);
            } else {
                toast.error("Error submitting form. Please try again.");
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to submit form. Please try again.');
        }
    };
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <select name="title" value={formData.title} onChange={handleChange} className="border p-2 w-full sm:w-1/4">
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                            </select>
                            <input
                                type="text"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                placeholder="Full Name*"
                                className="border p-2 w-full sm:flex-grow"
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleChange}
                            placeholder="Name of the Company"
                            className="border p-2 w-full"
                        />
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Country*"
                                className="border p-2 w-full sm:w-1/2"
                                required
                            />
                            <input
                                type="tel"
                                name="contact_number"
                                value={formData.contact_number}
                                onChange={handleChange}
                                placeholder="Contact Number"
                                className="border p-2 w-full sm:w-1/2"
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            className="border p-2 w-full"
                            required
                        />
                    </>
                );
            case 3:
                return (
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message*"
                        className="border p-2 w-full h-32"
                        required
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="container px sm:px-4">
            <ToastContainer position="bottom-right" autoClose={5000} />
            <div className='text-center mt-6 sm:mt-10'>
                <h1 className='text-3xl sm:text-4xl font-bold border-b-2 border-gray-500 inline-block pb-2 sm:pb-4 mt-6 sm:mt-10'>
                    Reach <span className='text-yellow-500'>Us</span>
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-between my-4 sm:my-6 mx-2 sm:mx-6 items-center ">
                <div className='border border-gray-300 rounded-lg p-3 sm:p-5 w-full lg:w-1/2 mb-4 lg:mb-0'>
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 mt-2 sm:mt-4">Please Provide Your Details*</h2>

                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 text-sm sm:text-base mt-4 sm:mt-6">
                        {renderStep()}
                        <div className="flex justify-between mt-4">
                            {step > 1 && (
                                <button type="button" onClick={prevStep} className="bg-gray-300 text-black py-1 sm:py-2 px-2 sm:px-4 rounded text-sm sm:text-base">
                                    Previous
                                </button>
                            )}
                            {step < 3 ? (
                                <button type="button" onClick={nextStep} className="bg-yellow-500 text-black py-1 sm:py-2 px-2 sm:px-4 rounded text-sm sm:text-base">
                                    Next
                                </button>
                            ) : (
                                <button type="submit" className="bg-yellow-500 text-black py-1 sm:py-2 px-2 sm:px-4 rounded text-sm sm:text-base">
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                <div className="border border-gray-300 rounded-lg p-3 sm:p-5 w-full lg:w-1/2 lg:ml-4 text-center">
                    <div className='flex flex-col sm:flex-row sm:gap-6'>
                        <div className='mt-2 sm:mt-3 hover:shadow-xl w-full sm:w-1/2'>
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5498959246556!2d77.07244577528603!3d28.553245775708056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b4eb9c0e9b9%3A0xa27c7ba6f040a5c1!2sVIKRAM%20AVIATION%20PVT.LTD.!5e0!3m2!1sen!2sin!4v1721133379162!5m2!1sen!2sin"
                                className="w-full h-48 sm:h-64"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        <div className='mt-2 sm:mt-3 hover:shadow-xl w-full sm:w-1/2'>
                            <h2 className="text-base sm:text-lg md:text-xl font-bold text-yellow-500">Vikram Aviation Pvt Ltd</h2>
                            <span className='text-xs sm:text-sm text-start'>DGCA approved & NABL (ISO/IEC-17025:2017) accredited Testing & calibration lab</span>
                            {/* <p className="text-xs sm:text-sm text-start px-2 sm:px-3 ml-2">ISO 9001:2015 Certified</p> */}
                            <div className="flex flex-col md:flex-row justify-between p-1 sm:p-2 gap-1 sm:gap-2">
                                <div className='text-start p-2 sm:p-3'>
                                    <p className="text-xs sm:text-sm px-3">Vikram Aviation Pvt Ltd <br />
                                        Plot No. 02
                                        Khasra No. 348/02,<br />
                                        Sahabad,
                                        Muhammadpur <br />
                                        Near Bansal Farm
                                        New Delhi - 110061</p>
                                    <br />
                                    <Link to={"tel:+911146078736"} className="flex text-blue-500 text-start px-2 sm:px-4 text-xs sm:text-sm">
                                        <span className='pr-2 mt-1'><FaPhoneAlt /></span>+91-1146078736
                                    </Link>

                                    <Link to="mailto:ceo@vikramaviation.com" className="flex sm:mt-2 mb-1 text-blue-500 text-start px-2 sm:px-4 text-xs sm:text-sm">
                                        <span className='pr-2 mt-1'><IoMailUnread /></span>info@vikramaviation.com
                                    </Link>
                                    <Link to="mailto:ceo@vikramaviation.com" className="flex sm:mt-2 mb-1 text-blue-500 text-start px-2 sm:px-4 text-xs sm:text-sm">
                                        <span className='pr-2 mt-1'><IoMailUnread /></span>nabl@vikramaviation.com
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;