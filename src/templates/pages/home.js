import React from "react"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import HeroBanner from "../../components/HeroBanner"
import HomePortfolio from "../../components/HomePortfolio"
import Layout from "../../components/Layout"
import SMServices from "../../components/SMServices"
import SolutionSlider from "../../components/SolutionSlider"
import Testimonials from "../../components/Testimonials"
import WebDesign from "../../components/WebDesign"

const HomePage = () => (
  <Layout>
    <HeroBanner />
    <SMServices />
    <WebDesign />
    <SolutionSlider />
    <HomePortfolio />
    <Testimonials />
    <FreeQuoteForm />
  </Layout>
)

export default HomePage
