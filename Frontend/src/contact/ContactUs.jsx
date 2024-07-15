import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Navbar />
            <div className="flex h-screen items-center justify-center">
                <div className=" w-[600px] ">

                    <div className="container mx-auto p-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                            {/* Name */}
                            <div className='mt-8 space-y-2'>
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder='Enter your name'
                                    className='w-80 px-3 border rounded-md outline-none py-1'
                                    {...register("name", { required: true })}
                                />
                              <br/>  {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    className='w-80 px-3 border rounded-md outline-none py-1'
                                    {...register("email", { required: true })}
                                />
                              <br/>  {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Message */}
                            <div className='mt-8 space-y-2'>
                                <span>Message</span>
                                <br />
                                <textarea
                                    placeholder='Enter your message'
                                    className='w-80 px-3 border rounded-md outline-none py-1'
                                    {...register("message", { required: true })}
                                />
                               <br/> {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                            </div>
                            {/* Button */}
                            <div className='flex justify-around mt-6'>
                                <button
                                    type='submit'
                                    className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactUs;
