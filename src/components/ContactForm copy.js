import React from "react"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa"

const ContactForm = () => {
  return (
    <section id="contact" className="bg-themeGreen text-white py-10 mx-auto">
      <div className="container mx-auto flex flex-col justify-evenly w-5/6">
        <h2 className="mx-auto font-BebasNeue text-themeOrange text-7xl">
          CONTACT US
        </h2>
        <h3 className="mx-auto font-Montserrat text-themeBlue-text text-2xl py-5">
          WEBSITE SEO, DESIGN AND DEVELOPMENT COMPANY
        </h3>

        <p className="mx-auto text-center w-3/5 leading-7 font-Lato text-lg text-themeGray-200 pb-5">
          Contact the Search Marketing Resource team to discuss your online
          marketing needs or website development requirements. We will provide a
          detailed proposal or schedule a brief call to help define the project
          deliverables, timeline and budget.
        </p>
        <div className="contact-content flex flex-col md:flex-row mx-auto bg-white my-5">
          <div className="contact-wrapper flex-1 mx-auto border border-black">
            <form className="text-black contact-form flex flex-col justify-center align-center m-10 font-Lato text-base">
              <div className="font-Montserrat text-xs text-themeOrange">
                Required *
              </div>
              <ul className="flex w-full mb-3">
                <input
                  className="flex-1 border border-black p-2 mr-2"
                  type="tel"
                  placeholder="Company"
                  name="company"
                  id="company"
                />
                <input
                  className="flex-1 border border-black p-2"
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
              </ul>
              <ul className="flex w-full mb-3">
                <input
                  className="flex-1 border border-black mr-2 p-2"
                  type="text"
                  placeholder="First"
                  name="firstname"
                  id="firstname"
                />
                <input
                  className="flex-1 border border-black p-2"
                  type="text"
                  placeholder="Last"
                  name="lastname"
                  id="lastname"
                />
              </ul>
              <textarea
                className="flex-1 border border-black p-2"
                type="textarea"
                placeholder="Message"
                rows="6"
                cols="50"
                name="message"
                id="message"
              />
              <button className="text-white uppercase bg-themeOrange font-MontserratSemiBold px-8 py-2 tracking-wider text-base shadow-2xl mt-5 self-end">
                Submit
              </button>
            </form>
          </div>
          <div className="flex-1 ml-10">
            <ul className="font-Montserrat text-xl text-themeGray-300">
              <li className="flex items-center pb-3">
                <span
                  className="text-themeBlue-100 text-5xl"
                  role="img"
                  aria-label="home icon"
                >
                  &#x1F3E0;
                </span>
                <div className="ml-3">
                  1123 Andover Court
                  <br />
                  Glendale Heights, IL 60139
                </div>
              </li>
              <li className="flex items-center pb-3">
                <span
                  className="text-themeBlue-100 text-5xl"
                  role="img"
                  aria-label="phone icon"
                >
                  &#x260E;
                </span>
                <span className="ml-6"> 888-842-9033</span>
              </li>
              <li className="flex items-center pb-3">
                <span
                  className="text-themeBlue-100 text-5xl"
                  role="img"
                  aria-label="email icon"
                >
                  &#x2709;
                </span>
                <span className="ml-6"> info@searchmarketingresource.com</span>
              </li>
            </ul>
            <ul className="text-themeBlue-text text-2xl pb-3">
              <li className="flex flex-col items-start">
                sales@searchmarketingresource.com <br />
                <span className="text-themeGray-300">888-842-9033 x 11</span>
              </li>

              <li className="flex flex-col items-start pb-3">
                support@searchmarketingresource.com <br />
                <span className="text-themeGray-300">888-842-9033 x 12</span>
              </li>

              <li className="flex flex-col items-start pb-3">
                accounting@searchmarketingresource.com <br />
                <span className="text-themeGray-300">888-842-9033 x 14</span>
              </li>
              <li>
                <ul className="flex">
                  <li className="pr-4">
                    <a
                      href="https://www.facebook.com/Search-Marketing-Resource-108196670966/?ref=py_c"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookSquare className="text-facebookBlue text-5xl" />
                    </a>
                  </li>
                  <li className="pr-4">
                    <a
                      href="https://www.linkedin.com/company/3280029"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="text-linkedInBlue text-5xl" />
                    </a>
                  </li>
                  <li className="mt-1">
                    <a
                      href="https://goo.gl/maps/wcmHRrgMzpD2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <figure>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="42"
                          height="42"
                        >
                          <defs>
                            <clipPath clipPathUnits="userSpaceOnUse" id="a">
                              <path d="M0 1080h1920V0H0z" />
                            </clipPath>
                            <clipPath clipPathUnits="userSpaceOnUse" id="b">
                              <path d="M174.652 589.538h343.625V368.053H174.652z" />
                            </clipPath>
                            <clipPath clipPathUnits="userSpaceOnUse" id="c">
                              <path d="M148.249 589.538h396.307V540H148.249z" />
                            </clipPath>
                            <clipPath clipPathUnits="userSpaceOnUse" id="d">
                              <path d="M445.48 589.538h99.076V540H445.48z" />
                            </clipPath>
                          </defs>
                          <g
                            clipPath="url(#a)"
                            transform="matrix(.10598 0 0 -.12213 -15.711 86.95)"
                          >
                            <path
                              d="M174.651 589.539h343.502V388.933c0-11.531-9.348-20.88-20.879-20.88H195.53c-11.53 0-20.879 9.349-20.879 20.88z"
                              fill="#4285f4"
                            />
                            <g clipPath="url(#b)" opacity=".1">
                              <path
                                d="M174.651 545.727L349.08 368.053h148.13c11.64 0 21.074 9.44 21.066 21.08l-.123 200.406H174.651z"
                                fill="#231f20"
                              />
                            </g>
                            <path
                              d="M433.07 399.685c-26.982 0-48.805 21.822-48.805 48.804 0 26.982 21.823 48.804 48.805 48.804 13.177 0 24.193-4.81 32.699-12.758l-13.247-12.76c-3.626 3.487-9.97 7.53-19.452 7.53-16.664 0-30.26-13.805-30.26-30.816 0-17.012 13.596-30.817 30.26-30.817 19.312 0 26.563 13.874 27.679 21.056h-27.68v16.733h46.086c.418-2.44.767-4.88.767-8.088 0-27.888-18.685-47.688-46.852-47.688"
                              fill="#eee"
                            />
                            <path
                              d="M172.08 695.1l-23.83-105.562c0-27.359 22.178-49.538 49.537-49.538 27.36 0 49.54 22.18 49.54 49.538l14.8 122.41h-68.974A21.604 21.604 0 01172.08 695.1"
                              fill="#7baaf7"
                            />
                            <path
                              d="M262.127 711.947l-14.801-122.408c0-27.36 22.179-49.54 49.538-49.54 27.36 0 49.539 22.18 49.539 49.54v122.408zm237.525 0h-68.974l14.801-122.408c0-27.36 22.18-49.54 49.54-49.54 27.358 0 49.537 22.18 49.537 49.54l-23.83 105.56a21.604 21.604 0 01-21.074 16.848"
                              fill="#3f51b5"
                            />
                            <path
                              d="M430.678 711.947h-84.275V589.539c0-27.36 22.178-49.54 49.538-49.54 27.36 0 49.538 22.18 49.538 49.54z"
                              fill="#7baaf7"
                            />
                            <g clipPath="url(#c)" opacity=".1">
                              <path d="M247.326 589.539c0-27.36-22.18-49.54-49.54-49.54-27.357 0-49.537 22.18-49.537 49.54zm99.077 0h-99.077 99.077c0-27.36-22.18-49.54-49.54-49.54-27.358 0-49.537 22.18-49.537 49.54" />
                              <g clipPath="url(#d)">
                                <path d="M445.48 589.539c0-27.36 22.178-49.54 49.538-49.54 27.36 0 49.538 22.18 49.538 49.54z" />
                              </g>
                              <path d="M346.403 589.539h99.077-99.077c0-27.36 22.179-49.54 49.538-49.54 27.359 0 49.539 22.18 49.539 49.54" />
                            </g>
                          </g>
                        </svg>
                      </figure>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
