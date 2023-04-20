import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import offblue from '../assets/images/offblue.jpg';
import Footer from '../components/Footer';

const TPMDetail = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const onEnterViewport = (index) => {
    setVisibleIndex(index);
  };

  const onExitViewport = () => {
    setVisibleIndex(null);
  };


  const paragraphs = [
    {
      text: "Over a challenging 9-month period, I managed a digital transformation process in a nonprofit organization that revamped the way my organization functioned. Working across departments and disciplines, I made a significant impact on the company's efficiency and future growth.",
    },
    {
      text: "As a leader, I managed a cross-functional team that included data analysts, web developers, and members of the board of directors. By employing Agile methodologies, we were able to effectively plan, prioritize, and execute product initiatives for various clients, thereby providing a high level of service and ensuring successful outcomes for all stakeholders.",
    },
    {
        text: "One of my most significant contributions during this time was leading a major digital transformation and innovation effort for a non-profit organization. This involved modernizing their IT infrastructure and processes to better align with business requirements, ultimately enhancing their ability to serve their mission and clients.",
      },
      {
        text: "A key milestone in our transformation journey was the successful migration of the organization's data to a cloud-based SaaS CRM. This was coupled with the launch of a new web app ahead of schedule, which resulted in improved donor retention and increased overall efficiency. Our efforts had a direct impact on the organization's bottom line and future prospects.",
      },
      {
        text: "In addition to these accomplishments, I also achieved cost savings by resolving technical debt and increased the organization's legitimacy by implementing the new CRM solution. This initiative enabled us to eliminate inefficiencies and focus on delivering real value to our stakeholders.",      },
      {
        text: "I was instrumental in leading the implementation of new software solutions and process improvements, which resulted in a more streamlined and efficient workflow. By identifying bottlenecks and leveraging cutting-edge technology, we were able to optimize our operations and enhance overall productivity.",
      },
      {
        text: "Beyond my work within the organization, I provided network support to clients on a freelance basis and developed mobile/web applications as new products. These experiences allowed me to expand my skill set and offer valuable insights to drive further innovation and growth. I also gained valuable experience in the areas of project management, software development, and data analytics.",
      },
    ];
  
    return (
      <>
        <style>
          {`
            body { margin: 0; padding: 0; }
  
            .portfolio-container {
              height: 100%;
              width: 100%;
              background-image: url(${offblue});
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              background-attachment: fixed;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-direction: column;
            }
  
            .heading {
              margin: 0;
              text-align: center;
              color: #005da9;
              font-size: 50px;
              padding-top: 1rem;
              padding-bottom: 1rem;
              font-family: 'Roboto', sans-serif;
            }
  
            .content-wrapper {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
              max-width: 100%;
              padding-left: 1rem;
              padding-right: 1rem;
            }
  
            .paragraph {
              font-size: 2.0rem;
              line-height: 1.6;
              color: #005da9;
              text-align: left;
              padding-left: 10px;
              font-family: 'Roboto', sans-serif;
              word-spacing: 0.1rem;
            }
  
            .paragraphs-wrapper {
              flex: 2;
              margin-right: 0;
              margin-bottom: 50px;
              max-width: 100%;
              margin-left: 0px;
            }
  
  
            @media (max-width: 768px) {
              .heading {
                font-size: 36px;
              }
  
              .paragraph {
                font-size: 1.4rem;
              }
  
              .image {
                padding: 1rem;
                padding-left: 0;
                margin-bottom: 20px;
                margin-top: -5px;
              }
  
              .content-wrapper {
                flex-direction: column;
              }
            }
          `}
        </style>
        <div className="portfolio-container">
          <h1 className="heading">Product Management Experience</h1>
          <div className="content-wrapper">
            <div className="paragraphs-wrapper">
              {paragraphs.map((paragraph, index) => (
                <ScrollTrigger
                  key={index}
                  onEnter={() => onEnterViewport(index)}
                  onExit={onExitViewport}
                  triggerOnce={false}
                >
                  <div
                className={`profile-section${visibleIndex === index ? ' visible' : ''}`}
                >
                  <p className="paragraph">{paragraph.text}</p>
                </div>
              </ScrollTrigger>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TPMDetail;
