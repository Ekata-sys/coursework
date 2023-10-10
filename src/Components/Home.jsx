import React from 'react'
import Hero from './Hero'
import TopCourseworkHelp from './TopCourseworkHelp'
import AboutCoursework from './AboutCoursework'
import NeedHelp from './NeedHelp'
import CourseworkhelpServices from './CourseworkhelpServices'
import Testemonial from './Testemonial'
import Faq from './Faq'
import Contact from './Contact'
export default function Home() {
  return (
  <>
  <Hero />
  <main id="main">
  <TopCourseworkHelp />
  <AboutCoursework />
  <NeedHelp />
  <CourseworkhelpServices />
  <Testemonial />
  <Faq />
  <Contact />
  </main>
  </>
  )
}
