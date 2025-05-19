import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import mypicture2 from '../img/mypicture2.jpeg';

const SecondPart = () => {
  return (
    <div className="container my-3">
      <div className="row g-3 align-items-center">
        <div className="col-md-6 d-flex flex-column">
          <h1 className="text-center mb-4">Get to know me</h1>
          <p className="text-justify mx-auto" style={{ width: '70%' }}>
            I am a passionate web developer with a keen interest in creating
            dynamic and responsive web applications. My journey in web
            development has been fueled by a desire to learn and grow, and I am
            excited to share my work with you.
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
};

export default SecondPart;
