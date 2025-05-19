import React from 'react';
import '../App.css';

const SeventhPart = () => {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '5px',
        backgroundColor: '#ffdcf5',
        marginTop: '30px',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Contact Me</h2>

      {/* GitHub Section */}
      <div
        style={{
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <img
          src="/icon/c0.png"
          alt="GitHub Icon"
          style={{
            width: '20px',
            height: 'auto',
            marginRight: '10px',
          }}
        />
        <strong>GitHub:</strong>{' '}
        <a
          href="https://github.com/IvonneBenitesRodriguez"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: ' #4a4a48' }}
        >
          github.com/IvonneBenitesRodriguez
        </a>
      </div>

      {/* Email Section */}
      <div
        style={{
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <img
          src="/icon/c1.png"
          alt="Email Icon"
          style={{
            width: '20px',
            height: 'auto',
            marginRight: '10px',
          }}
        />
        <strong>Email:</strong>{' '}
        <a
          href="mailto:ivonnebenites2015@gmail.com"
          style={{ textDecoration: 'none', color: ' #4a4a48' }}
        >
          ivonnebenites2015@gmail.com
        </a>
      </div>

      {/* Medium Section */}
      <div
        style={{
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <img
          src="/icon/c2.png"
          alt="Medium Icon"
          style={{
            width: '20px',
            height: 'auto',
            marginRight: '10px',
          }}
        />
        <strong>Medium:</strong>{' '}
        <a
          href="https://medium.com/@ivonnebenites2015/why-did-i-choose-to-study-software-development-8f9e979bffc2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: ' #4a4a48',
            marginRight: '10px',
          }}
        >
          Read my article on Medium
        </a>
      </div>
    </footer>
  );
};

export default SeventhPart;
