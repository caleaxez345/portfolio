import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(
        <div className="w-full h-full">
            {/*Contact Page Header*/}
            <h1 className="text-center text-3xl font-bold text-blue-400 my-5 mx-auto">Contact Me</h1>
            <div className="flex flex-col lg:flex-row gap-8 mx-4 my-10">
                {/*Left side of page*/}
                <div className="flex-1 flex flex-col justify-center items-center">
                    <h2 className="text-center text-blue-400 text-3xl">Let's keep in touch!</h2>
                    <h2 className="text-center text-blue-400 text-3xl mt-2">Let's achieve great things together!</h2>
                    <p className="text-center text-xl mt-10">If you need any help or have any questions, send me an email and I'll be there as soon as possible to help!</p>
                </div>
                {/*Right side of page, email form*/}
                <div className="flex-1 border-2 border-blue-400 rounded-lg shadow-lg shadow-blue-400 bg-base-100 relative">
                    <h2 className="text-blue-400 text-3xl text-center mt-4">Send me an email! 🚀</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-col gap-3 mx-4 my-4">
                            <div className="flex flex-row gap-2">
                                <input type="text" name="from_name" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                                <input type="text" name="from_phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <input type="email" name="from_email" placeholder="Email" className="input input-bordered w-full" />
                            <textarea placeholder="Subject" name="message" className="input input-bordered w-full h-56 resize-none" />
                            <div className="flex flex-row justify-center">
                                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-white text-black border-2 border-blue-400 hover:bg-gray-200">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;