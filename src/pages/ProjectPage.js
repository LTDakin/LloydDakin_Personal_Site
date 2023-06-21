import React from "react";
import BackButton from "../components/BackButton";
import ProjectCard from "../components/ProjectCard";

function ProjectPage(props) {
  return (
    <div className="project-page-div">
      <h1
        style={{ fontFamily: "coolvetica", fontSize: "4em", padding: "40px" }}
      >
        Some things I've built!
      </h1>
      <div className="project-cards-div-container">
        <div className="project-cards-div">
          <ProjectCard
            cardTitle="Centroid Algorithim"
            projectDescription="A Euclidian clustering algorithim that takes in a list of tuples that represent points in a 2D space. The algorithim then proceeds to group the points using Euclidian distance and assigns centroids to each group. A centroid is the mean middle of all the points in a group"
            githubLink="https://github.com/LTDakin/ClusteringAlgorithim"
          ></ProjectCard>
          <ProjectCard
            cardTitle="Shoot-Planner"
            projectDescription="A Full Stack web application project. Designed to create a social media site for photographers that lets them create accounts, add photos, and plan shoots"
            githubLink="https://github.com/LTDakin/Shoot-Planner-Web-App"
          ></ProjectCard>
          <ProjectCard
            cardTitle="Instagrown"
            projectDescription="A social networking site for plant owners. Complete with account creation and login, profiles, posts, comments, and messages."
            githubLink="https://github.com/LTDakin/InstaGrown"
          ></ProjectCard>
          <ProjectCard
            cardTitle="IBM Watson Query Engine"
            projectDescription="This is a NLP program that parses wikipedia articles using Lucene to then be able to answer a file containing questions about historic events, places, and people. First the knowledge base is generated and then you can pass the question text file to recieve answers."
            githubLink="https://github.com/LTDakin/IBM_Watson_jeopardy_query_engine"
          ></ProjectCard>
          <ProjectCard
            cardTitle="TikTok Partnership for Shopify Apps"
            projectDescription="Currently WIP this shopify app would parse store items and then use the chatgpt api to reccomend tik tok creatives that the store owner could send automated emails with offers to do product promotions"
            githubLink="https://github.com/LTDakin/____-shopify-app"
          ></ProjectCard>
        </div>
      </div>

      <BackButton />
    </div>
  );
}

export default ProjectPage;
