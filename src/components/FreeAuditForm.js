import React from "react"

const FreeAuditForm = () => {
  return (
    <section id="freeauditform" className="pt-5 pb-10 border-b border-gray-300">
      <div className="top_content flex flex-col justify-center items-center">
        <h3 className="pt-8 text-themeBlue-100 text-2xl text-center font-MontserratBold pb-5">
          Is Your Website Search Engine Optimized? Get a Free Website SEO Audit!
        </h3>
        <div className="w-11/12 bg-themeBlue-200 mx-auto">
          <form className="contact-form m-10 font-Lato text-base">
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              <li className="order-1 font-MontserratBold text-2xl uppercase text-white md:col-span-2 lg:col-span-1">
                Free Site Audit!
              </li>
              <li className="order-1">
                <input
                  className="w-full border border-black p-3 rounded"
                  type="text"
                  placeholder="First Name"
                  name="freeaudit-fname"
                  id="freeaudit-fname"
                />
              </li>
              <li className="order-1">
                <input
                  className="w-full border border-black p-3 rounded"
                  type="text"
                  placeholder="Last Name"
                  name="freeaudit-lname"
                  id="freeaudit-lname"
                />
              </li>
              <li className="order-1">
                <input
                  className="w-full border border-black p-3 rounded"
                  type="text"
                  placeholder="Website URL"
                  name="freeaudit-weburl"
                  id="freeaudit-weburl"
                />
              </li>
              <li className="order-2 lg:order-1 ">Recaptcha</li>
              <li className="order-1">
                <input
                  className="w-full border border-black p-3 rounded"
                  type="email"
                  placeholder="Email"
                  name="freeaudit-email"
                  id="freeaudit-email"
                />
              </li>
              <li className="order-1">
                <input
                  className="w-full border border-black p-3 rounded"
                  type="tel"
                  placeholder="Phone"
                  name="freeaudit-phone"
                  id="freeaudit-phone"
                />
              </li>
              <li className="order-3">
                <button
                  id="freeaudit-submit"
                  className="w-full text-white uppercase bg-themeOrange-400 font-MontserratSemiBold px-16 py-3 tracking-wider text-base shadow-2xl rounded"
                >
                  Submit
                </button>
              </li>
            </ul>
          </form>
        </div>
        <p className="text-themeGray-200 text-lg font-Lato text-center py-5 mx-5">
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
