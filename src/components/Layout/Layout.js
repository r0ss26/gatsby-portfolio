import React from "react"
import { Helmet } from "react-helmet"

import styles from "./Layout.module.css"
import MobileNav from "../MobileNav/MobileNav"
import TopNavBar from "../TopNavBar/TopNavBar"

const Layout = ({ topNav, children }) => {
  return (
    <div className={styles.layout}>
      <Helmet>
        <title>Ross' Developer Portfolio</title>
        <meta
          name="description"
          content="View Ross Baker's software development portfolio. Ross Baker is
        a web developer utilisng JavaScript, React, Ruby on Rails, HTML5, CSS3 and other technologies."
        />
        <meta property="og:image" content={typeof window === 'object' ? window.location.host + '/featured_image.png' : "https://www.rossbaker.me/featured_image.png"} /> 
        <meta property="og:image:width" content="300" /> 
        <meta property="og:image:height" content="300" /> 
        <html lang="en" />
      </Helmet>
      {topNav && <TopNavBar />}
      {children}
      <MobileNav />
    </div>
  )
}

export default Layout
