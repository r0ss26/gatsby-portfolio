import React from "react"
import IntroCard from "../IntroCard/IntroCard"
import ViewWork from "../ViewWork/ViewWork"
import styles from "./HomeContent.module.css"

import Nav from "../Nav/Nav"
import SocialIcons from '../SocialIcons/SocialIcons'



const HomeContent = () => {
  return (
    <main className={styles.container}>
      <IntroCard />
      <ViewWork>
        <SocialIcons />
      </ViewWork>
      <Nav />
    </main>
  )
}

export default HomeContent
