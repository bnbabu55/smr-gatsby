import React from "react"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import HeroBanner from "../../components/HeroBanner"
import HomeNews from "../../components/HomeNews"
import HomePortfolio from "../../components/HomePortfolio"
import Layout from "../../components/Layout"
import SMServices from "../../components/SMServices"
import SolutionSlider from "../../components/SolutionSlider"
import TeamSlider from "../../components/TeamSlider"
import Testimonials from "../../components/Testimonials"
import WebDesign from "../../components/WebDesign"

const HomePage = () => (
  <Layout>
    <HeroBanner />
    <SMServices />
    <WebDesign />
    <SolutionSlider />
    <HomePortfolio />
    <FreeAuditForm />
    <Testimonials />
    <FreeQuoteForm />
    <TeamSlider />
    <HomeNews />
  </Layout>
)

export default HomePage
