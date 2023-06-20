import React from "react";
import BackButton from "../components/BackButton";
import JobDescription from "../components/JobDescription";
import { Container } from "react-bootstrap";
import ResumePdf from "../assets/Lloyd Dakin Resume.pdf";

function AboutPage(props) {
  return (
    <div className="about-page-div">
      <Container>
        <div>
          <h1
            style={{
              fontFamily: "lemonmilk",
              fontSize: "4em",
              marginTop: "5%",
            }}
          >
            Work Experience
          </h1>
        </div>
        <div className="work-experience-div">
          <JobDescription
            title="Avanade - Full Stack Engineer"
            tech={[
              "Java Spring",
              ".Net",
              "React",
              "Angular",
              "JavaScript",
              "C#",
              "Node.js",
              "SQL",
            ]}
            points={[
              "● Led development and testing of a car insurance mobile app, overseeing UI interface creation using Angular, API Restful layer with .Net API, and database schemas using Entity Framework and SQL. Delivering product for the client 1 month ahead of schedule.",
              "● Upskilled in Java Spring, building a React web application that empowered fellow employees to enhance their skills and contribute to company profitability. Presented the application to a monthly learning meeting reaching 100+ coworkers looking to learn React Spring Applications",
              "● Solved a client’s problem by leading the re-design and full implementation of a customer-centric account recovery feature, enabling seamless account retrieval through phone numbers. This resulted in a 40% increase in account recovery logins.",
            ]}
          />
          <JobDescription
            title="Ciena - Embedded Network Engineer "
            tech={["C", "Python", "IP protocols", "Bash", "Linux", "Docker"]}
            points={[
              "● Independently developed a pivotal feature enabling routers to seamlessly transition between protocols by implementing TCP redistribution to BGP routing using the C programming language.",
              "● Resolved 15+ software bugs in YANG models and bash scripts, improving software reliability. Provided troubleshooting instructions to support the team for efficient issue resolution.",
              "● Built and deployed virtual routers using proprietary virtual machines for thorough testing of bug fixes and new features, ensuring optimal software quality and reliability.",
            ]}
          />
          <JobDescription
            title="Amazon - Software Development Engineer Intern"
            tech={["JavaScript", "HTTP", "CSS", "AWS", "React.js", "Bootstrap"]}
            points={[
              "● Developed an internal analytics tool using React, enabling the team to view ad campaign’s metrics, thus boosting productivity.",
              "● Developed search bar tooling with React Bootstrap to retrieve data from a lambda instance connected to an RDS database, saving ~1,800+ working hours per month by replacing manual querying of SQL database",
              "● Built multiple data analysis pages with Chart.js for detailed custom search queries, allowing team members to find specific sets and look at generated statistics including top/lowest performing ads",
            ]}
          />
          <JobDescription
            title="Tech Core - Web Developer"
            tech={["Java Script", "HTML", "CSS", "SQL"]}
            points={[
              "● Developed web pages for company products that clients would view to increase product sales and interest in projects.",
              "● Created UI menus for selecting different scenarios and settings using JavaScript for a Unity VR operating room.",
              "● Debugged SQL database and removed bad data using a script that I developed and tested, which located bad data entries by checking strings with regex.",
            ]}
          />
        </div>
      </Container>
      <BackButton />
    </div>
  );
}

export default AboutPage;
