import React from "react"

const FreeAuditForm = () => {
  return (
    <section id="freeauditform" className="pt-5 pb-10 border-b border-gray-300">
      <div className="top_content flex flex-col justify-center items-center">
        <h2 className="pt-8 text-themeBlue-text text-2xl font-Montserrat pb-5">
          Is Your Website Search Engine Optimized? Get a Free Website SEO Audit!
        </h2>
        <div className="w-11/12 flex flex-row items-center bg-themeBlue-200 mx-auto">
          <form className="contact-form flex justify-center align-center m-10 font-Lato text-base gap-x-5">
            <div>
              <ul className="flex flex-col">
                <li className="font-MontserratBold text-2xl uppercase text-white">
                  Free Site Audit!
                </li>
                <li>Recaptcha</li>
              </ul>
            </div>
            <div>
              <ul className="flex w-full mb-3">
                <li className="flex-1 p-2 mr-2">
                  <input
                    className="border border-black p-3"
                    type="text"
                    placeholder="First Name"
                    name="freeaudit-fname"
                    id="freeaudit-fname"
                  />
                </li>
                <li className="flex-1 p-2 mr-2">
                  <input
                    className="border border-black p-3"
                    type="text"
                    placeholder="Last Name"
                    name="freeaudit-lname"
                    id="freeaudit-lname"
                  />
                </li>
                <li className="flex-1 p-2 mr-2">
                  <input
                    className="border border-black p-3"
                    type="text"
                    placeholder="Website URL"
                    name="freeaudit-weburl"
                    id="freeaudit-weburl"
                  />
                </li>
              </ul>
              <ul className="flex w-full mb-3">
                <li className="flex-1 p-2 mr-2">
                  <input
                    className="border border-black p-3"
                    type="email"
                    placeholder="Email"
                    name="freeaudit-email"
                    id="freeaudit-email"
                  />
                </li>
                <li className="flex-1 p-2 mr-2">
                  <input
                    className="border border-black p-3"
                    type="tel"
                    placeholder="Phone"
                    name="freeaudit-phone"
                    id="freeaudit-phone"
                  />
                </li>
                <li className="flex-1 p-2 mr-2">
                  <button
                    id="freeaudit-submit"
                    className="text-white uppercase bg-themeOrange-400 font-MontserratSemiBold px-16 py-3 tracking-wider text-base shadow-2xl "
                  >
                    Submit
                  </button>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <p className="text-themeGray-200 text-lg font-Lato text-center py-5">
          The Search Marketing Resource team will review your website and
          deliver a report that provides both a graded review on how well your
          site has been Search Engine optimized for the keywords or phrases you
          are targeting but also direct action items that if followed will help
          to increase our keyword search rankings.
        </p>
      </div>
    </section>
  )
}

export default FreeAuditForm
