import React from 'react';
import './Projects.css';

function Projects() {

    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        projectsSection.scrollIntoView({ behavior: "smooth" });
    };

    const projectDetails = () => {
        return [
            {
                projectLogo: "/bmr.png", 
                projectName: "BMR SAAS Application",
                technologyUsed: "React JSX, Tailwind CSS, Spring Boot, Spring Data JPA, Hibernate, Spring JWT, OAuth, TokenUtil, Microservices, Apache Kafka.",
                projectDescription: "BMR is a robust multi-tenant SaaS application designed for product management. Leveraging an advanced microservices architecture, it ensures scalable and secure management of products across diverse tenant environments while facilitating realtime communication"
            },
            {
                projectLogo: "/Wafa1.png",
                projectName: "Wafa Enterprises",
                technologyUsed: "React JSX, Spring Boot, Spring Data JPA, Hibernate, Spring Security, MySQL",
                projectDescription: "Wafa Enterprises is a sophisticated payment application designed to facilitate lucky draw transactions. It offers both Admin and User login functionalities, allowing seamless access to transaction details and account management."
            },
            {
                projectLogo: "/movieBooking1.png",
                projectName: "Movie Booking",
                technologyUsed: "React JSX, Spring Boot, Spring Data JPA, Hibernate, Spring Security, MySQL, RazorPay",
                projectDescription: "Movie Booking - Payment Application facilitates movie ticket bookings and payments. It utilizes advanced technologies like React JSX, Spring Boot, Spring Data JPA, Hibernate, Spring Security, MySQL, and RazorPay for secure and efficient booking experiences."
            },
            {
                projectLogo: "/ResumeBuilder1.png",
                projectName: "Resume Builder",
                technologyUsed: "React JSX, Spring Boot, Spring Data JPA, Hibernate, MySQL",
                projectDescription: "Resume Builder - Application assists users in creating professional resumes effortlessly. It employs React JSX, Spring Boot, Spring Data JPA, Hibernate, and MySQL for seamless user experiences. With its intuitive interface and customizable templates, users can tailor their resumes to suit various industries."
            },
            {
                projectLogo: "/EmailScheduler.PNG",
                projectName: "Email Scheduler",
                technologyUsed: "Spring Boot, Spring Data JPA, Hibernate, MySQL, PDFTOJAVA",
                projectDescription: "Email Scheduler Application automates sending emails with resumes to HR. It leverages Spring Boot, Spring Data JPA, Hibernate, MySQL, and PDFTOJAVA for efficient scheduling and delivery. The application offers a user-friendly dashboard to schedule emails, track deliveries, and effortlessly manage resume templates, ensuring a seamless user experience and productivity enhancement."
            },
            {
                projectLogo: "/Fake.png ",
                projectName: "Prank Payment",
                technologyUsed: "React Native, Spring Boot, Spring Data JPA, Hibernate, MySQL",
                projectDescription: "Prank Payment Application is a unique project developed with React Native for the frontend and Spring Boot for the backend. It simulates a payment application interface but with a humorous twist. Users can prank their friends by sending fake payment notifications and enjoy the reactions. The application includes interactive features and realistic UI elements to enhance the prank experience."
            },
        ];
    };

    return (
        <div className='projects' id='projects'>
            <h1 className='text-center text-light' style={{ paddingTop: '80px' }}>Projects</h1>
            <div className="projects-container mt-5">
                <div className="row justify-content-center">
                    {projectDetails().map((project, index) => (
                        <div key={index} className='projectbox col-lg-4 col-md-6 col-sm-12'>
                            <img src={project.projectLogo} alt="Project Logo" className="project-logo img-fluids" />
                            <h2 className='mt-3' style={{ fontSize: '1.5rem' }}>{project.projectName}</h2>
                            <p className='' style={{ fontSize: '0.75rem' }}>{project.projectDescription}</p>
                            <p style={{ fontSize: '0.75rem' }}>Technologies used: {project.technologyUsed}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
