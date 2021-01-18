import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle}></Hero>
            <Content>
                <p>
                    Hi I'm Lloyd Dakin a eager and adaptable new graduate with a BS in Computer Science at University of Arizona. I'm aiming to use
                    my knowledge of coding, statistics and scientific background to satisfy the Internship at your company.
                </p>
                <p>
                    Previously was a Bioinformatics major before deciding to focus solely on Computer Science, but still
                    have a strong Biology and Chemistry background, as well as a Certificate in Medicine. Ready to learn
                    new languages like GO, R, and SQL.
                </p>
                <p>
                    I have experience building <a href="https://github.com/LTDakin/project-react-site" target="_blank" rel="noopener noreferrer"> fullstack websites</a> using react and angular. 
                    I have also done some neat projects including a <a href="https://github.com/LTDakin/IBM_Watson_jeopardy_query_engine" target="_blank" rel="noopener noreferrer"> Jeopardy answering engine </a> 
                    using a Lucene IR library in Java.
                </p>
                <p>
                    As of now I want to work for an innovative company that could
                    challenge me and give me feedback on my code. I am especially interested in big data, robotics, and
                    entertainment.
                </p>

            </Content>
        </div>
    )
}

export default AboutPage