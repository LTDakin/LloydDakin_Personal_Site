import React from 'react'

import Hero from "../components/Hero"
import HeroSection from '../components/HeroSection'

import profilePicture from '../assets/images/profile.jpg'

function HomePage(props) {
    const profileTitle = "About Me"
    const profileText =
        <p>
            I am currently a Senior at the University of Arizona studying Computer Science. I chose this path because I want to learn the skills to be able to help 
            others and the world become more connected and digital. I originally was super 
            interested in Biology and thinking about becoming a doctor, but thanks to a close friend of mine they convinced me to check out some cs.
            Since then I transistioned to Bioinformatics, and then finally computer science! It’s flexibilty and impact on society are the ideas that drew me in to the subject. 
            The amount of possibilities computer science has to help others really excited me. Programming is such a wide and sometimes overwhelming field, but I think is the future of industry.
            Feel free to take a look around and see what I’ve been up to. I’m always open to collaboration and learning opputunities.
        </p>
        
    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle} subtitle2={props.subtitle2} />
            <HeroSection title={profileTitle} text={profileText} imageAlt="profile picture" image={profilePicture} />
        </div>
    )
}

export default HomePage