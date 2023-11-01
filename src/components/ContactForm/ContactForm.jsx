import { useRef, useState} from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_blom9na', 'template_y7wcib8', form.current, 'Dixz4-GTlaNm-brht')
      .then((result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<div>
    <div className="lets-chat">
      <h2>Lets Chat</h2>
      <p>Reach out using the form below or email me at carnealao@gmail.com</p>
    </div>
    <div className="form-container" id="form-container">
      <h2 className="header">Contact Me</h2>
    <form ref={form} className="contact-form" onSubmit={sendEmail}>
    <input type="text" name="from_name" placeholder="Subject" />
        <input type="text" name="user_name" placeholder="Name" />
        <input type="email" name="user_email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
      <input type="submit" name="button" value="Send" />
    </form>
    </div>
      {isFormSubmitted && (
        <div className="alert-message">
          <p>Message sent successfully!</p>
        </div>
      )}
    </div>
  );
}

