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
import bgd18 from '../img/badges/bgd18.png';
import bgd19 from '../img/badges/bgd19.png';
import bgd20 from '../img/badges/bgd20.png';
import bgd21 from '../img/badges/bgd21.png';
import bgd22 from '../img/badges/bgd22.png';
import bgd23 from '../img/badges/bgd23.png';
import bgd24 from '../img/badges/bgd24.png';
import bgd25 from '../img/badges/bgd25.png';
import bgd26 from '../img/badges/bgd26.png';
import bgd27 from '../img/badges/bgd27.png';
import bgd28 from '../img/badges/bgd28.png';
import bgd29 from '../img/badges/bgd29.png';
import bgd30 from '../img/badges/bgd30.png';
import bgd31 from '../img/badges/bgd31.png';
import bgd32 from '../img/badges/bgd32.png';
import bgd33 from '../img/badges/bgd33.png';
import bgd34 from '../img/badges/bgd34.png';
import bgd35 from '../img/badges/bgd35.png';
import bgd36 from '../img/badges/bgd36.png';
import bgd37 from '../img/badges/bgd37.png';
import bgd38 from '../img/badges/bgd38.png';
import bgd39 from '../img/badges/bgd39.png';
import bgd40 from '../img/badges/bgd40.png';
import bgd41 from '../img/badges/bgd41.png';
import bgd42 from '../img/badges/bgd42.png';
import bgd43 from '../img/badges/bgd43.png';
import bgd44 from '../img/badges/bgd44.png';
import bgd45 from '../img/badges/bgd45.png';
import bgd46 from '../img/badges/bgd46.png';
import bgd47 from '../img/badges/bgd47.png';
import bgd48 from '../img/badges/bgd48.png';

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
     {
      title: 'Content of Discovery',
      description:
      'This room covers three ways to learn hidden or private content of webserver that could lead to new vulnerabilities.',
      benefits: 'It convers Reconnaissance Phase, tools like gobuster, and dirbuster are used and finally OSINT, manual and automated ways for finding content are discovered.',
      image: bgd18,
    },
     {
      title: 'Authentication Bypass',
      description:
      'This room teaches how to defeat logins and other authentication mechanisms to allow you access to unpermitted areas.',
      benefits: 'Learn real-word hacking techniques, and hands-on security testing experience.',
      image: bgd19,
    },
     {
      title: 'IDOR',
      description:
      'Insecure Direct Object Reference Room.',
      benefits: 'Learn to change IDs in URLs or requests to access data that does not belong to us. As a penetration tester is possible to see someone else bank account just by changing a number in the URL.',
      image: bgd20,
    },
    {
      title: 'Intro to XSS',
      description:
      'Intro to Cross-Site Scripting Room.',
      benefits: 'Directly applicable to web security audits; learn attack vectors that compromise user sessions and sensitive data.',
      image: bgd21,
    },
    {
      title: 'Intro to SSRF',
      description:
      'Intro to Server-Side Request Forgery Room.',
      benefits: 'Exploit server-side flaws to access internal resources and cloud services; essential for API and infrastructure security audits.',
      image: bgd22,
    },
     {
      title: 'DNS in Detail',
      description:
      'DNS mechanics and record types - foundation for subdomain enumeration and web reconnaissance. [Practical completed].',
      benefits: 'Understand DNS mechanics (domain hierarchy, record types, resolution process) - essential foundation for subdomain enumeration and reconnaissance in web pentesting.',
      image: bgd23,
    },
    {
      title: 'HTTP in Detail',
      description:
      'Learn HTTP protocol fundamentals including request/response structure, methods (GET, POST, PUT, DELETE), status codes, headers, cookies, and HTTPS basics. [Practical completed].',
      benefits: 'Essential for understanding web application traffic, intercepting requests with Burp Suite, and exploiting session management vulnerabilities in web pentesting.',
      image: bgd24,
    },
     {
      title: 'Badge Webbed',
      description:
      ' Earned for completing web fundamentals covering HTTP protocol, DNS mechanics, and how web applications communicate - core knowledge for web security.',
      benefits: ' Essential foundation for understanding web traffic interception, session management, and identifying application-layer vulnerabilities in penetration testing.',
      image: bgd25,
    },
     {
      title: 'How the Websites work',
      description:
      'Website fundamentals with practical exercises in HTML/JavaScript, HTML injection attacks, and discovering hardcoded credentials in source code.',
      benefits: 'Hands-on reconnaissance skills for identifying code-level vulnerabilities and security misconfigurations in web applications.',
      image: bgd26,
    },
     {
      title: 'Putting all Together room',
      description:
      'Applied integrated web fundamentals (DNS resolution, HTTP requests, website rendering) in hands-on scenarios connecting all previous concepts.',
      benefits: 'Complete web stack comprehension for systematic vulnerability assessment and understanding end-to-end web application flow.',
      image: bgd27,
    },
    {
      title: 'OSI MODEL Room',
      description:
      'Completed the OSI Model room on TryHackMe, gaining an understanding of the 7-layer framework that governs how data is transmitted and processed across networks.',
      benefits: ' Network communication protocols and layer-specific attack surfaces are essential for effective penetration testing and web security analysis.',
      image: bgd28,
    },
    {
      title: 'Packets & Frames Room',
      description:
      'Fundamentals of network communication, covering data transmission via packets and frames, TCP/UDP protocols, port addressing, and the TCP three-way handshake.',
      benefits: 'Builds a solid foundation in network traffic analysis, essential for identifying vulnerabilities and performing network-layer reconnaissance in penetration testing.',
      image: bgd29,
    },
    {
      title: 'Burp Suite Essentials Room',
      description:
      'Intercept, modify and replay HTTP requests using Burp Suite Proxy and Repeater to find and exploit web vulnerabilities.',
      benefits: 'Hands-on practice intercepting, modifying and replaying live HTTP requests to bypass client-side filters, trigger server errors, exploit XSS and SQL Injection vulnerabilities, and manipulate request headers in real-world web application scenarios.',
      image: bgd31,
    },
     {
      title: 'Burp Suite Repeater Room',
      description:
      'Resend and modify HTTP requests repeatedly to manually test, enumerate and exploit web vulnerabilities without re-intercepting traffic.',
      benefits: 'Manually triggered a 500 Internal Server Error by sending extreme inputs to endpoints, bypassed server-side validations, and extracted CEO confidential notes from a live database using Union SQL Injection — all without re-intercepting traffic.',
      image: bgd30,
    },
    {
      title: 'Burp Suite Intruder Room',
      description:
      'An automated tool for injecting custom payload sets into specific positions within an HTTP request to observe server responses.',
      benefits: 'It enables rapid, large-scale fuzzing and brute-forcing, allowing pentesters to identify vulnerabilities like IDOR, SQLi, or hidden directories that are impossible to find manually.',
      image: bgd32,
    },
     {
      title: 'Burp Suite: Other Modules Room',
      description:
      'Gaining hands-on experience with Decoder for encoding/decoding data transformations. Comparer for byte and word-level response analysis. Sequencer for cryptographic token entropy analysis, and Organizer for efficient project management.',
      benefits: 'Mastered advanced Burp Suite modules enabling real-world penetration testing capabilities including: identifying weak CSRF token randomness through entropy analysis, detecting subtle differences between HTTP responses to confirm successful exploits, encoding/decoding payloads to bypass WAF filters and input validation controls, and efficiently organizing security assessments — skills directly applicable to web application security testing in financial and enterprise environments.',
      image: bgd33,
    },
     {
      title: 'Badge completed: Burp Suite Module ',
      description:
      '🎯 I am happy to share that I just earned the Burp Suite badge on TryHackMe, ranking in the Top 20% of users who completed the Burp Suite module.',
      benefits: 'Burp Suite intercepts and manipulates HTTP requests with precision, making it the essential tool for discovering and exploiting web vulnerabilities professionally.',
      image: bgd34,
    },
     {
      title: 'Race Conditions Room',
      description:
      'Race conditions happen when multiple simultaneous requests exploit the gap between checking and updating data, demonstrated using Burp Suite to manipulate financial balances.',
      benefits: 'Race condition testing allows pentesters to uncover high-impact financial vulnerabilities like double spending and balance manipulation that automated tools typically miss.',
      image: bgd35,
    },
     {
      title: 'Badge completed: Intro to Web Hacking Module ',
      description:
      '🎯 I am happy to share that I just earned the Intro to Web Hacking badge on TryHackMe.',
      benefits: 'Web application attack techniques such as SQL injection, XSS, command injection, and file upload vulnerabilities are taught through hands-on exercises and practice.',
      image: bgd36,
    },
      {
      title: 'Command Injection Room ',
      description: 
      'This room focuses on running arbitrary commands on a web server through practical exercises to practice exploiting command injection vulnerabilities.',
      benefits: 'Understand Operating System command injection attack vectors and learn defensive techniques to prevent RCE (Remote Code Execution).',
      image: bgd37,
    },
      {
      title: 'Active Reconnaissance Room ',
      description:
      '.',
      benefits: '.',
      image: bgd38,
    },
    {
      title: 'Missing a Person Room',
      description: 
      'OSINT Techniques used.',
      benefits: '.',
      image: bgd39,
    },
    {
      title: 'Web Application Basics Room',
      description: 
      'Concepts such as Security Headers, URL Path, HTTP Request, Request Headers, HTTP Response, Response Headers and Security Headers.',
      benefits: '.',
      image: bgd40,
    },
     {
      title: 'Network Essentials Room',
      description: 
      '',
      benefits: '.',
      image: bgd41,
    },
     {
      title: 'Networking Concepts Room',
      description: 
      '',
      benefits: '.',
      image: bgd42,
    },
    {
      title: 'Networking Core Protocols',
      description:
      '',
      benefits: '.',
      image: bgd43,
    },
    {
      title: 'Network Security Protocols',
      description:
      '',
      benefits: '.',
      image: bgd44,
    },
    {
      title: 'Nmap Host Live Discovery ',
      description:
      '',
      benefits: '.',
      image: bgd45,
    },
     {
      title: 'Protocols and Servers',
      description:
      '',
      benefits: '.',
      image: bgd46,
    },
    {
      title: 'Network Security Challenge',
      description:
      '',
      benefits: '.',
      image: bgd47,
    },
    {
      title: 'Vulnerabilities 101',
      description:
      '',
      benefits: '.',
      image: bgd48,
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
            <div className="col-lg-3 col-md-4 col-sm-6" key={badge.title}>
              <div className="card text-center badge-card">
                <img
                  src={badge.image}
                  className="card-img-top badge-image"
                  alt={badge.title}
                />
                <div className="card-body p-2">
                  <h6 className="card-title">{badge.title}</h6>
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
