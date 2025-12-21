import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import networkSecurityImage from '../img/projects/network_security.png';
import offensiveSecurityImage from '../img/projects/unfiltered_ports.png';

function FifthPart() {
  return (
    <div>
      <div className="container my-2">
        <div className="row g-3">
          <div className="col-12 d-flex flex-column justify-content-center">
            <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>
              Projects in Cybersecurity
            </h2>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-12 d-flex flex-column justify-content-center">
            <img
              src={networkSecurityImage}
              alt="Network Security Project"
              className="network-security-image img-fluid rounded"
              style={{
                maxWidth: '50%',
                height: 'auto',
                border: '1px solid #ccc',
                borderRadius: '10px',
                marginBottom: '20px',
              }}
            />
          </div>
          <div className="col-12 d-block flex-column justify-content-center text-center">
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
              Network Security Project
            </h3>
            <h4
              style={{
                textAlign: 'center',
                marginBottom: '20px',
                fontSize: '18px',
              }}
            >
              Tool: Cisco Packet Tracer
            </h4>
            <p
              style={{
                textAlign: 'justify',
                marginBottom: '20px',
                width: '90%',
                margin: '0 auto',
              }}
            >
              This project focuses on network security, including scanning,
              monitoring, and securing networks. It provides insights into
              identifying vulnerabilities such as open ports and implementing
              security measures to protect systems.
            </p>
            <div className="d-flex justify-content-center">
              <a
                href="/my_portfolio_2025/assessment/network_assessment.pdf"
                target="_blank"
                download="network_assessment.pdf"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  style={{
                    width: '200px',
                    height: '50px',
                    backgroundColor: '#ffdcf5',
                    border: 'none',
                    textAlign: 'center',
                    marginTop: '25px',
                    color: '#4a4a48',
                    fontSize: '20px',
                  }}
                >
                  Download PDF
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-12 d-flex flex-column justify-content-center">
            <img
              src={offensiveSecurityImage}
              alt="Offensive Security Project"
              className="offensive-security-image img-fluid rounded"
              style={{
                maxWidth: '40%',
                height: 'auto',
                border: '1px solid #ccc',
                borderRadius: '10px',
                marginLeft: '28%',
                marginBottom: '20px',
                marginTop: '20px',
              }}
            />
          </div>
          <div className="col-md-12 d-block flex-column justify-content-center">
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
              Offensive Security Project
            </h3>
            <h4
              style={{
                textAlign: 'center',
                marginBottom: '20px',
                fontSize: '18px',
              }}
            >
              Tool: Nmap
            </h4>
            <p
              style={{
                textAlign: 'justify',
                marginBottom: '20px',
                width: '90%',
                margin: '0 auto',
              }}
            >
              This project focuses on offensive security, utilizing Nmap to scan
              and identify open ports, its states as in this case unfiltered
              states on a target system. It emphasizes the importance of
              detecting potential vulnerabilities and misconfigurations in a
              system.
            </p>
            <div className="d-flex justify-content-center">
              <a
                href="/my_portfolio_2025/assessment/offensive_security.pdf"
                target="_blank"
                download="offensive_security.pdf"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  style={{
                    width: '200px',
                    height: '50px',
                    backgroundColor: '#ffdcf5',
                    border: 'none',
                    textAlign: 'center',
                    marginTop: '25px',
                    color: '#4a4a48',
                    fontSize: '20px',
                  }}
                >
                  Download PDF
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPart;
