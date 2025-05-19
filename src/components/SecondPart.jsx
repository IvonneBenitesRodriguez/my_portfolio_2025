import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import mypicture2 from '../img/mypicture2.jpeg';

function SecondPart() {
  return (
    <div className="container my-3">
      <div className="row g-3 align-items-center">
        <div className="col-md-6 d-flex flex-column">
          <h1 className="text-center mb-4">Get to know me</h1>
          <p className="text-justify mx-auto" style={{ width: '70%' }}>
            I'm a full-stack developer with a solid toolkit: React, JavaScript,
            PostgreSQL, Ruby on Rails, Tailwind CSS, HTML5, and CSS3. My
            Master's in Cybersecurity gives me a unique edge with knowledge of
            the CIA triad and pentesting. Beyond coding, I bring Marketing
            experience and a strong understanding of customer needs and business
            goals. I'm a team player with fluent English and B2 German. My
            recent frontend internship in Berlin at a healthcare startup
            provided valuable hands-on experience. Visit my LinkedIn for more:
            https://www.linkedin.com/in/ivonnebenites/. Excited to connect and
            explore how my diverse skills can contribute to your team! 😊
          </p>
          <div className="d-flex justify-content-center mt-4">
            <Button
              style={{
                width: '200px',
                height: '50px',
                backgroundColor: 'pink',
                border: 'none',
                color: '#4a4a48',
                fontSize: '20px',
              }}
            >
              Read more
            </Button>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={mypicture2}
            alt="picture2_banner"
            className="rounded img-fluid"
            style={{
              maxWidth: '50%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SecondPart;
