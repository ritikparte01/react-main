import React from "react";
import contactimg from "../img/contact.png";

function Contact(props) {
  return (
    <div>
      <div className="container Contact" id="contact">
        <div className="left4">
          <img src={contactimg} alt="" />
        </div>
        <div className="right4">
          <h1>
            Contact <span>Me</span>
          </h1>

          <div className="c-info">
            <div className="mail">
              <p className="email">E-mail : -</p>
              <p className={`text-${props.txtw} info`}>
                ritikparte01@gmail.com
              </p>
            </div>
            <div className="phone">
              <p className="email">Phone : -</p>
              <p className={`text-${props.txtw} info`}>9307996477</p>
            </div>
          </div>

          <h1 className="my-4">
            <span>Get</span> Call Back
          </h1>
          <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="E-mail" />
            <input type="phone" name="phone" placeholder="Phone" />
            <textarea
              name="msg"
              id=""
              cols="40"
              rows="5"
              placeholder="Comment"
            ></textarea>
            <button className="btn send">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
