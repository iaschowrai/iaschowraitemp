import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 7+ years of hands-on experience, I have honed my skills in front-end technologies like React, Vite.js and framer motion, as well as back-end technologies like Java, Spring Boot, Spring Cloud, Event-Driven Architecture, Docker, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Mar/2024 - Present",
    role: "Software Engineer",
    company: "Wavesoft Solutions Inc.",
    description: `Worked closely with stakeholders to define project requirements and deliver full-stack solutions within tight deadlines. Developed user-friendly frontend components using React.js, improving UI performance and enhancing client engagement. Collaborated with cross-functional teams, implementing responsive designs and integrating RESTful APIs with 
    MongoDB backends. Architected and developed multi-threaded Spring Boot solutions for handling high-volume insurance data, optimizing storage and retrieval in AWS S3 and RDS MySQL. Spearheaded automation of real-time data processing using AWS Lambda and EventBridge, improving system efficiency by 30% and handling over 5000 daily events. Led integration of WireMock for vendor API testing, reducing bugs by 15% and enhancing testing reliability.`,
    technologies: ["React.js", "Tailwind", "JavaScript", "Java", "Spring Boot", "MongoDB", "AWS", "AWS Lambda", "S3", "WireMock", "MySQL", "RESTful APIs"]
  },
  {
    year: "May/2021 - Dec/2021",
    role: "Senior Consultant",
    company: "Ernst & Young LLP",
    description: `Developed a full-stack web application using React.js, Spring Boot, and PostgreSQL to streamline shipping record processing, leveraging the Java Date and Time API. Optimized backend performance to process millions of financial records under 3 minutes by implementing efficient queries, batch processing, parallel streams, and distributed software techniques. Integrated a robust data streaming solution using Apache Kafka with Avro for data serialization and Schema Registry for schema management, ensuring reliable data transmission. Collaborated with cross-functional teams for root cause analysis and deployed solutions that improved client and user experience by 10%.`,
    technologies: ["React.js", "Java", "Spring Boot", "PostgreSQL", "Apache Kafka", "Avro", "Schema Registry", "Java Date and Time API", "Batch Processing", "Parallel Streaming"]
  },
  {
    year: "Sep/2020 - May/2021",
    role: "Senior Developer",
    company: "JK Technosoft Ltd",
    description: `Led the development of a React-based web application with data visualization capabilities, including interactive filtering, pagination, and sorting to facilitate large dataset analysis, improving user experience and data accessibility. 
                  Enhanced data processing efficiency in Azure SQLDB by optimizing stored procedures and integrating Spring Batch, leading to a 50% reduction in response times for high-volume data processing tasks. 
                  Developed real-time statistical analysis features and implemented complex business logic using Java Bean components, driving cost-effective financial data solutions and boosting the performance of time series analysis systems.`,
    technologies: ["React.js", "Java", "Spring Boot", "Azure SQLDB", "Spring Batch", "Java Beans", "Data Visualization", "Pagination", "Filtering", "Sorting"]

  },
  {
    year: "June/2014 - Dec/2019",
    role: "Operation Analyst",
    company: "Victory Packaging Industry",
    description: `Engineered and fine-tuned REST APIs in a Java/J2EE environment to handle high-volume data retrieval, achieving a 5-fold reduction in data retrieval time through sophisticated SQL query optimization and database sharding on MSSQL RDS. Designed and implemented an automated solution for data extraction, processing, and batch insertion into an SQL database, resulting in a weekly savings of 50 hours previously dedicated to manual data handling. Improved database queries to decrease server load by nearly 15%, significantly enhancing overall application performance. Performed ongoing performance monitoring and optimization, boosting application stability and reliability, which led to a 30% increase in customer satisfaction.`,
    technologies: ["REST APIs", "Java","SQL", "MSSQL RDS", "Database Sharding", "Automated Data Processing", "Batch Insertion", "Performance Monitoring", "SQL Query Optimization"]
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    link: "https://github.com/iaschowrai/Ecommerce-Project",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "Spring MVC", "Microservice", "Oauth2", "Spring Security","RestCLient", "Kafka", "MySQL", "MongoDB", "Flyways", 'Docker', "Git"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "44 Maywood Street, Apt -2, Worcester, Massachusetts, United States 01603. ",
  phoneNo: "+1 774 696 9620",
  email: "irshad_ahmeds@yahoo.com",
};