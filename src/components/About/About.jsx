import React from 'react';
import { ReactTyped } from "react-typed";
import './About.css';

function About() {
    const values = {
        name: "Abdul Rahman Hussain"
    };

    return (
        <div className='backgroundColor' id='about' style={{ paddingTop: '65px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center text-light details">
                        <h1 className='nameHi name'>Hi, I am</h1>
                        <h1 className='name'>{values.name}</h1>
                        <h2 className=''>I am a <ReactTyped className='role'
                            strings={[
                                "Full Stack Java Developer.",
                                "Java Backend Developer."
                            ]}
                            typeSpeed={70}
                            backSpeed={80}
                            loop
                        /></h2>
                        <p className='text-left detailsaboutme'>
                            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                        </p>

                        <button type="button" className="btn checkresume" onClick={() => window.open('https://drive.google.com/file/d/1N_5SRYnw2c8yLJqr83EqeUYht0aojnux/view?usp=drive_link', '_blank')}>
                            Check Resume
                        </button>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                        <img src={'/DP3.png'} alt="My Image" className="img-fluid" style={{ height: '600px' }} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;
