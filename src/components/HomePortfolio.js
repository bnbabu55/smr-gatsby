import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const HomePortfolio = () => {
  const { portfolioImages, csbgImage } = useStaticQuery(graphql`
    query {
      portfolioImages: allFile(
        filter: {
          name: { regex: "/icon/" }
          relativeDirectory: { eq: "home-portfolios" }
        }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 275
              placeholder: BLURRED
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      csbgImage: allFile(
        filter: {
          name: { regex: "/case-bg/" }
          relativeDirectory: { eq: "home-portfolios" }
        }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 1920
              placeholder: BLURRED
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  const pluginImage = getImage(
    csbgImage.nodes[0].childImageSharp.gatsbyImageData
  )

  const image = convertToBgImage(pluginImage)

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...image}
      preserveStackingContext
      id="HomePortfolio"
      className="py-10 mx-auto"
    >
      <div className="w-11/12 mx-auto text-white">
        <div className="w-full">
          <div className="flex justify-center items-center text-center py-10">
            <h2>
              <Link
                to={`/search-marketing-and-website-design-portfolio.php`}
                className="font-MontserratSemiBold text-themeOrange text-2xl"
              >
                Website Design Services <br className="lg:hidden" />
                <span className="font-BebasNeue text-white text-5xl px-8 hover:underline">
                  Portfolio
                </span>
                <br className="lg:hidden" />
                <span>Search Marketing Programs</span>
              </Link>
            </h2>
          </div>
          <p className="font-Lato text-lg text-center">
            The Search Marketing Resource team has provided website graphic
            design services and online marketing solutions for thousands of
            businesses nationwide, and in every major vertical market including
            business-to-business, industrial, consumer based and retail based
            companies.
          </p>
          <div className="grid grid-cols-2 grid-rows-5 lg:grid-cols-4 lg:grid-rows-3 gap-5 divide-x divide-white pt-10">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2">
              <Link to={`/search-marketing-and-website-design-portfolio.php`}>
                <GatsbyImage
                  alt={portfolioImages.nodes[0].name}
                  image={
                    portfolioImages.nodes[0].childImageSharp.gatsbyImageData
                  }
                />
              </Link>
            </div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-2">
              <Link to={`/search-marketing-and-website-design-portfolio.php`}>
                <GatsbyImage
                  alt={portfolioImages.nodes[1].name}
                  image={
                    portfolioImages.nodes[1].childImageSharp.gatsbyImageData
                  }
                />
              </Link>
            </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2">
              <Link to={`/search-marketing-and-website-design-portfolio.php`}>
                <GatsbyImage
                  alt={portfolioImages.nodes[2].name}
                  image={
                    portfolioImages.nodes[2].childImageSharp.gatsbyImageData
                  }
                />
              </Link>
            </div>
            <div className="col-start-2 col-end-3 row-start-2 row-end-3 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2">
              <Link to={`/search-marketing-and-website-design-portfolio.php`}>
                <GatsbyImage
                  alt={portfolioImages.nodes[3].name}
                  image={
                    portfolioImages.nodes[3].childImageSharp.gatsbyImageData
                  }
                />
              </Link>
            </div>
            <hr className="col-start-1 col-end-3 row-start-3 row-end-4 lg:col-end-5 lg:row-start-2 lg:row-end-3 border-b border-white self-center" />
            <div className="col-start-1 col-end-2 row-start-4 row-end-5 lg:row-start-3 lg:row-end-4">
              <Link to={`/search-marketing-and-website-design-portfolio.php`}>
                <GatsbyImage
                  alt={portfolioImages.nodes[4].name}
                  image={
                    portfolioImages.nodes[4].childImageSharp.gatsbyImageData
                  }
                />
              </Link>
            </div>
            <div className="col-start-2 col-end-3 row-start-4 row-end-5 lg:row-start-3 lg:row-end-4">
              <Link to={`/search-marketing-and-website-design-portfolio.php`}>
                <GatsbyImage
                  alt={portfolioImages.nodes[5].name}
                  image={
                    portfolioImages.nodes[5].childImageSharp.gatsbyImageData
                  }
                />
              </Link>
            </div>
            <div className="col-start-1 col-end-2 row-start-5 row-end-6 lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4">
              <Link to={`/search-marketing-and-website-design-portfolio.php`}>
                <GatsbyImage
                  alt={portfolioImages.nodes[6].name}
                  image={
                    portfolioImages.nodes[6].childImageSharp.gatsbyImageData
                  }
                />
              </Link>
            </div>
            <div className="col-start-2 col-end-3 row-start-5 row-end-6 lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4">
              <Link to={`/search-marketing-and-website-design-portfolio.php`}>
                <GatsbyImage
                  alt={portfolioImages.nodes[7].name}
                  image={
                    portfolioImages.nodes[7].childImageSharp.gatsbyImageData
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default HomePortfolio
