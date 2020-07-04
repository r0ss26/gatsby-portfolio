import React from 'react'
import IntroCard from '../IntroCard/IntroCard';
import ViewWork from '../ViewWork/ViewWork';
import styles from './Main.module.css';

import Nav from '../Nav/Nav';

const Main = () => {
  return (
    <main>
      <IntroCard />
      <ViewWork />
      <Nav />
    </main>
  )
}

export default Main