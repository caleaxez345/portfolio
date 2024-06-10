import React from "react";

function Contact() {
    return(
        <div className="w-full h-full">
            {/*Contact Page Header*/}
            <h1 className="text-center text-3xl font-bold text-blue-400 my-5 mx-auto">Contact Me</h1>
            <div className="grid grid-cols-2 gap-8 mx-4 my-10">
                {/*Left side of page*/}
                <div className="col-span-1 self-start">
                    <h2 className="text-center text-blue-400 text-3xl mt-20">Let's keep in touch!</h2>
                    <h2 className="text-center text-blue-400 text-3xl mt-2">Let's achieve great things together!</h2>
                    <p className="text-center text-xl mt-10">If you need any help or have any questions, send me an email and I'll be there as soon as possible to help!</p>
                </div>
                {/*Right side of page, email form*/}
                <div className="col-span-1 border-2 border-blue-400 self-start rounded-lg shadow-lg shadow-blue-400 bg-base-100 relative">
                    <h2 className="text-blue-400 text-3xl text-center mt-4">Send me an email! 🚀</h2>
                    <div className="grid grid-cols-2 gap-2 mx-4 my-4">
                        <div className="col-span-1">
                            <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="col-span-1">
                            <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="col-span-2">
                            <input type="email" placeholder="Email" className="input input-bordered w-full" />
                        </div>
                        <div className="col-span-2">
                            <textarea type="textarea" placeholder="Subject" className="input input-bordered w-full h-56 resize-none" />
                        </div>
                        <div className="col-span-2 flex justify-center">
                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-white text-black border-2 border-blue-400 hover:bg-gray-200">Send</button>   
                        </div>                  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;