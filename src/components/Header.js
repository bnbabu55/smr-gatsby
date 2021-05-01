import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { useState } from "react"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

const Header = () => {
  const { wpMenu, logo } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary" }) {
        name
        menuItems {
          nodes {
            label
            url
            id
            path
            childItems {
              nodes {
                label
                url
                id
                path
              }
            }
          }
        }
      }
      logo: allFile(
        filter: {
          sourceInstanceName: { eq: "assets" }
          name: { eq: "search-marketing-resource-logo" }
        }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 250
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  const [isMenuVisible, setMenuVisibility] = useState(false)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  function renderNavDropdown(dropdownMenu) {
    return (
      <ul
        className={`py-2 flex-col bg-gray-600 rounded-lg shadow-xl w-80 absolute z-10 hidden group-hover:block`}
      >
        {dropdownMenu.map(renderNavDropdownItem)}
      </ul>
    )
  }

  function renderNavDropdownItem(subMenuItem) {
    return (
      <li key={subMenuItem?.id}>
        <Link
          to={subMenuItem?.path}
          className="block px-4 py-2 text-white font-semibold hover:bg-gray-500 rounded"
        >
          {subMenuItem?.label}
        </Link>
      </li>
    )
  }

  return (
    <header className="z-10">
      <div className="border-b-4 border-themeGray-50 shadow-themeShadow">
        <nav className="w-full z-100 mt-0 top-0 pt-0 bg-themeBlue-100 text-white font-MontserratSemiBold">
          <div className="mx-auto md:flex md:justify-evenly md:items-center md:px-4 md:py-3">
            <div className="flex px-4 py-3 items-center justify-between md:p-0">
              <Link to="/">
                <GatsbyImage
                  image={logo.nodes[0].childImageSharp.gatsbyImageData}
                  alt="SMR Logo"
                />
              </Link>
              <div className="md:hidden">
                <button
                  onClick={() => setMenuVisibility(!isMenuVisible)}
                  className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
                  aria-label="main menu"
                >
                  <svg
                    className="fill-current h-6 w-6"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            </div>
            {wpMenu.menuItems.nodes?.length > 0 ? (
              <ul
                className={`px-2 pb-4 pt-2 ${
                  isMenuVisible ? "block" : "hidden"
                } md:flex md:p-0 md:divide-x md:divide-white md:leading-4`}
              >
                {wpMenu.menuItems.nodes.map((menuItem, i) => {
                  const pathVar = menuItem?.path
                  const anchorPosition = pathVar.indexOf("#")
                  let pageAnchor = ""

                  if (anchorPosition > 0 && "/" === menuItem?.path) {
                    pageAnchor =
                      menuItem?.path + pathVar.substring(anchorPosition)
                  } else {
                    pageAnchor = menuItem?.path
                  }

                  return (
                    <li
                      key={menuItem?.id}
                      className={
                        menuItem.childItems.nodes.length > 0
                          ? "relative group"
                          : null
                      }
                    >
                      <Link
                        to={pageAnchor}
                        className="block px-2 py-1 text-white hover:bg-themeGreen hover:text-themeOrange uppercase active:text-themeOrange focus:text-themeOrange rounded font-MontserratSemiBold text-xs"
                      >
                        {menuItem?.label}
                      </Link>
                      {menuItem.childItems.nodes.length > 0
                        ? renderNavDropdown(menuItem?.childItems?.nodes)
                        : null}
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </div>
        </nav>
      </div>
      <figure className="overflow-hidden z-10 absolute top-18 right-12 hidden lg:block">
        <StaticImage
          src="../../static/images/smr-proposal-icon.png"
          alt="Freequote button"
        />
      </figure>
    </header>
  )
}

export default Header
