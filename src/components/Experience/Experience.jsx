import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.css';

function Experience() {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [isHovering, setIsHovering] = useState(false);
    const [boxHeights, setBoxHeights] = useState([]);
    const [isPhone, setIsPhone] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    const handleHover = (index) => {
        setHoverIndex(index);
        setIsHovering(true);
    };

    const handleHoverOut = () => {
        setHoverIndex(null);
        setIsHovering(false);
    };

    const getBoxHeight = (index) => {
        if ((isPhone || isTablet) && window.innerWidth >= 1024) {
            return '100%';
        } else {
            return isPhone || isTablet ? '40vh' : `${window.innerHeight * 0.7}px`;
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setBoxHeights(Array(details.length).fill('auto'));
            setIsPhone(window.innerWidth < 768); // Adjust the tablet breakpoint as needed
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024); // Adjust the tablet breakpoint as needed
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const boxDetails = () => {
        return [
            {
                companyLogo: "/KTLogo.png",
                companyName: "Karma Technologies LLC",
                date: "Sep 2024 - Present",
                jobTitle: "Software Engineer",
                description: `<ul>
                      <li>Architected and maintained a multi-tenant SaaS application for Product Management using React and Spring Boot, supporting scalable deployments and cloud-native practices.</li>
                      <li>Designed a modular microservices architecture, enabling integration with partner APIs and improving system scalability and isolation of tenant data.</li>
                      <li>Implemented secure RESTful APIs with Spring Security, JWT, and OAuth2, aligning with enterprise-grade security practices for partner ecosystems.</li>
                      <li>Developed partner-friendly UI components in React to streamline onboarding, dashboard visualizations, and feature accessibility.</li>
                      <li>Utilized Oracle Database with optimized indexing and transaction management to ensure data consistency across tenants and partners.</li>
                      <li>Integrated CI/CD pipelines using GitHub Actions and Jenkins for automated deployment, reducing manual intervention and increasing release efficiency.</li>
                      <li>Collaborated cross-functionally to deliver IBM-like hybrid integration use cases using containerized deployments and OpenShift-ready components.</li>
                      <li>Actively engaged in design thinking sessions to shape partner-centric solutions and align deliverables with evolving technical requirements.</li>
                      <li>Participated in technical presentations and product walk-throughs for stakeholders, fostering trust and transparency.</li>
                      <li>Monitored and improved service availability and health using built-in metrics and performance tuning techniques.</li>
                    </ul>`

            },
            {
                companyLogo: "/infosys.jpg",
                companyName: "Infosys Limited",
                date: "Feb 2024 - Jul 2024",
                jobTitle: "Senior Systems Engineer (Software)",
                description: `<ul>
                  <li>Engineered scalable and secure backend systems using Java and Spring Boot, integrating with partner services and enterprise-grade components.</li>
                  <li>Led the transition to a microservices-based architecture, enhancing modularity and enabling reusability of business capabilities across teams.</li>
                  <li>Developed APIs that supported external integrations with partner tools and third-party platforms, aligned with API-first strategy.</li>
                  <li>Implemented OAuth2 and token-based access control for external consumption of APIs in a secure, scalable manner.</li>
                  <li>Built interactive and mobile-friendly user interfaces using React, enhancing usability for both internal users and partners.</li>
                  <li>Deployed solutions in Docker containers and worked with Kubernetes clusters, supporting elastic scaling and service discovery.</li>
                  <li>Practiced DevOps with CI/CD automation (GitHub, Jenkins) and infrastructure-as-code.</li>
                  <li>Contributed to solution design discussions, aligning technical choices with business goals and IBM-like delivery standards.</li>
                  <li>Created end-to-end monitoring and alerting pipelines for production microservices using open-source APM tools.</li>
                  <li>Mentored junior developers and collaborated with solution architects on high-impact features across partner channels.</li>
                </ul>`,
            },
            {
                companyLogo: "/infosys.jpg",
                companyName: "Infosys Limited",
                date: "Mar 2022 - Feb 2024",
                jobTitle: "Systems Engineer (Software)",
                description: `<ul>
                    <li>Learnt Java and Spring Boot basics with senior developers' guidance for backend system development.</li>
                    <li>Get introduced to React JSX and front-end development principles to create user-friendly interfaces.</li>
                    <li>Assisted in building and integrating RESTful APIs using Spring Boot, and understand API security with Spring Security, JWT, and OAuth.</li>
                    <li>Supported the design and implementation of microservices architecture, understanding its advantages in system scalability and modularity.</li>
                </ul>`,
            },
            {
                companyLogo: "/infosys.jpg",
                companyName: "Infosys Limited",
                date: "Dec 2021 - Mar 2022",
                jobTitle: "Systems Engineer Trainee (Software)",
                description: `<ul>
                    <li>Participated in comprehensive Java and Spring Boot training programs at Infosys, acquiring essential skills for backend development.</li>
                    <li>Received hands-on training in developing scalable and efficient backend systems using Java, along with Spring Boot frameworks.</li>
                    <li>Acquired practical experience in building RESTful APIs with Spring Boot, employing industry-standard practices for secure and efficient communication.</li>
                </ul>`,
            },
            {
                companyLogo: "/glowtouch.jpg",
                companyName: "Glowtouch Technologies Pvt. Ltd",
                date: "Apr 2021 - Dec 2021",
                jobTitle: "Junior Administrator L1",
                description: `<ul>
                    <li>Provided frontline technical support via chat, resolving customer queries and troubleshooting issues promptly to ensure high customer satisfaction.</li>
                    <li>Demonstrated expertise in DNS management, effectively configuring domain settings, resolving DNS-related issues, and ensuring seamless domain functionality.</li>
                    <li>Addressed hosting issues promptly, diagnosing and resolving server-related issues such as downtime, performance degradation, and resource allocation discrepancies.</li>
                    <li>Assisted customers in resolving HTTP status code errors, including 404 (Not Found) and 403 (Forbidden), by identifying and troubleshooting issues related to file paths, permissions, and access control configurations.</li>
                </ul>`,
            }
        ];
    };

    const details = boxDetails();

    const updateBoxHeight = (index) => {
        const newHeights = [...boxHeights];
        newHeights[index] = getBoxHeight(index);
        setBoxHeights(newHeights);
    };

    return (
        <div className='experience' id='experience' >
            <h1 className='text-center text-light'>Experience</h1>
            <div className='row mt-5'>
                {details.map((boxDetail, index) => (
                    <div
                        key={index}
                        className="col-lg-3 col-md-6 col-sm-12 boxes"
                        onMouseEnter={() => {
                            handleHover(index);
                            updateBoxHeight(index);
                        }}
                        onMouseLeave={() => handleHoverOut()}
                        style={{
                            height: (hoverIndex === index || (isHovering && hoverIndex === null)) ? boxHeights[index] : 'auto',
                            maxHeight: boxHeights[index],
                            overflowY: (isPhone || isTablet) && window.innerWidth >= 1024 ? 'scroll' : 'auto',
                        }}
                    >
                        <div className="box-content">
                            <div className="boxinfosys">
                                {boxDetail.companyLogo && (
                                    <img
                                        src={boxDetail.companyLogo}
                                        className="company-logo me-3"
                                        alt="Company Logo"
                                    />
                                )}
                                <div>
                                    <p className='mt-2 boxdetails'>{boxDetail.jobTitle}</p>
                                    <p className='companyName mb-0'>{boxDetail.companyName}</p>
                                    <p className='companyDate'>{boxDetail.date}</p>
                                    <div dangerouslySetInnerHTML={{ __html: boxDetail.description }} className='companyDescription' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
