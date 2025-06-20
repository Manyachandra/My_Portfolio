// // src/Contact.jsx
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import './contact.css';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_tg3qoql',    // 🔁 Replace with your actual EmailJS service ID
//       'template_pgbh9pn',   // 🔁 Replace with your EmailJS template ID
//       form.current,
//       'x4n1YzTFcb3fs4BlB'     // 🔁 Replace with your EmailJS public key
//     ).then(
//       (result) => {
//         alert('Message Sent Successfully!');
//         form.current.reset(); // Reset form after success
//       },
//       (error) => {
//         alert('Something went wrong. Try again.');
//       }
//     );
//   };

//   return (
//     <div className="contact-wrapper">
//       <h2>Contact Me</h2>
//       <form ref={form} onSubmit={sendEmail}>
//   <input type="text" name="user_name" placeholder="Your Name*" required />
//   <input type="email" name="user_email" placeholder="Email*" required />
//   <textarea name="message" placeholder="Your Message*" required></textarea>
//   <button type="submit">Send</button>
// </form>

      
//     </div>
//   );
// };

// export default Contact;
// src/pages/Contact.jsx



// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import './contact.css';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'YOUR_SERVICE_ID',
//       'YOUR_TEMPLATE_ID',
//       form.current,
//       'YOUR_PUBLIC_KEY'
//     ).then(
//       () => {
//         alert('Message sent successfully!');
//         form.current.reset();
//       },
//       () => {
//         alert('Something went wrong. Please try again.');
//       }
//     );
//   };

//   return (
//     <div className="contact-box">
//       <div className="form-wrapper">
//         <h2>Contact Us</h2>
//         <form ref={form} onSubmit={sendEmail}>
//           <div className="input-group">
//             <i className="fa fa-user icon"></i>
//             <input type="text" name="user_name" placeholder="Name*" required />
//           </div>
//           <div className="input-group">
//             <i className="fa fa-envelope icon"></i>
//             <input type="email" name="user_email" placeholder="Email*" required />
//           </div>
//           <div className="input-group">
//             <i className="fa fa-phone icon"></i>
//             <input type="text" name="user_phone" placeholder="Phone" />
//           </div>
//           <div className="input-group">
//             <i className="fa fa-map-marker icon"></i>
//             <input type="text" name="user_address" placeholder="Address" />
//           </div>
//           <div className="input-group">
//             <i className="fa fa-comment icon"></i>
//             <textarea name="message" placeholder="Message*" required></textarea>
//           </div>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// src/pages/Contact.jsx
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tg3qoql',    // 🔁 Replace with your actual EmailJS service ID
     'template_pgbh9pn',   // 🔁 Replace with your EmailJS template ID
      form.current,
     'x4n1YzTFcb3fs4BlB' 
    ).then(
      () => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      () => {
        alert('Something went wrong. Please try again.');
      }
    );
  };

  return (
    <div className="contact-page">
      <div className="contact-box">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name*" required />
          <input type="email" name="user_email" placeholder="Email*" required />
          <input type="text" name="user_phone" placeholder="Phone" />
          <input type="text" name="user_address" placeholder="Address" />
          <textarea name="message" placeholder="Your Message*" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
