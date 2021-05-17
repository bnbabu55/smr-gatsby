import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "primary" }) {
        name
        menuItems {
          nodes {
            label
            url
            id
            path
            parentId
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

  const [isMenuVisible, setMenuVisibility] = useState(false)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  const filteredMenu = wpMenu?.menuItems?.nodes.filter(
    menuItem => menuItem.parentId === null
  )

  function renderNavDropdown(dropdownMenu) {
    return (
      <div
        className={`-mx-3 pb-2 bg-themeBlue-600 border-b-4 border-l-4 border-r-4 border-themeGray-50 w-76 absolute z-10 mt-8 hidden group-hover:flex flex-col`}
      >
        {dropdownMenu.map(renderNavDropdownItem)}
      </div>
    )
  }

  function renderNavDropdownItem(subMenuItem) {
    return (
      <Link
        key={subMenuItem?.id}
        to={subMenuItem?.path}
        className="px-2 mx-2 py-1 my-1 text-white uppercase rounded font-MontserratSemiBold text-xs"
        activeClassName="bg-themeBlue-200"
      >
        {subMenuItem?.label}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full mt-0 pt-0 bg-themeBlue-600 text-white font-MontserratSemiBold border-b-4 border-themeGray-50 shadow-themeShadow">
      <div className="mx-auto md:flex md:justify-evenly md:items-center md:px-4">
        <div className="flex px-4 py-3 items-center justify-between md:p-0">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96.615 17.584"
              className="h-12 md:h-14"
              role="img"
              aria-label="Search Marketing Resource Logo"
            >
              <filter
                id="inset-shadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feComponentTransfer in="SourceAlpha">
                  <feFuncA type="table" tableValues="1 0" />
                </feComponentTransfer>
                <feGaussianBlur stdDeviation="1" />
                <feOffset dx=".5" dy=".5" result="offsetblur" />
                <feFlood floodColor="rgb(47, 47, 47)" result="color" />
                <feComposite in2="offsetblur" operator="in" />
                <feComposite in2="SourceAlpha" operator="in" />
                <feMerge>
                  <feMergeNode in="SourceGraphic" />
                  <feMergeNode />
                </feMerge>
              </filter>
              <path fill="#00497a" d="M0 0h96.615v17.584H0z" />
              <path
                d="M11.752 10.762q0 1.819-1.546 2.96-1.538 1.133-4.184 1.133-1.53 0-2.67-.265-1.133-.273-2.125-.686v-2.952h.347q.984.786 2.2 1.207 1.223.422 2.348.422.289 0 .76-.05.472-.05.77-.165.363-.149.595-.372.24-.223.24-.662 0-.405-.348-.694-.339-.298-1-.455-.695-.165-1.472-.306-.77-.149-1.447-.372-1.555-.504-2.24-1.364-.679-.868-.679-2.15 0-1.72 1.538-2.803 1.546-1.091 3.969-1.091 1.215 0 2.398.24 1.19.231 2.058.587V5.76h-.339q-.744-.596-1.827-.992-1.075-.406-2.2-.406-.396 0-.793.058-.389.05-.752.199-.323.124-.554.38-.232.248-.232.57 0 .488.372.753.372.256 1.406.471.678.14 1.298.273.628.132 1.348.364 1.414.463 2.083 1.265.678.794.678 2.067zm15.081 3.87h-3.158V6.388l-2.67 8.328h-1.933L16.92 6.388v8.244h-2.993V2.32h3.687l2.64 9.803 2.892-9.803h3.687z"
                aria-label="SMRESOURCE"
                fontWeight="700"
                fontSize="4rem"
                fontFamily="sans-serif"
                strokeWidth=".265"
                className="fill-current text-themeOrange-200"
                // fill="#ffad00"
                filter="url(#inset-shadow)"
              />
              <path
                d="M33.845 4.774q0-.308-.126-.529-.127-.22-.436-.347-.215-.088-.501-.105-.287-.022-.667-.022h-.767v2.21h.65q.508 0 .85-.049.341-.05.573-.226.22-.17.32-.375.104-.21.104-.557zm3.302 5.695h-2.585l-2.238-3.01h-.976v3.01h-2.105V2.261h3.55q.727 0 1.25.083.524.082.982.358.463.275.733.716.276.436.276 1.097 0 .91-.425 1.483-.419.573-1.201.954zm6.863 0h-5.937V2.261h5.937v1.586h-3.831v1.417h3.555v1.588h-3.555V8.88h3.83zm8.345-2.58q0 1.213-1.03 1.973-1.026.755-2.79.755-1.02 0-1.78-.176-.755-.182-1.417-.458V8.017h.232q.656.523 1.466.804.816.282 1.565.282.193 0 .508-.034.314-.033.512-.11.243-.099.397-.248.16-.149.16-.44 0-.27-.232-.464-.226-.198-.667-.303-.463-.11-.98-.204-.513-.1-.965-.248-1.037-.336-1.494-.91-.452-.578-.452-1.433 0-1.146 1.025-1.868 1.03-.728 2.646-.728.81 0 1.598.16.794.154 1.373.391v1.891h-.226q-.496-.397-1.218-.66-.717-.27-1.466-.27-.265 0-.53.037-.259.033-.501.132-.215.083-.37.254-.154.165-.154.38 0 .325.248.502.248.17.937.314l.866.182q.419.088.898.242.943.31 1.39.844.451.53.451 1.378zm9.432-1.522q0 1.963-1.125 3.12-1.124 1.152-3.109 1.152-1.979 0-3.103-1.152-1.125-1.157-1.125-3.12 0-1.978 1.125-3.125 1.124-1.152 3.103-1.152 1.974 0 3.104 1.152 1.13 1.147 1.13 3.125zm-2.806 2.08q.309-.375.457-.882.15-.513.15-1.202 0-.739-.172-1.257-.17-.518-.446-.838-.281-.33-.65-.48-.364-.148-.761-.148-.403 0-.761.143-.353.144-.65.474-.276.31-.452.855-.171.54-.171 1.256 0 .734.165 1.252.171.512.447.838.275.325.644.48.37.153.778.153.408 0 .777-.154.37-.16.645-.49zm11.608-.95q0 1.522-.926 2.332-.926.81-2.728.81-1.803 0-2.729-.81-.92-.81-.92-2.326V2.261h2.128v5.12q0 .855.358 1.274.358.42 1.163.42.794 0 1.157-.403.37-.403.37-1.29v-5.12h2.127zm6.582-2.723q0-.308-.127-.529-.127-.22-.435-.347-.215-.088-.502-.105-.287-.022-.667-.022h-.766v2.21h.65q.508 0 .85-.049.341-.05.573-.226.22-.17.32-.375.104-.21.104-.557zm3.302 5.695h-2.585L75.65 7.46h-.976v3.01h-2.106V2.261h3.55q.728 0 1.251.083.524.082.982.358.463.275.733.716.275.436.275 1.097 0 .91-.424 1.483-.42.573-1.202.954zm4.635.16q-.915 0-1.692-.27-.771-.27-1.328-.806-.557-.534-.866-1.333-.303-.8-.303-1.847 0-.976.292-1.77.293-.793.85-1.36.534-.547 1.322-.844.794-.298 1.731-.298.518 0 .932.06.418.056.771.15.37.104.667.237.303.126.53.237v1.99h-.243q-.155-.133-.392-.315-.231-.182-.529-.358-.303-.176-.656-.298-.352-.12-.755-.12-.446 0-.849.142-.402.138-.744.463-.325.315-.529.833-.198.518-.198 1.256 0 .772.215 1.29.22.518.55.816.337.303.75.436.414.126.816.126.386 0 .76-.115.381-.116.7-.315.271-.16.503-.34.231-.183.38-.316h.22v1.963q-.308.138-.59.26-.28.12-.59.21-.402.114-.754.175-.353.06-.97.06zm10.396-.16h-5.936V2.261h5.936v1.586h-3.83v1.417h3.555v1.588h-3.556V8.88h3.831z"
                fontSize="11.289"
                className="fill-current text-themeOrange-200"
                filter="url(#inset-shadow)"
                // fill="#ffad00"
              />
              <path
                d="M31.24 13.707q0 .34-.299.555-.297.212-.81.212-.295 0-.516-.05-.22-.05-.411-.128v-.554h.067q.19.148.425.227.237.079.455.079.056 0 .147-.01.091-.009.149-.03.07-.028.115-.07.046-.042.046-.124 0-.076-.067-.13-.065-.056-.193-.086-.135-.03-.285-.057-.149-.028-.28-.07-.301-.094-.434-.256-.131-.163-.131-.403 0-.322.298-.525.299-.205.768-.205.235 0 .464.045.23.043.398.11v.532h-.066q-.144-.112-.353-.186-.208-.076-.426-.076-.077 0-.153.01t-.146.038q-.062.023-.107.071-.045.047-.045.107 0 .092.072.141.072.048.272.089l.251.05q.122.026.26.069.275.087.404.237.131.149.131.388zm2.144.725h-1.723v-2.307h1.723v.446h-1.112v.399h1.032v.446h-1.032v.57h1.112zm2.716 0h-.634l-.165-.466h-.883l-.165.466h-.62l.88-2.308h.708zm-.948-.89l-.293-.827-.292.827zm2.628-.711q0-.087-.038-.149-.036-.062-.126-.098-.062-.024-.146-.03-.083-.005-.193-.005h-.223v.621h.19q.146 0 .246-.014.099-.014.166-.063.064-.048.093-.106.03-.059.03-.156zm.957 1.601h-.75l-.65-.846h-.283v.846h-.61v-2.307h1.03q.21 0 .363.023.152.023.285.1.134.078.212.202.08.123.08.309 0 .256-.123.417-.121.161-.349.268zm1.346.045q-.266 0-.491-.076-.224-.076-.386-.226-.161-.15-.25-.375t-.089-.52q0-.274.085-.497.085-.223.246-.383.155-.154.384-.237.23-.084.503-.084.15 0 .27.017.122.015.224.042.107.03.194.066.088.036.153.067v.56h-.07q-.045-.037-.114-.089-.067-.05-.153-.1-.088-.05-.19-.084-.103-.034-.22-.034-.13 0-.246.04-.117.039-.216.13-.095.089-.154.234-.058.146-.058.354 0 .217.063.363.064.145.16.23.097.084.217.122.12.035.237.035.112 0 .221-.032.11-.033.203-.089.079-.045.146-.096.067-.05.11-.088h.064v.552l-.171.073q-.082.034-.171.059-.117.032-.22.05-.102.016-.281.016zm3.43-.045H42.9v-1.017h-.907v1.017h-.615v-2.307h.615v.845h.907v-.845h.614zm3.106 0h-.612v-1.545l-.441 1.003h-.424l-.442-1.003v1.545h-.579v-2.307h.714l.536 1.158.534-1.158h.714zm2.809 0h-.635l-.165-.466h-.883l-.165.466h-.619l.88-2.308h.707zm-.949-.89l-.292-.827-.293.827zm2.627-.711q0-.087-.036-.149-.037-.062-.127-.098-.062-.024-.145-.03-.084-.005-.194-.005h-.222v.621h.188q.148 0 .247-.014t.166-.063q.064-.048.093-.106.03-.059.03-.156zm.959 1.601h-.75l-.65-.846h-.283v.846h-.612v-2.307h1.03q.212 0 .364.023t.285.1q.134.078.213.202.08.123.08.309 0 .256-.124.417-.121.161-.348.268zm2.492 0h-.753l-.712-.924-.144.17v.754h-.614v-2.307h.614v1.045l.851-1.045h.712l-.931 1.068zm2.026 0H54.86v-2.307h1.723v.446H55.47v.399h1.032v.446H55.47v.57h1.112zm2.379-1.862h-.744v1.862h-.614V12.57h-.744v-.445h2.102zm1.658 1.862h-1.396v-.409h.39v-1.49h-.39v-.41h1.395v.41h-.39v1.49h.39zm2.666 0h-.591l-1.012-1.584v1.584h-.563v-2.307h.735l.868 1.322v-1.322h.563zm2.716-.132q-.16.06-.424.121-.264.06-.527.06-.608 0-.952-.32t-.344-.885q0-.538.347-.867.348-.33.968-.33.236 0 .448.042.213.04.474.163v.54h-.069l-.131-.09q-.086-.061-.166-.103-.093-.05-.218-.085-.123-.036-.262-.036-.164 0-.296.046-.133.047-.239.143-.1.093-.16.237-.057.143-.057.33 0 .383.21.586.209.204.618.204l.077-.002.079-.005v-.452h-.476v-.436h1.1zm1.886-1.469q0-.087-.037-.149t-.126-.098q-.063-.024-.146-.03-.083-.005-.194-.005h-.222v.621h.189q.147 0 .246-.014.1-.014.167-.063.064-.048.092-.106.03-.059.03-.156zm.958 1.601h-.75l-.65-.846h-.283v.846h-.611v-2.307h1.03q.211 0 .363.023t.285.1q.135.078.213.202.08.123.08.309 0 .256-.123.417-.122.161-.349.268zm1.992 0h-1.723v-2.307h1.723v.446h-1.112v.399h1.032v.446h-1.032v.57h1.112zm2.422-.725q0 .34-.299.555-.297.212-.81.212-.295 0-.516-.05-.22-.05-.411-.128v-.554h.067q.19.148.425.227.237.079.455.079.056 0 .147-.01.091-.009.149-.03.07-.028.115-.07.046-.042.046-.124 0-.076-.067-.13-.065-.056-.193-.086-.135-.03-.285-.057-.149-.028-.28-.07-.301-.094-.434-.256-.131-.163-.131-.403 0-.322.298-.525.299-.205.768-.205.235 0 .464.045.23.043.398.11v.532H73.1q-.144-.112-.353-.186-.208-.076-.426-.076-.077 0-.153.01t-.146.038q-.062.023-.107.071-.045.047-.045.107 0 .092.072.141.072.048.272.089l.251.05q.122.026.26.069.275.087.404.237.131.149.131.388zm2.738-.428q0 .552-.327.877-.326.324-.902.324-.574 0-.9-.324-.327-.325-.327-.877 0-.557.326-.88.327-.323.901-.323.573 0 .9.324.329.322.329.879zm-.815.584q.09-.105.133-.248.043-.144.043-.338 0-.207-.05-.353-.049-.146-.129-.236-.081-.093-.189-.135-.105-.042-.22-.042-.117 0-.221.04-.103.041-.189.134-.08.087-.131.24-.05.152-.05.354 0 .206.048.352.05.144.13.235.08.092.187.135.107.044.226.044.118 0 .225-.044.107-.045.187-.138zm3.37-.266q0 .428-.269.655-.269.228-.792.228t-.792-.228q-.267-.227-.267-.654v-1.473h.617v1.44q0 .24.104.358t.338.118q.23 0 .336-.113.107-.113.107-.363v-1.44h.618zm1.91-.766q0-.087-.037-.149t-.126-.098q-.062-.024-.146-.03-.083-.005-.193-.005h-.223v.621h.19q.146 0 .246-.014.099-.014.166-.063.064-.048.093-.106.03-.059.03-.156zm.958 1.601h-.75l-.65-.846h-.283v.846h-.61v-2.307h1.03q.21 0 .363.023.152.023.284.1.135.078.213.202.08.123.08.309 0 .256-.123.417-.122.161-.349.268zm1.346.045q-.266 0-.491-.076-.224-.076-.386-.226-.161-.15-.251-.375-.088-.225-.088-.52 0-.274.085-.497.085-.223.246-.383.155-.154.384-.237.23-.084.503-.084.15 0 .27.017.122.015.224.042.107.03.194.066.088.036.153.067v.56h-.07q-.045-.037-.114-.089-.067-.05-.153-.1-.088-.05-.19-.084-.103-.034-.22-.034-.13 0-.246.04-.117.039-.216.13-.095.089-.154.234-.058.146-.058.354 0 .217.063.363.064.145.16.23.097.084.217.122.12.035.237.035.112 0 .22-.032.111-.033.204-.089.079-.045.146-.096.067-.05.11-.088h.064v.552l-.171.073q-.082.034-.171.059-.117.032-.22.05-.102.016-.281.016zm3.017-.045h-1.723v-2.307h1.723v.446h-1.112v.399h1.032v.446h-1.032v.57h1.112zm1.103 0h-.599v-.609h.599zm1.673.045q-.265 0-.49-.076-.225-.076-.387-.226-.161-.15-.25-.375t-.089-.52q0-.274.085-.497.085-.223.246-.383.156-.154.384-.237.23-.084.503-.084.15 0 .27.017.122.015.224.042.107.03.194.066.088.036.153.067v.56h-.07q-.045-.037-.114-.089-.067-.05-.153-.1-.088-.05-.19-.084-.103-.034-.22-.034-.13 0-.246.04-.117.039-.216.13-.095.089-.154.234-.057.146-.057.354 0 .217.062.363.064.145.16.23.098.084.218.122.12.035.236.035.112 0 .221-.032.11-.033.203-.089.079-.045.146-.096.067-.05.11-.088h.064v.552l-.17.073q-.082.034-.172.059-.117.032-.22.05-.102.016-.28.016zm3.611-1.198q0 .552-.326.877-.327.324-.903.324-.574 0-.9-.324-.327-.325-.327-.877 0-.557.327-.88.326-.323.9-.323.573 0 .901.324.328.322.328.879zm-.814.584q.09-.105.133-.248.043-.144.043-.338 0-.207-.05-.353t-.13-.236q-.08-.093-.188-.135-.106-.042-.22-.042-.118 0-.222.04-.102.041-.188.134-.08.087-.132.24-.05.152-.05.354 0 .206.049.352.05.144.13.235.08.092.187.135.107.044.225.044.118 0 .226-.044.107-.045.187-.138zm3.78.569h-.61v-1.545l-.442 1.003h-.424l-.442-1.003v1.545h-.579v-2.307h.714l.536 1.158.534-1.158h.713z"
                aria-label="SEARCHMARKETINGRESOURCE.COM"
                fontWeight="700"
                fontSize="3.175"
                fontFamily="sans-serif"
                strokeWidth=".265"
                fill="#fff"
              />
            </svg>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setMenuVisibility(!isMenuVisible)}
              className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
              aria-label="mobile menu button"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Hamburger Menu Icon"
              >
                <path
                  className={isMenuVisible ? "block" : "hidden"}
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />

                <path
                  className={isMenuVisible ? "hidden" : "block"}
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        {filteredMenu?.length > 0 ? (
          <ul
            className={`px-2 pb-2 ${
              isMenuVisible ? "block" : "hidden"
            } md:flex md:p-0 md:leading-4`}
          >
            {filteredMenu?.map((menuItem, i) => {
              const pathVar = menuItem?.path
              const anchorPosition = pathVar.indexOf("#")
              let pageAnchor = ""

              if (anchorPosition > 0 && "/" === menuItem?.path) {
                pageAnchor = menuItem?.path + pathVar.substring(anchorPosition)
              } else {
                pageAnchor = menuItem?.path
              }

              return (
                <li
                  key={menuItem?.id}
                  className={`py-8 ${
                    menuItem.childItems.nodes.length > 0 ? "group realtive" : ""
                  }`}
                >
                  <Link
                    to={pageAnchor}
                    className={`px-2 py-1 text-white uppercase font-MontserratSemiBold text-xs tracking-wide rounded 
`}
                    activeClassName="bg-themeBlue-200"
                    partiallyActive={menuItem?.label === "News" ? true : false}
                  >
                    {menuItem?.label}
                  </Link>
                  {menuItem.childItems.nodes.length > 0
                    ? renderNavDropdown(menuItem?.childItems?.nodes)
                    : ""}
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
      <Link
        to="/search-marketing-website-design-proposal-form"
        className="overflow-hidden z-10 absolute top-18 right-12 hidden lg:block"
      >
        <StaticImage
          src="../../static/images/smr-proposal-icon.png"
          alt="Freequote button"
        />
      </Link>
    </header>
  )
}

export default Header
