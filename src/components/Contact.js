import React ,{useState,useRef} from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({}) => {


  const formRef=useRef();
  const [error,setError]=useState(false);
  const [success,setSuccess]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x79pndc', 'template_1qy4ynh', formRef.current, {
        publicKey: 'egO_plQXkAf7tbuDD',
      })
      .then(
        (result) => {
          setSuccess(true);

        },
        (error) => {
         setError(true);
        },
      );
  };

  const notify = () => {
    if (success===true) {
      toast.success('Email sent!');
    } else if(error===true) {
      toast.error('Error!');
    }
  };



  return (
    <div>
      <section className="contact" id="contact">
        <h1 className="heading">
            <span>Contact </span>us
        </h1>
        <div className="row">
        <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.8480109!3d41.2802068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36c6fa619c4f5603!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <form ref={formRef} onSubmit={sendEmail}>
            <h3>get in touch</h3>
            <div className="inputBox">
                <span className='fas fa-user'></span>
                <input type="text" required placeholder='name' name="name"/>
            </div>
            <div className="inputBox">
                <span className='fas fa-envelope'></span>
                <input type="email" required placeholder='email' name="email"/>
            </div>
            <div className="inputBox">
                <span className='fas fa-phone'></span>
                <input type="number" required placeholder='number' name="number"/>
            </div>
            <div className="inputBox">
                <span className='fas fa-message'></span>
                <input type="text" placeholder='Your Message' name="message"/>
            </div>
            <input type="submit" value="contact now" className='btn btn-warning btn-lg' onClick={notify}/>
          </form>
        </div>
        <ToastContainer/>
      </section>
    </div>
  )
}

export default Contact
