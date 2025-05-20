import React from 'react';
import '../App.css';
import f0 from '../img/flag/f0.png';
import f1 from '../img/flag/f1.png';
import f2 from '../img/flag/f2.png';
import f3 from '../img/flag/f3.png';
import f4 from '../img/flag/f4.png';
import f5 from '../img/flag/f5.png';
import f6 from '../img/flag/f6.png';

function SixthPart() {
  const languages = [
    { name: 'English', level: 'Proficiency', flag: f2 },
    { name: 'Spanish', level: 'Native Speaker', flag: f0 },
    { name: 'French', level: 'Proficiency', flag: f1 },
    { name: 'Italian', level: 'Proficiency', flag: f5 },
    { name: 'Japanese', level: 'Intermediate', flag: f3 },
    { name: 'Portuguese', level: 'Intermediate', flag: f4 },
    { name: 'German', level: 'B2', flag: f6 },
  ];

  return (
    <div>
      {/* Languages Section */}
      <div className="container my-2">
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
          Languages I Speak
        </h2>
        <div className="row justify-content-center">
          {languages.map((language) => (
            <div
              key={language.name}
              className="col-12 col-sm-6 col-md-3 text-center"
            >
              <div
                style={{
                  marginBottom: '20px',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  padding: '20px',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <img
                  src={language.flag}
                  alt={`${language.name} flag`}
                  style={{
                    width: '40px',
                    height: 'auto',
                    marginBottom: '10px',
                  }}
                />
                <h4>{language.name}</h4>
                <p>{language.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SixthPart;
