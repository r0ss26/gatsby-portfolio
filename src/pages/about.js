import React from "react"
import NeumorphicContainer from "../components/NeumorphicContainer/NeumorphicContainer"
import Layout from "../components/Layout/Layout"
import AboutContent from "../components/AboutContent/AboutContent.js"
import TopNavBar from "../components/TopNavBar/TopNavBar"

const About = () => {
  return (
    <Layout>
      <NeumorphicContainer>
        <TopNavBar />
        <AboutContent />
      </NeumorphicContainer>
    </Layout>
  )
}

export default About
