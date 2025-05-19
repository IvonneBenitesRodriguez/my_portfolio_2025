import React from 'react';
import '../App.css';

function SixthPart() {
  const languages = [
    { name: 'English', level: 'Proficiency', flag: '../img/flag/f2.png' },
    { name: 'Spanish', level: 'Native Speaker', flag: '../img/flag/f0.png' },
    { name: 'French', level: 'Proficiency', flag: '../img/flag/f1.png' },
    { name: 'Italian', level: 'Proficiency', flag: '../img/flag/f5.png' },
    { name: 'Japanese', level: 'Intermediate', flag: '../img/flag/f3.png' },
    { name: 'Portuguese', level: 'Intermediate', flag: '../img/flag/f4.png' },
    { name: 'German', level: 'B2', flag: '../img/flag/f6.png' },
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
