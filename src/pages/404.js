import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import animGIF from "../../static/images/404-image.gif"

function Error404() {
  return (
    <>
      <Header />
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font text-5xl md:text-9xl mb-4 font-bold text-gray-700">
                Oops!
              </h1>
              <p className="text-4xl mt-5">
                We can't seem to find the page you're looking for.
              </p>
              <p className="font-bold text-base my-5">Error code: 404</p>
              <div className="flex justify-center">
                <Link
                  to="/"
                  className="inline-flex text-white bg-themeBlue-600 border-0 py-2 px-6 focus:outline-none hover:bg-themeCyanDark rounded text-lg"
                >
                  Back to Home
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <figure className="overflow-hidden z-10 absolute bottom-24 right-18">
                <img src={animGIF} alt="404 animated" width="250" />
              </figure>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Error404
