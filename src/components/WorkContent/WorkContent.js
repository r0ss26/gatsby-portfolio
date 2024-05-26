import React from "react"
import styles from "./WorkContent.module.css"
import ProjectCard from "../ProjectCard/ProjectCard"

import codeFlowImg from "../../assets/projects/img/codeflow.png"
import portfolioImg from "../../assets/projects/img/portfolio.png"
import numberOfTheDayImg from "../../assets/projects/img/nod.png"
import bookReviewImg from "../../assets/projects/img/books.png"
import expenselyImage from '../../assets/projects/img/expensely.png'

const WorkContent = () => {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Software Projects</h2>
      <ProjectCard
        title="Expensely"
        description="Expensely provides a straight forward and intuitive
        interface for tracking expenses to help our users stay under budget
        and reach their savings goals.
        "
        imgSrc={expenselyImage}
        codeSrc="https://github.com/r0ss26/expensely-frontend/"
        demoSrc="https://www.expensely.tech/"
        tags="Express, MongoDB, React, Netlify"
      />
      <ProjectCard
        title="CodeFlow"
        description="Full-stack Ruby On Rails Web Application to
        solve the problem of connecting coding students with
        teachers online. Listings are the core component of the app
        which allows users to post their services for other users to browse.
        "
        imgSrc={codeFlowImg}
        codeSrc="https://github.com/r0ss26/code-flow"
        demoSrc="https://codeflow-marketplace.herokuapp.com/"
        tags="Ruby on Rails, Bulma, PostgreSQL, Heroku"
      />
      <ProjectCard
        title="Portfolio"
        description="My software development portfolio site and blog. Built with custom
        React components, utilising the Gatsby framework."
        imgSrc={portfolioImg}
        codeSrc="https://github.com/r0ss26/gatsby-portfolio"
        demoSrc="https://r0ss26.github.io/"
        tags="React, Gatsby, JavaScript, Netlify"
      />
      <ProjectCard
        title="Book Reviews"
        description="Search, rate and review books. Incorporates the GoodReads API to display
        ratings from a wider audience. An API allows users to query for statistics."
        codeSrc="https://github.com/r0ss26/BookReviews"
        demoSrc="https://bookrvw.herokuapp.com/"
        imgSrc={bookReviewImg}
        tags="Python, Flask, API, Heroku"
      />
    </main>
  )
}

export default WorkContent
