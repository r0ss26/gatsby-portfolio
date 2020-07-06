import React from "react"

import Layout from "../components/Layout/Layout"
import NeumorphicContainer from "../components/NeumorphicContainer/NeumorphicContainer"
import Main from "../components/Main/Main"

export default function Home() {
  return (
    <Layout>
      <NeumorphicContainer>
        <Main />
      </NeumorphicContainer>
    </Layout>
  )
}
