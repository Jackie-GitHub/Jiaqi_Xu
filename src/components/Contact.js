import React from 'react';
import contact from '../resources/imgs/Contact.png';
import { IoLocationOutline,IoMailOutline } from 'react-icons/io5';

function Contact() {
    return (
        <section className="bg-light contactSection" id="contact">
            <div className="container">
                <div className="row">
                    <div className="contactImg col-lg-6">
                        <img src={contact} alt="contact" />
                    </div>
                    <div className="contactInfo col-lg-6">
                        <h1>Contact</h1>
                        <div>
                            <IoLocationOutline size='25px'/>
                            <span>  New York City</span>
                        </div>
                        <div>
                            <a href="mailto:jackie.xuq@gmail.com" target ="_blank" rel="noreferrer">
                            <IoMailOutline size='25px'/>
                            <span>  jackie.xuq@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;