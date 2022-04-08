import contactimg from "../img/contact.png";


import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact(props) {

  
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 400 });
  }, []);


  return (
    <div>
      <div className="container Contact" id="contact">
        <div className="left4">
          <img  data-aos="fade-down" src={contactimg} alt="" />
        </div>
        <div className="right4">
          <h1  data-aos="fade-down">
            Contact <span>Me</span>
          </h1>

          <div className="c-info">
            <div className="mail">
              <p  data-aos="fade-down"  className="email">E-mail</p>
              <p data-aos="fade-down"  className={`text-${props.txtw} info`}>
                ritikparte01@gmail.com
              </p>
            </div>
            <div className="phone">
              <p data-aos="fade-down"  className="email">Phone</p>
              <p data-aos="fade-down"  className={`text-${props.txtw} info`}>9307996477</p>
            </div>
          </div>

          <h1 data-aos="fade-down"  className="my-4 form-head">
            <span>Get</span> Call Back
          </h1>
          <form>
            <input data-aos="fade-down"  type="text" name="name" placeholder="Name" />
            <input data-aos="fade-down"  type="email" name="email" placeholder="E-mail" />
            <input data-aos="fade-down"  type="phone" name="phone" placeholder="Phone" />
            <textarea  data-aos="fade-down" 
              name="msg"
              id=""
              cols="40"
              rows="5"
              placeholder="Comment"
            ></textarea>
            <button data-aos="fade-up"  className="btn send">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
