import React from 'react';
import '../App.css';
import p4 from '../img/projects/p4.png';
import p2 from '../img/projects/p2.png';
import p5 from '../img/projects/p5.png';
import p6 from '../img/projects/p6.png';
import p7 from '../img/projects/p7.png';
import p11 from '../img/projects/p11.png';

function ThirdPart() {
  const projects = [
    {
      id: 1,
      title: 'Full Stack Project (React, Rails, PgSQL)',
      image: p4,
      githubUrl:
        'https://github.com/IvonneBenitesRodriguez/medical_project_frontend',
      liveUrl: 'https://medical-project-frontend.vercel.app/',
      description:
        'A medical project that allows users to manage their health records and appointments.',
    },
    {
      id: 2,
      title: 'Frontend Project (React,CSS3)',
      image: p2,
      githubUrl: 'https://github.com/IvonneBenitesRodriguez/bakery_shop_site',
      liveUrl: '',
      description:
        'A bakery shop website designed for displaying baked goods and enabling online orders.',
    },
    {
      id: 3,
      title: 'Frontend Project (React,CSS3)',
      image: p5,
      githubUrl:
        'https://github.com/IvonneBenitesRodriguez/my_coffee_elections',
      liveUrl: 'https://my-coffee-elections.vercel.app/',
      description:
        'A coffee elections project lets users vote for coffee blends and see real-time results.',
    },
    {
      id: 4,
      title: 'Frontend Project (JS, CSS3, HTML5)',
      image: p6,
      githubUrl: 'https://github.com/IvonneBenitesRodriguez/weather_app',
      liveUrl: 'https://nifty-banach-7d60d8.netlify.app/',
      description:
        'A weather app shows real-time updates and forecasts for different locations.',
    },
    {
      id: 5,
      title: 'Full Stack Project (React, Rails, PgSQL)',
      image: p7,
      githubUrl:
        'https://github.com/IvonneBenitesRodriguez/finalGroupCapstone-frontend',
      liveUrl: 'https://luminous-semolina-e113b8.netlify.app/',
      description:
        'Front-end Book hotel app : users can book hotels online, make reservations, & view hotel details.',
    },
    {
      id: 6,
      title: 'Frontend Project (HTML5,CSS3)',
      image: p11,
      githubUrl: 'https://github.com/IvonneBenitesRodriguez/homepage',
      liveUrl: 'https://ivonnebenitesrodriguez.github.io/homepage/',
      description:
        'Resume page that showcases my skills and experience as a developer.',
    },
  ];
  return (
    <div>
      <div className="container my-2">
        <div className="row g-3">
          <div className="col-md-12 d-flex justify-content-center">
            <h2 className="text-center">My Projects</h2>
          </div>
        </div>
        <div className="row g-3">
          {projects.map((project) => (
            <div className="col-md-4" key={project.id}>
              <div className="card">
                <img
                  src={project.image}
                  className="card-img-top project-image"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn button me-2"
                  >
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn button_live"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThirdPart;
