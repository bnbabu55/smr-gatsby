import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "footer" }) {
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
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <footer className="w-full bg-themeBlue-200">
      <nav className="w-full bg-themeBlue-200 text-white font-Montserrat text-2xl py-4">
        <div className="w-11/12 mx-auto md:flex md:justify-evenly md:items-center md:px-4 md:py-3">
          {wpMenu?.menuItems?.nodes?.length > 0 ? (
            <div className="px-2 pb-4 pt-2 md:flex md:p-0 md:leading-4">
              {wpMenu?.menuItems?.nodes.map(menu => {
                const pathVar = menu?.path
                const anchorPosition = pathVar.indexOf("#")
                let pageAnchor = ""

                if (anchorPosition > 0 && "/" === menu?.path) {
                  pageAnchor = menu?.path + pathVar.substring(anchorPosition)
                } else {
                  pageAnchor = menu?.path
                }

                return (
                  <Link
                    key={menu?.id}
                    to={pageAnchor}
                    className="block px-5 py-1 text-white rounded font-Montserrat text-lg"
                    activeClassName="bg-themeBlue-600"
                  >
                    {menu?.label}
                  </Link>
                )
              })}
            </div>
          ) : null}
        </div>
      </nav>
      <div className="w-11/12 mx-auto">
        <hr className="text-white border-1" />
      </div>
      <div className="footer-copyright m-auto text-white flex justify-center text-xs items-center py-3 font-Montserrat text-sm">
        <div className="copyright-smr pl-11">
          Copyright © {new Date().getFullYear()}{" "}
          <Link
            to="/"
            className="font-Montserrat text-sm text-white hover:text-themeOrange-200"
          >
            Search Marketing Resource LLC -{" "}
          </Link>
          <span> All Rights Reserved</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
