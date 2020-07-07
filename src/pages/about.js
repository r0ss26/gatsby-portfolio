import React from "react"
import NeumorphicContainer from "../components/NeumorphicContainer/NeumorphicContainer"
import Layout from "../components/Layout/Layout"
import AboutContent from "../components/AboutContent/AboutContent.js"

const About = () => {
  return (
    <Layout topNav>
      <NeumorphicContainer>
        <AboutContent />
      </NeumorphicContainer>
    </Layout>
  )
}

export default About
