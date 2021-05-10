import React from "react"

const ContactForm = () => {
  return (
    <section id="contact" className="bg-themeGreen text-white py-10 mx-auto">
      <div className="w-11/12 mx-auto">
        <div className="mx-auto flex flex-col justify-evenly">
          <h2 className="mx-auto text-center font-BebasNeue text-themeOrange text-5xl">
            CONTACT US
          </h2>
          <h3 className="mx-auto text-center font-Montserrat text-themeBlue-text text-2xl py-5">
            WEBSITE SEO, DESIGN AND DEVELOPMENT COMPANY
          </h3>

          <p className="mx-auto text-center w-3/5 leading-7 font-Lato text-lg text-themeGray-200 pb-5">
            Contact the Search Marketing Resource team to discuss your online
            marketing needs or website development requirements. We will provide
            a detailed proposal or schedule a brief call to help define the
            project deliverables, timeline and budget.
          </p>
        </div>
        <div className="contact-content w-full flex flex-col lg:flex-row lg:gap-x-16 mx-auto bg-white my-5">
          <div className="w-full contact-wrapper mx-auto border border-gray-700 rounded-lg">
            <form className="text-gray-700 contact-form flex flex-col justify-center align-center m-10 font-Lato text-base">
              <div className="font-Montserrat text-xs text-themeOrange pb-2">
                Required *
              </div>
              <ul className="grid gap-3 grid-cols-2">
                <li className="col-start-1 col-end-3 lg:col-start-1 lg:col-end-2">
                  <input
                    className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200"
                    type="tel"
                    placeholder="Company"
                    name="company"
                    id="company"
                  />
                </li>
                <li className="col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
                  <input
                    className="w-full border border-gray-700 p-3  rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                  />
                </li>
                <li className="col-start-1 col-end-3 lg:col-start-1 lg:col-end-2">
                  <input
                    className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200"
                    type="text"
                    placeholder="First"
                    name="firstname"
                    id="firstname"
                  />
                </li>
                <li className="col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
                  <input
                    className="w-full border border-gray-700 p-3  rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200"
                    type="text"
                    placeholder="Last"
                    name="lastname"
                    id="lastname"
                  />
                </li>
                <li className="col-span-2">
                  <textarea
                    className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200"
                    type="textarea"
                    placeholder="Message"
                    rows="6"
                    name="message"
                    id="message"
                  />
                </li>
                <li className="col-span-2">
                  <button className="w-full text-white uppercase bg-themeOrange rounded font-MontserratSemiBold px-8 py-2 tracking-wider text-base shadow-2xl mt-5">
                    Submit
                  </button>
                </li>
              </ul>
            </form>
          </div>
          <div className="w-full mt-5 lg:mt-0 mx-auto">
            <ul className="w-full font-Montserrat text-themeGray-300">
              <li className="flex items-center pb-3">
                <span
                  className="text-themeBlue-100 text-2xl lg:text-5xl"
                  role="img"
                  aria-label="home icon"
                >
                  &#x1F3E0;
                </span>
                <div className="ml-3 text-sm lg:text-xl">
                  1123 Andover Court
                  <br />
                  Glendale Heights, IL 60139
                </div>
              </li>
              <li className="flex items-center pb-3">
                <span
                  className="text-themeBlue-100 text-3xl lg:text-5xl"
                  role="img"
                  aria-label="phone icon"
                >
                  &#x260E;
                </span>
                <span className="ml-2 lg:ml-6 text-sm lg:text-xl">
                  {" "}
                  888-842-9033
                </span>
              </li>
              <li className="flex items-center pb-3">
                <span
                  className="text-themeBlue-100 text-3xl lg:text-5xl"
                  role="img"
                  aria-label="email icon"
                >
                  &#x2709;
                </span>
                <span className="ml-2 lg:ml-6 text-sm lg:text-xl">
                  {" "}
                  info@searchmarketingresource.com
                </span>
              </li>
            </ul>
            <ul className="w-full mt-3 lg:mt-0 text-themeBlue-text text-base lg:text-2xl pb-3">
              <li className="">
                sales@searchmarketingresource.com <br />
                <span className="text-themeGray-300">888-842-9033 x 11</span>
              </li>

              <li className="pb-3">
                support@searchmarketingresource.com <br />
                <span className="text-themeGray-300">888-842-9033 x 12</span>
              </li>

              <li className="pb-3">
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3rem"
                        height="3rem"
                        viewBox="0 0 408.788 408.788"
                        className="text-facebookBlue text-5xl"
                        role="img"
                        aria-label="Facebook Icon"
                      >
                        <path
                          d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951a8.954 8.954 0 01-8.954-8.92l-.182-47.087a8.955 8.955 0 018.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65a8.955 8.955 0 018.955 8.955v39.704a8.955 8.955 0 01-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087a8.955 8.955 0 01-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z"
                          fill="#4267B2"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="pr-4">
                    <a
                      href="https://www.linkedin.com/company/3280029"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3rem"
                        height="3rem"
                        viewBox="0 0 382 382"
                        className="text-linkedInBlue text-5xl"
                        role="img"
                        aria-label="LinkedIn Icon"
                      >
                        <path
                          d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 01-9.246 9.246H286.73a9.247 9.247 0 01-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 01-9.246 9.246h-44.426a9.247 9.247 0 01-9.246-9.246V149.593a9.247 9.247 0 019.246-9.246h44.426a9.247 9.247 0 019.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
                          fill="#0072b1"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="https://goo.gl/maps/wcmHRrgMzpD2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="48"
                        className="text-5xl"
                        role="img"
                        aria-label="Google My Business Icon"
                      >
                        <path
                          d="M3.77 18.154h49.022v29.75c0 1.71-1.333 3.096-2.98 3.096H6.748c-1.644 0-2.977-1.387-2.977-3.096z"
                          fill="#4285f4"
                        />
                        <path
                          d="M3.77 24.65L28.661 51h21.142c1.66 0 3.007-1.4 3.006-3.127l-.018-29.72H3.77z"
                          fill="#231f20"
                          opacity=".1"
                        />
                        <path
                          d="M40.65 46.308c-3.852 0-6.966-3.236-6.966-7.237 0-4.001 3.114-7.237 6.966-7.237a6.54 6.54 0 014.666 1.892l-1.89 1.891A3.67 3.31 0 0040.65 34.5c-2.378 0-4.319 2.048-4.319 4.57 0 2.524 1.94 4.571 4.319 4.571 2.755 0 3.79-2.058 3.95-3.123h-3.95v-2.48h6.577c.059.361.109.723.109 1.198 0 4.136-2.667 7.072-6.686 7.072"
                          fill="#eee"
                        />
                        <path
                          d="M3.402 2.498l-3.4 15.656C0 22.209 3.164 25.5 7.07 25.5s7.07-3.29 7.07-7.346L16.253 0H6.41a3.084 3.203 0 00-3.007 2.498"
                          fill="#7baaf7"
                        />
                        <path
                          d="M16.254 0L14.14 18.154c0 4.056 3.166 7.346 7.07 7.346 3.905 0 7.07-3.29 7.07-7.346V0zm33.898 0h-9.844l2.113 18.154c0 4.056 3.164 7.346 7.07 7.346 3.905 0 7.07-3.29 7.07-7.346L53.16 2.499A3.084 3.203 0 0050.152 0"
                          fill="#3f51b5"
                        />
                        <path
                          d="M40.308 0H28.28v18.154c-.002 4.055 3.163 7.346 7.068 7.346 3.906 0 7.07-3.29 7.07-7.346z"
                          fill="#7baaf7"
                        />
                        <path
                          d="M14.14 18.154c0 4.055-3.165 7.346-7.07 7.346C3.166 25.5 0 22.21 0 18.154zm14.14 0H14.14h14.14c0 4.055-3.165 7.346-7.07 7.346-3.904 0-7.07-3.29-7.07-7.346m28.28 0c0 4.056 3.165 7.346 7.07 7.346 3.906 0 7.07-3.29 7.07-7.346zm-14.14 0h14.14-14.14c0 4.055 3.164 7.346 7.07 7.346 3.905 0 7.07-3.29 7.07-7.346"
                          opacity=".1"
                        />
                      </svg>
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
