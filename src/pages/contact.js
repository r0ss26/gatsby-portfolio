import React from 'react'
import Layout from '../components/Layout/Layout'

import NeumorphicContainer from '../components/NeumorphicContainer/NeumorphicContainer'
import ContactContent from '../components/ContactContent/ContactContent';

const Contact = () => {
  return (
    <Layout topNav>
      <NeumorphicContainer>
        <ContactContent />
      </NeumorphicContainer>
    </Layout>
  )
}

export default Contact
