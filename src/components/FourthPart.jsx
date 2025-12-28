import React from 'react';
import '../App.css';
import bdg1 from '../img/badges/bdg1.png';
import bdg2 from '../img/badges/bdg2.png';
import bdg3 from '../img/badges/bdg3.png';
import bdg4 from '../img/badges/bdg4.png';
import bdg5 from '../img/badges/bdg5.png';
import bdg6 from '../img/badges/bdg6.png';
import bdg7 from '../img/badges/bdg7.png';
import bdg12 from '../img/badges/bdg12.png';
import bgd10 from '../img/badges/bgd10.png';
import bgd11 from '../img/badges/bgd11.png';
import bgd13 from '../img/badges/bgd13.png';
import bgd14 from '../img/badges/bgd14.png';
import bgd15 from '../img/badges/bgd15.png';
import bgd16 from '../img/badges/bgd16.png';
import bgd17 from '../img/badges/bgd17.png';

function FourthPart() {
  const badges = [
    {
      title: 'Nmap Basics',
      description:
        'Powerful network scanning tool used to discover hosts and services on a computer.',
      benefits:
        'identifying open ports, revealing potential security vulnerabilities for hardening.',
      image: bdg1,
    },
    {
      title: 'Nmap Basics Port Scans',
      description:
        'Check common network service ports to see if they are open.',
      benefits: 'identifying open ports and its services listening on them.',
      image: bdg2,
    },
    {
      title: 'Nmap Advanced Port Scans',
      description:
        'Offers a deep analysis, target ports/services, versions, vulnerabilities, and bypass firewalls.',
      benefits:
        ' Deep service and vulnerability analysis, often bypassing basic security measures.',
      image: bdg3,
    },
    {
      title: 'Nmap Post Port Scans',
      description:
        'Use information from initial scans to further investigate open ports and services for specific vulnerabilities.',
      benefits:
        'Gaining deeper, more specific insights into identified open ports and services.',
      image: bdg4,
    },
    {
      title: 'Wireshark: the Basics',
      description:
        'It is a network protocol analyzer that captures and displays network traffic in real-time, allowing you to inspect the data exchanged between devices.',
      benefits:
        'Seeing raw network data for fundamental understanding of communication and issues.',
      image: bdg5,
    },
    {
      title: 'Wireshark: Packet Operations',
      description:
        'Wireshark Packet Operations involve manipulating and examining captured network traffic to diagnose problems and understand communication flows.',
      benefits:
        'Detailed network traffic analysis for effective troubleshooting and security insights.',
      image: bdg6,
    },
    {
      title: 'Owasp Top 10',
      description:
        'Detailed network traffic analysis for effective troubleshooting and security insights.',
      benefits:
        ' providing a focused and prioritized awareness of web security vulnerabilities.',
      image: bdg7,
    },
    {
      title: 'SQL Map Room',
      description:
        'This room helps to identify and exploit SQL injection vulnerabilities using SQLMap tool.',
      benefits:
        'Detect and exploit SQL injection vulnerabilities in web applications using SQLMap.',
      image: bdg12,
    },
    {
      title: 'Introduction to Security Engineering ',
      description:
        'Fundamental cybersecurity concepts, principles, and common terminology introduction.',
      benefits:
        'Establishing a crucial initial understanding of fundamental cybersecurity.',
      image: bgd10,
    },
    {
      title: 'Defensive Introduction',
      description:
      'Introducing defensive security and related topics, such as Threat Intelligence, SOC, DFIR, Malware Analysis, and SIEM.',
      benefits: ' Proactive threat awareness, and foundational security monitoring.',
      image: bgd11,
    },
    {
      title: 'Offensive Security Intro',
      description:
      'Breaking into computer systems, exploiting software bugs, and finding loopholes in applications.',
      benefits: ' Adversarial mindset development, identification of common attack vectors, and practical validation of security controls.',
      image: bgd13,
    },
    {
      title: 'OWASP TOP 2025:Application Design Flaws',
      description:
      'Categories: AS02:Security Misconfigurations, AS03:Software Supply Chain Failures, AS04:Crytographic Failures, and AS06:Insecure Design.',
      benefits: ' Structural design flaws detection, cryptographic risk management, and practical application of Security by Design principles.',
      image: bgd14,
    },
    {
      title: 'OWASP TOP 2025:IAAA Failures',
      description:
      'Categories: A01: Broken Access Control, A07: Authentication Failures, A09: Logging & Alerting Failures',
      benefits: ' Implementation of the IAAA framework to ensure secure identity verification, granular access control, and comprehensive audit trails.',
      image: bgd15,
    },
     {
      title: 'PENTESTING FUNDAMENTALS',
      description:
      'This room covers penetration tester job responsibilities and processes (finding vulnerabilities in a clients application or system).',
      benefits: ' Understanding Penetration Testing Stages and Compliance Frameworks.',
      image: bgd16,
    },
    {
      title: 'Principles of Security',
      description:
      'This room covers some of the fundamental principles of information security, frameworks used to protect data and systems to the elements of what exactly makes data secure.',
      benefits: 'The measures, frameworks and protocols discussed play a small part in "Defence in Depth.',
      image: bgd17,
    },
  ];
  return (
    <div>
      <div className="container my-2">
        <div className="row g-3">
          <div className="col-md-12 d-flex flex-column justify-content-center">
            <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>
              My Cybersecurity Badges
            </h1>
            <h3 style={{ textAlign: 'center', fontSize: '18px' }}>
              Platform: https://tryhackme.com
            </h3>
            <p className="text-justify mx-auto" style={{ width: '59%' }}>
              Here are some of the badges I have worked on tryhackme web which
              is an online platform dedicated to teaching and learning
              cybersecurity through practical, hands-on exercises and
              challenges.
            </p>
          </div>
        </div>
        <div className="row g-3">
          {badges.map((badge) => (
            <div className="col-md-4" key={badge.title}>
              <div className="card text-center">
                <img
                  src={badge.image}
                  className="card-img-top badge-image"
                  alt={badge.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{badge.title}</h5>
                  <p className="card-text">{badge.description}</p>
                  <p className="card-text">
                    <strong>Benefits:</strong>
                    {badge.benefits}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FourthPart;
