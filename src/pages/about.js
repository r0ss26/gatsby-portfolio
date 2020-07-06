import React from "react"
import NeumorphicContainer from "../components/NeumorphicContainer/NeumorphicContainer"
import NeumorphicIcon from "../components/NeumorphicIcon/NeumorphicIcon"
import Layout from "../components/Layout/Layout"
import AboutContent from "../components/About/About.js"
import SharedNav from "../components/SharedNav/SharedNav"

const About = () => {
  return (
    <Layout>
      <SharedNav />
      <NeumorphicContainer>
        <AboutContent />
      </NeumorphicContainer>
    </Layout>
  )
}

export default About
