import React from 'react';
import Button from 'react-bootstrap/Button'; // Fixed import order
import mypicture from '../img/mypicture.png';
import '../App.css';

function FirstPart() {
  return (
    <div className="container my-2">
      <div className="row g-3">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <img
            src={mypicture}
            alt="picture1_banner"
            className="rounded img-fluid"
            style={{
              width: '70%',
              height: 'auto',
              marginTop: '10px',
              paddingTop: '10px',
              margin: '0 auto',
            }}
          />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column text-center text-md-start justify-content-center">
          <h1 style={{ marginBottom: '20px' }}>Ivonne Benites Rodriguez</h1>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            Full-Stack Developer &
            <br />
            Cybersecurity MSc
          </h3>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-md-start gap-2 mb-2">
            <a
              href="../img/cv/Resume_IvonneBenites.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Resume_IvonneBenites.pdf"
            >
              <Button
                style={{
                  width: '200px',
                  height: '50px',
                  backgroundColor: 'pink',
                  border: 'none',
                  textAlign: 'center',
                  marginTop: '25px',
                  color: '#4a4a48',
                  fontSize: '20px',
                }}
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPart;
