import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { IoSendOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Contact = () => {
    const form = useRef();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [errors, setErrors] = useState('');

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        {/*Input validation for full name. Check if it doesnt have letters or spaces between names*/}
        if(!name) {
            isValid = false;
            formErrors['name'] = 'Name is required.';
        }
        else if(!/^[A-Za-z ]+$/.test(name.trim())) {
            isValid = false;
            formErrors['name'] = 'Invalid name.';
        }

        {/*Input validation for phone number. Check if it doesnt have numbers, dash, or spaces between numbers */}
        if(!phoneNumber) {
            isValid = false;
            formErrors['phoneNumber'] = 'Phone number is required';
        }
        else if(!/^[0-9- ]+$/.test(phoneNumber.trim())) {
            isValid=false;
            formErrors['phoneNumber'] = 'Invalid phone number.';
        }

        {/*Input valiation if email doesnt exist*/}
        if(!email) {
            isValid = false;
            formErrors['email'] = 'Email is required';
        }

        {/*Input validation if subject doesnt exists*/} 
        if(!subject) {
            isValid = false;
            formErrors['subject'] = 'Subject is required';
        }

        setErrors(formErrors);
        return isValid;
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            resetForm();
            emailjs
                .sendForm(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    form.current, {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    const resetForm = () => {
        setEmail('');
        setName('');
        setPhoneNumber('');
        setSubject('');
        form.current.reset();
    }

    return(
        <div className="w-full h-full">
            {/*Contact Page Header*/}
            <h1 className="text-center text-3xl font-bold text-blue-400 my-5 mx-auto">Contact Me</h1>
            <div className="flex flex-col lg:flex-row gap-8 mx-4 my-10">
                {/*Left side of page*/}
                <div className="flex-1 flex flex-col justify-center items-center">
                    <motion.div
                    initial={{  opacity: 0, y: 50}}
                    whileInView={{ opacity: 1, y:0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-center text-blue-400 text-3xl">Let's keep in touch!</h2>
                        <h2 className="text-center text-blue-400 text-3xl mt-2">Let's achieve great things together!</h2>
                    </motion.div>
                    <motion.p
                        initial={{  opacity: 0, y: 50}}
                        whileInView={{ opacity: 1, y:0}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center text-xl mt-10">
                            If you need any help or have any questions, send me an email and I'll respond as soon as possible!
                    </motion.p>
                </div>
                {/*Right side of page, email form*/}
                <div className="flex-1 border-2 border-blue-400 rounded-lg shadow-lg shadow-blue-400 bg-base-100 relative">
                    <h2 className="text-blue-400 text-3xl text-center mt-4">Send me an email! 🚀</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col gap-3 mx-4 my-4">
                            <input type="hidden" name="to_name" value="Carlos Garcia Alavez" />
                            <div className="flex flex-row space-x-4 justify-between">
                                <div className="w-full flex flex-col relative">
                                    <input
                                        type="text"
                                        name="from_name"
                                        placeholder="Full Name"
                                        className={`input input-bordered w-full rounded-lg ${errors.name ? 'border-red-500 focus:border-red-500 focus:outline-none' : ''}`}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                                </div>
                                <div className="w-full flex flex-col">
                                    <input type="text"
                                        name="from_phone"
                                        placeholder="Phone Number"
                                        className={`input input-bordered w-full rounded-lg ${errors.phoneNumber ? 'border-red-500 focus:border-red-500 focus:outline-none' : ''}`}
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                    {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                                </div>
                            </div>
                            <div className="w-full flex flex-col">
                                <input type="email" 
                                    name="from_email" 
                                    placeholder="Email" 
                                    className={`input input-bordered w-full rounded-lg ${errors.email ? 'border-red-500 focus:border-red-500 focus:outline-none' : ''}`}
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required
                                />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>
                            <input type="hidden" name="reply_to" value={email}/>
                            <div className="w-full flex flex-col">
                                <textarea 
                                    placeholder="Subject" 
                                    name="message" 
                                    className={`pt-2 input input-bordered w-full h-56 resize-none ${errors.subject ? 'border-red-500 focus:border-red-500 focus:outline-none' : ''}`} 
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                                {errors.subject && <p className="text-red-500">{errors.subject}</p>}
                            </div>
                            <div className="flex flex-row justify-center">
                                <button 
                                    type="submit" 
                                    value="Send" 
                                    className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-white text-black border-2 border-blue-400 hover:bg-gray-400 hover:border-blue-400 hover:scale-105 hover:transition-all">
                                        <IoSendOutline size={20}/> Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;