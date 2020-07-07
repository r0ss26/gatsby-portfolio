import React from "react"

import Layout from "../components/Layout/Layout"
import NeumorphicContainer from "../components/NeumorphicContainer/NeumorphicContainer"
import HomeContent from "../components/HomeContent/HomeContent"

export default function Home() {
  return (
    <Layout>
      <NeumorphicContainer>
        <HomeContent />
      </NeumorphicContainer>
    </Layout>
  )
}
