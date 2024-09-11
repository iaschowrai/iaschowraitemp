import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Hello and welcome to my blog! I’m Irshad A. Schowrai, a Full Stack Java Developer based in Worcester, MA, with over 7 years of experience in the ever-evolving world of technology. My professional journey has been driven by a passion for creating impactful software solutions and tackling complex challenges.

My expertise spans across backend and frontend development, with a strong focus on Java, Spring, and microservices architecture. Currently, I’m working at Wavesoft Solutions Inc, where I handle large-scale file processing systems and enhance fault tolerance using Resilience4j. My role involves not only managing data integrity and optimizing performance but also ensuring that our solutions are scalable and reliable.

Before this, I honed my skills at Ernst & Young and JK Technosoft, where I developed custom analytics dashboards with React and Redux, improved data processing pipelines with Kafka and Spring Batch, and led efforts to increase system efficiency and reduce bugs. My experience has taught me the importance of blending technical proficiency with a strategic mindset, especially when it comes to real-time data processing and performance optimization.

I hold a Master’s in Computer Science from Clark University, where I delved into advanced topics such as algorithms, software engineering, and data analytics. Alongside my formal education, I’m certified in Confluent Kafka and Oracle Java, which underscores my commitment to staying current with industry advancements.

Through this blog, I aim to share my insights, experiences, and tips from the world of software development. Whether you’re a fellow developer, a tech enthusiast, or just curious about the latest trends, I hope you find valuable information here. Feel free to connect with me on LinkedIn and explore my projects on GitHub. Thanks for stopping by, and I look forward to engaging with you!`;
// I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 7+ years of hands-on experience, I have honed my skills in front-end technologies like React, Vite.js and framer motion, as well as back-end technologies like Java, Spring Boot, Spring Cloud, Event-Driven Architecture, Docker, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
// export const ABOUT_TEXT = I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.;

export const EXPERIENCES = [
  {
    year: "Mar/2024 - Present",
    role: "Software Engineer",
    company: "Wavesoft Solutions Inc.",
    description: `Developed a REST API to manage 100,000+ insurance files with UUIDs and MongoDB, ensuring data integrity via cascading deletions. Optimized fault tolerance with a custom RestClient and Resilience4j, reducing memory usage by 40% using ConcurrentHashMap and Redis caching.`, 
    //Worked closely with stakeholders to define project requirements and deliver full-stack solutions within tight deadlines. Developed user-friendly frontend components using React.js, improving UI performance and enhancing client engagement. Collaborated with cross-functional teams, implementing responsive designs and integrating RESTful APIs with 
    //MongoDB backends. Architected and developed multi-threaded Spring Boot solutions for handling high-volume insurance data, optimizing storage and retrieval in AWS S3 and RDS MySQL. Spearheaded automation of real-time data processing using AWS Lambda and EventBridge, improving system efficiency by 30% and handling over 5000 daily events. Led integration of WireMock for vendor API testing, reducing bugs by 15% and enhancing testing reliability.`,
    technologies: ["React.js", "Tailwind", "JavaScript", "Java", "Spring Boot", "MongoDB", "AWS", "AWS Lambda", "S3", "WireMock", "MySQL", "RESTful APIs"]
  },
  {
    year: "May/2021 - Dec/2021",
    role: "Senior Consultant",
    company: "Ernst & Young LLP",
    description: `Performed root cause analysis improving user experience by 10%. Developed a React-Redux dashboard with GraphQL for 50% faster data retrieval, optimized a Kafka-Spring Batch pipeline, and achieved 90% test coverage using WireMock.`,
    technologies: ["React.js", "Java", "Spring Boot", "PostgreSQL", "Apache Kafka", "Avro", "Schema Registry", "Java Date and Time API", "Batch Processing", "Parallel Streaming"]
  },
  {
    year: "Sep/2020 - May/2021",
    role: "Senior Developer",
    company: "JK Technosoft Ltd",
    description: `Collaborated on integrating RESTful APIs into a React application, boosting performance by 20%. Implemented Spring Batch for optimized data processing and reduced SQL query execution time from 45 minutes to 2 minutes.`,
    technologies: ["React.js", "Java", "Spring Boot", "Azure SQLDB", "Spring Batch", "Java Beans", "Data Visualization", "Pagination", "Filtering", "Sorting"]

  },
  {
    year: "June/2014 - Dec/2019",
    role: "Operation Analyst",
    company: "Victory Packaging Industry",
    description: `Implemented financial transaction tracking in a material management system, improving data accuracy. Optimized Java performance by fine-tuning garbage collection, achieving 30% improvement, and attained 95% test coverage, reducing bugs by 15%.`,
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
    title: "File Server REST API",
    link: "https://github.com/iaschowrai/FileServerWithCaching",
    image: project2,
    description:
      "The File Server REST API is a Java-based Spring Boot application that provides endpoints for uploading, downloading, and deleting files. It serves as a simple file storage and retrieval system with caching capabilities for improved performance.",
    technologies: ["Java","Spring Boot","Spring MVC", "Spring Data JPA", "Postman"],
  },
  {
    title: "Hotel Booking Management System",
    link: "https://github.com/iaschowrai/HotelBooking",
    image: project3,
    description:
              "This is a hotel management booking system built using Spring Boot, Spring Security, JWT Authentication, and MySQL. The system allows users to manage hotel bookings, view available rooms, and make reservations, while providing secure authentication and authorization mechanisms.",
    technologies: ["Spring Boot" , "Spring Security", "JWT (JSON Web Tokens)", "MySQL", "JPA/Hibernate", "JWT Authentication"],
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/iaschowrai/iaschowrai",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Vite", "Bootstrap", "Tailwind", "Javascript"],
  },
  
];

export const CONTACT = {
  address: "44 Maywood Street, Apt -2, Worcester, Massachusetts, United States 01603. ",
  phoneNo: "+1 774 696 9620",
  email: "irshad_ahmeds@yahoo.com",
};