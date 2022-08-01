import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';

function Experience() {
    return (
        <section className="experienceSection bg-light" id="experience">
            <div className="container">
                <h1 className="text-center">Experience</h1>
                <div className="card">
                    <div className="cardWrap row">
                        <div className="col-lg-6 cardYliftWrap">
                            <div className="cardYlift">
                                <h3>Y LIFT Store</h3>
                                <p className="text-center">Y LIFT STORE is an e-commerce platform for aesthetic products, online courses, and live interactive trainings for licensed medical providers.</p>
                                <div>
                                    <IoLocationOutline size='25px'/>
                                    <span>New York, NY</span>
                                </div>
                            </div>
                        </div>
                        <div className="cardInfo col-lg-6">
                            <h3>Front End Developer</h3>
                            <p>March 2022 - June 2022</p>
                            <ul>
                                <li>Improved web UX and UI design for better user experience.</li>
                                <li>Implemented enhancements that improved web functionality and responsiveness.</li>
                                <li>Developed new features, such as adding new registration field from frontend to backend, popup modals for promotions, technical issue tab for FQA page, etc.</li>
                                <li>Added real-time popup promotions for live streaming, which are activated by moderator at key moments to enable participants to purchase related products or ask questions.   </li>
                                <li>Added new TRAINING section and related content pages.</li>
                                <li>Queried order data from MySQL for management team.</li>
                                <li>Deployed website from development to production using AWS CodePipeline.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;