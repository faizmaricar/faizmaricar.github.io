import React from "react"

import { Header } from '../components';
import {
  SplashSection,
  AboutSection,
  PortfolioSection,
  ContactsSection,
} from "../sections"

const IndexPage = () => (
  <>
    <Header />
    <SplashSection />
    <AboutSection />
    <PortfolioSection />
    <ContactsSection />
  </>
)

export default IndexPage
