import React from 'react';
import '../App.css';
import '../img/icon/c0.png';
import '../img/icon/c1.png';
import '../img/icon/c2.png';

function SeventhPart() {
  return (
    <footer
      style={{
        textAlign: 'center',
        backgroundColor: '#ffdcf5',
        marginTop: '30px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* GitHub Section */}
      <div className="contact-row">
        <div
          style={{
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: '2px',
          }}
        >
          <strong style={{ marginRight: '2px' }}>Github:</strong>
          <img
            src="../img/icon/c0.png"
            alt=""
            style={{
              width: '20px',
              height: 'auto',
              margin: '0 2px',
              verticalAlign: 'middle',
              display: 'inline-block',
            }}
          />
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
            flexDirection: 'row',
          }}
        >
          <img
            src="../img/icon/c1.png"
            alt=""
            style={{
              width: '20px',
              height: 'auto',
            }}
          />
          <strong style={{ marginRight: '2px' }}>Email:</strong>
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
            src="../img/icon/c2.png"
            alt=""
            style={{
              width: '20px',
              height: 'auto',
            }}
          />
          <strong style={{ marginRight: '2px' }}>Medium:</strong>
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
      </div>
    </footer>
  );
}

export default SeventhPart;
