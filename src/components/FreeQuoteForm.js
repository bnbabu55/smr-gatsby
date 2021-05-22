import React from "react"

const FreeQuoteForm = () => {
  return (
    <section
      id="freequoteform"
      className="py-10 mx-auto text-white font-Lato text-xl text-center"
    >
      <div className="flex flex-col lg:flex-row" id="form">
        <div className="bg-themeBlue-600 flex-1 p-8">
          <fieldset className="border-4 border-opacity-50 border-white p-5">
            <legend className="text-white text-center font-MontserratBold text-xl uppercase px-8">
              Request SEO Proposal
            </legend>
            <p>
              View our varied Digital Marketing service offerings and select the
              program that best meets your online marketing requirements.
            </p>
            <p className="py-5 font-bold underline tracking-wider">
              Services to Include
            </p>
            <div className="flex justify-around text-left font-Lato text-sm md:text-lg">
              <ul className="list-disc">
                <li>Assigned SEO Manager</li>
                <li>Monthly Blog Articles</li>
                <li>Business Directory Updates</li>
                <li>Google My Business Page</li>
                <li>Social Media Venues Managed</li>
                <li>Optimized Press Releases</li>
                <li>YouTube Channel Managed</li>
                <li>Tagged Pinterest Images</li>
              </ul>
              <ul className="list-disc">
                <li>Keyword Research</li>
                <li>Competitor Analysis</li>
                <li>Website SEO Audit & Repairs</li>
                <li>SEO 24/7 Dashboard</li>
                <li>Weekly Performance Reports</li>
                <li>Website Copy Rewritten</li>
                <li>SEO Page Attributes Added</li>
                <li>Page Load Speed Increased</li>
              </ul>
            </div>
            <div className="my-5">
              <a
                href="/search-marketing-website-design-proposal-form"
                className="w-full text-white uppercase bg-themeOrange-400 font-MontserratSemiBold px-8 py-2 tracking-wider text-lg shadow-2xl mt-5"
              >
                Free Quote
              </a>
            </div>
          </fieldset>
        </div>
        <div className="bg-themeOrange-400 flex-1 p-8">
          <fieldset className="border-4 border-opacity-50 border-white p-5 mx-auto">
            <legend className="text-white text-center font-MontserratBold text-xl uppercase px-8">
              Website Design Quote
            </legend>
            <p>
              We provide 100% turn-key website design and maintenance solutions
              for retail, business-to-business, industrial and consumer focused
              companies.
            </p>
            <p className="py-5 font-bold underline tracking-wider">
              Services to Include
            </p>
            <div className="flex justify-around text-left font-Lato text-sm md:text-lg">
              <ul className="list-disc">
                <li>Assigned Project Designer</li>
                <li>Development Test Manager</li>
                <li>Senior Graphics Lead</li>
                <li>Site Navigation Approval</li>
                <li>Mobile Friendly Design</li>
                <li>News & Events (Blog)</li>
                <li>Content Management (CMS)</li>
                <li>Email Opt-In Captures</li>
              </ul>
              <ul className="list-disc">
                <li>Request Quote Forms</li>
                <li>Ecommerce Solutions</li>
                <li>SEO Page Attributes</li>
                <li>Customer Testimonials</li>
                <li>Site Traffic Analytics</li>
                <li>Landing Page Design</li>
                <li>Video Libraries & Stream</li>
                <li>Ongoing Website Maintenance</li>
              </ul>
            </div>
            <div className="my-5">
              <a
                className="w-full text-white uppercase bg-themeBlue-600 font-MontserratSemiBold px-8 py-2 tracking-wider text-lg shadow-2xl mt-5"
                href="/website-design-search-marketing-quote-form"
              >
                Free Quote
              </a>
            </div>
          </fieldset>
        </div>
      </div>
    </section>
  )
}

export default FreeQuoteForm
