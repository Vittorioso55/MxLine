// "use client";
// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

// const EmailForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_f8tyy3w', 'form.current', form.current, 'u3y1euZG5SgKYZ8am')
//       .then((result) => {
//         console.log('Email sent successfully:', result.text);
//       }, (error) => {
//         console.error('Failed to send email:', error.text);
//       });
//   };

//   return (
//     <div className="cover text-center w-full h-screen flex flex-col justify-center items-center bg-black ">
//        <h1 className="font-extrabold text-4xl lg:text-8xl">
            
//             <span className=" text-white hover:text-green-500 transition-colors duration-300">KEEP IN CONTACT</span>
//           </h1>
//       <form ref={form} onSubmit={sendEmail} className="p-4">
//         <div className="form-group mb-3">
//           <label className='text-white'>Name</label>
//           <input type="text" name="from_name" className="form-control rounded-lg" style={{ margin: '5px', padding: '10px' }} />
//         </div>
//         <div className="form-group mb-3">
//           <label className='text-white'>Email</label>
//           <input type="email" name="from_email" className="form-control rounded-lg" style={{ margin: '5px', padding: '10px' }} />
//         </div>
//         <div className="form-group mb-3">
//           <label className='text-white'>Message</label>
//           <textarea name="message" className="form-control rounded-lg" rows="4" style={{ margin: '5px', padding: '10px' }}></textarea>
//         </div>
//         <button className="btn btn-primary bg-green-500 rounded-lg text-light">Send</button>
//       </form>
//     </div>
//   );
// };

// export default EmailForm;
