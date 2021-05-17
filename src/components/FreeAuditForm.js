import React from "react"

const FreeAuditForm = ({ home }) => {
  return (
    <section
      id="freeauditform"
      className={`pt-5 my-10 border-b pb-5 ${
        home ? "bg-themeOrange-700" : "bg-themeBlue-600"
      } border-gray-300`}
    >
      <div className="top_content flex flex-col justify-center items-center">
        <div className="pt-8 text-white text-2xl text-center font-MontserratBold pb-5">
          Is Your Website Search Engine Optimized? Get a Free Website SEO Audit!
        </div>
        <div
          className={`w-11/12 ${
            home ? "bg-themeOrange-400" : "bg-themeBlue-200"
          } mx-auto`}
        >
          <form className="contact-form m-10 font-Lato text-base">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              <div className="order-1 font-MontserratBold text-2xl uppercase text-white md:col-span-2 lg:col-span-1">
                Free Site Audit!
              </div>
              <input
                className="order-1 w-full border border-black p-3 rounded"
                type="text"
                placeholder="First Name"
                name="freeaudit-fname"
                id="freeaudit-fname"
              />
              <input
                className="w-full order-1 border border-black p-3 rounded"
                type="text"
                placeholder="Last Name"
                name="freeaudit-lname"
                id="freeaudit-lname"
              />
              <input
                className="w-full order-1 border border-black p-3 rounded"
                type="text"
                placeholder="Website URL"
                name="freeaudit-weburl"
                id="freeaudit-weburl"
              />
              <div className="order-2 lg:order-1 text-white">Recaptcha</div>
              <input
                className="w-full order-1 border border-black p-3 rounded"
                type="email"
                placeholder="Email"
                name="freeaudit-email"
                id="freeaudit-email"
              />
              <input
                className="w-full order-1 border border-black p-3 rounded"
                type="tel"
                placeholder="Phone"
                name="freeaudit-phone"
                id="freeaudit-phone"
              />
              <button
                id="freeaudit-submit"
                className={`w-full order-3 text-white uppercase 
                ${
                  home ? "bg-themeBlue-200" : "bg-themeOrange-400"
                }                 
                font-MontserratSemiBold px-16 py-3 tracking-wider text-base shadow-2xl rounded`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <p className="text-white text-lg font-Lato text-center py-5 mx-5">
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
