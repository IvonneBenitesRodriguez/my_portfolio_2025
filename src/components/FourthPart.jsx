import React from 'react';
import '../App.css';

const FourthPart = () => {
  const badges = [
    {
      title: 'Nmap Basics',
      description:
        'Powerful network scanning tool used to discover hosts and services on a computer.',
      benefits:
        'identifying open ports and running services, revealing potential security vulnerabilities for hardening.',
      image: require('../img/badges/bdg1.png'),
    },
    {
      title: 'Nmap Basics Port Scans',
      description:
        'Check common network service ports to see if they are open and listening for connections.',
      benefits: 'identifying open ports and the services listening on them.',
      image: require('../img/badges/bdg2.png'),
    },
    {
      title: 'Nmap Advanced Port Scans',
      description:
        'Offers a deep analysis, target ports/services, versions, vulnerabilities, and bypass firewalls.',
      benefits:
        ' Deep service and vulnerability analysis, often bypassing basic security measures.',
      image: require('../img/badges/bdg3.png'),
    },
    {
      title: 'Nmap Post Port Scans',
      description:
        'Use information from initial scans to further investigate open ports and services for specific vulnerabilities.',
      benefits:
        'Gaining deeper, more specific insights into identified open ports and services.',
      image: require('../img/badges/bdg4.png'),
    },
    {
      title: 'Wireshark: the Basics',
      description:
        'It is a network protocol analyzer that captures and displays network traffic in real-time, allowing you to inspect the data exchanged between devices.',
      benefits:
        'Seeing raw network data for fundamental understanding of communication and issues.',
      image: require('../img/badges/bdg5.png'),
    },
    {
      title: 'Wireshark: Packet Operations',
      description:
        'Wireshark Packet Operations involve manipulating and examining captured network traffic to diagnose problems and understand communication flows.',
      benefits:
        'Detailed network traffic analysis for effective troubleshooting and security insights.',
      image: require('../img/badges/bdg6.png'),
    },
    {
      title: 'Owasp Top 10',
      description:
        'Detailed network traffic analysis for effective troubleshooting and security insights.',
      benefits:
        ' providing a focused and prioritized awareness of web security vulnerabilities.',
      image: require('../img/badges/bdg7.png'),
    },
    {
      title: 'SQL Map Room',
      description:
        'This room helps to identify and exploit SQL injection vulnerabilities using SQLMap tool.',
      benefits:
        'Detect and exploit SQL injection vulnerabilities in web applications using SQLMap.',
      image: require('../img/badges/bdg12.png'),
    },
    {
      title: 'Introduction to Security Engineering ',
      description:
        'Fundamental cybersecurity concepts, principles, and common terminology introduction.',
      benefits:
        'Establishing a crucial initial understanding of fundamental cybersecurity.',
      image: require('../img/badges/bgd10.png'),
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
          {badges.map((badge, index) => (
            <div className="col-md-4" key={index}>
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
};

export default FourthPart;
