import { useRef} from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_blom9na', 'template_y7wcib8', form.current, 'Dixz4-GTlaNm-brht')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    
    <div className="form-container" id="form-container">
      <h2 className="header">Contact Me</h2>
    <form ref={form} className="contact-form" onSubmit={sendEmail}>
      <label>Subject</label>
      <input type="text" name="from_name" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  </div>
    );
  };

  

