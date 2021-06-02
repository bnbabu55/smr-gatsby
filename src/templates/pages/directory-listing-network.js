import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactForm from "../../components/ContactForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const DirectoryListingPage = ({ data: { page, dSubmission, listings } }) => {
  const submissionImage = dSubmission.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <section className="w-full mx-auto text-center py-10">
        <div className="w-11/12 mx-auto">
          <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center pt-10">
            BUSINESS LISTING NETWORK
          </h1>
          <div className="py-10 text-themeGray-200 text-left text-lg">
            <p className="pb-3">
              Today, Google, Yahoo and Bing are proactively involved between
              your customers and their having access to your website, directly
              affecting your search rankings. As such, to be relevant both
              nationally and locally, it is important your business information
              is available on all reputable directories and categorized
              specifically to your products and services in those databases.
            </p>
            <p className="pb-3">
              Creating or updating your NAP (Name, Address, Phone Number)
              information on the top directories, online business listing sites
              and citation websites improves your search visibility while
              creating qualified ‘backlinks’ from these network directories.
            </p>
          </div>

          <h2 className="font-MontserratSemiBold underline text-4xl text-themeBlue-600">
            Business Listing Basics
          </h2>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-5 py-5">
            <ul className="w-11/12 mx-auto text-left flex-1">
              <li className="text-themeOrange-400 text-2xl py-3">
                <h3 className="font-semibold">
                  <span className="text-themeBlue-600 -mt-3 pr-3 text-4xl">
                    &#10033;
                  </span>
                  Consistent NAP
                </h3>
                <p className="text-gray-700 text-lg">
                  Adding or updating your business on our directory network
                  confirms that your business information is consistent and
                  accurate. This assures the Search Engines you are a valid
                  business entity and this leads to higher search rankings.
                </p>
              </li>
              <li className="text-themeBlue-600 text-2xl py-3">
                <h3 className="font-semibold">
                  <span className="text-themeOrange-400 -mt-3 pr-3 text-4xl">
                    &#10033;
                  </span>
                  Create 'Qualified' Backlinks
                </h3>
                <p className="text-gray-700 text-lg">
                  Backlinks, or inbound links, are crucial to your company’s
                  website's domain authority with the Search Engines. Google,
                  Yahoo and Bing count the number of backlinks that are pointing
                  to your website promoting increased positioning against your
                  competition.
                </p>
              </li>
              <li className="text-themeOrange-400 text-2xl py-3">
                <h3 className="font-semibold">
                  <span className="text-themeBlue-600 -mt-3 pr-3 text-4xl">
                    &#10033;
                  </span>
                  Business Services Description
                </h3>
                <p className="text-gray-700 text-lg">
                  Having a consistent and detailed business description provides
                  the content needed to support the listing. The Search Engines
                  compare this information with all directories, Social Media
                  accounts and your own website for conformity.
                </p>
              </li>
              <li className="text-themeBlue-600 text-2xl py-3">
                <h3 className="font-semibold">
                  <span className="text-themeOrange-400 -mt-3 pr-3 text-4xl">
                    &#10033;
                  </span>
                  Include Multimedia
                </h3>
                <p className="text-gray-700 text-lg">
                  Adding visual information about your company’s products,
                  services, employees, building or daily operations is a great
                  way to add a ‘real business’ effect to your listings. This can
                  be an image or video production.
                </p>
              </li>
            </ul>
            <GatsbyImage
              image={submissionImage}
              alt="Directory Listing Image"
              className="flex-1"
            />
          </div>
        </div>
        <div className="text-left mx-auto">
          <h2 className="bg-gray-200 text-themeBlue-600 font-semibold text-2xl text-center uppercase py-3 mb-8 gap-x-3">
            DIRECTORY NETWORK
          </h2>
          <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 grid-flow-row divide-x">
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="2findlocal Business Directory"
                image={listings.nodes[0].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>2FindLocal</span>
                  <span>Active Monthly Users: 100,000</span>
                </h3>
                <p className="text-lg">
                  2FindLocal is a local search directory that connects searchers
                  with relevant deals in their area. By allowing local
                  businesses to upload product lists and special 2FindLocal is a
                  great destination for discount products and services.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="8coupons Business Directory"
                image={listings.nodes[1].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>8Coupons</span>
                  <span>Active Monthly Users: 500,000</span>
                </h3>
                <p className="text-lg">
                  8coupons collects information from over 500 sources to bring
                  consumers only the deals they care about from their
                  neighborhood restaurants, bars, salons and stores. Local
                  businesses are easily discovered and can access customers in
                  their neighborhoods.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="ABLocal Business Directory"
                image={listings.nodes[2].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>ABLocal</span>
                  <span>Active Monthly Users: 50,000</span>
                </h3>
                <p className="text-lg">
                  ABLocal is a curated local business directory, which helps
                  people find great local businesses they’ve never tried before.
                  Their search algorithm favors businesses that have taken the
                  time to curate their listings. That’s because they think
                  business owners who want to talk about their business, and
                  what makes it unique, are more likely to run a cool, local
                  shop.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Allonesearch Business Directory"
                image={listings.nodes[3].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Allonesearch</span>
                  <span>Active Monthly Users: 20,000</span>
                </h3>
                <p className="text-lg">
                  Allonesearch is an all-in-one local search directory that
                  offers consumers comprehensive business listings throughout
                  the US, complete with contact details and in-depth information
                  on each company.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Credibility Business Directory"
                image={listings.nodes[4].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Credibility.com</span>
                  <span>Active Monthly Users: 300,000</span>
                </h3>
                <p className="text-lg">
                  Credibility.com helps consumers find credible businesses
                  through its trusted source of business information, reviews,
                  media, and more that power a number of other data sources
                  across the web.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="GetFave Business Directory"
                image={listings.nodes[5].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>GetFave</span>
                  <span>Active Monthly Users: 2M</span>
                </h3>
                <p className="text-lg">
                  GetFave.com helps people discover local business deals,
                  events, and promotions. Users can see what businesses have to
                  “hype” and take advantage of these in real time.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Hotfrog Business Directory"
                image={listings.nodes[6].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Hotfrog</span>
                  <span>Active Monthly Users: 1.6M</span>
                </h3>
                <p className="text-lg">
                  People search online for all kinds of products and services
                  every day. Hotfrog is a place for you, the small business
                  owner, to tell the world what you do differently. Hotfrog
                  helps over 69 million businesses reach more than 1.6 M active
                  users per month, in 38 countries.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="iGlobal Business Directory"
                image={listings.nodes[7].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>iGlobal</span>
                  <span>Active Monthly Users: 4M</span>
                </h3>
                <p className="text-lg">
                  iGlobal is an online directory where consumers can find
                  information on shops, businesses, and professionals in their
                  cities. Based in South America, iGlobal has a presence in 60
                  countries spread across the Americas, Europe, and Asia, and is
                  available in 18 different languages.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="iBegin Business Directory"
                image={listings.nodes[8].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>iBegin</span>
                  <span>Active Monthly Users: 20,000</span>
                </h3>
                <p className="text-lg">
                  iBegin provides listings for the USA, Canada, the UK, and New
                  Zealand. Thousands of users view listings on iBegin every
                  month.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="MapQuest Business Directory"
                image={listings.nodes[9].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>MapQuest</span>
                  <span>Active Monthly Users: 27M+</span>
                </h3>
                <p className="text-lg">
                  MapQuest is one of the leading US mapping brands online,
                  offering maps and directions to over 27 million users a month.
                  Additionally, MapQuest has mobile solutions that are
                  compatible with a variety of mobile devices. One out of every
                  five Americans on the internet uses MapQuest’s mapping
                  solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="FindOpen Business Directory"
                image={listings.nodes[10].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>FindOpen</span>
                  <span>Active Monthly Users: 20,000</span>
                </h3>
                <p className="text-lg">
                  FindOpen is one of the world’s leading online business
                  directories and helps consumers find the critical information
                  they need to know about the businesses they’d like to visit,
                  like hours of operation, holiday hours, special hours, menus,
                  product and service lists, and more. FindOpen — also known as
                  FindeOffen, TrovaAperto, TrouverOuvert, VindOpen, nyitva.hu,
                  EncuentreAbierto, AussieHours, FindAaben, TerazOtwarte,
                  HittaӦppna, and deschis.ro in the many countries it operates —
                  provides a fully responsive experience, no matter where its
                  global users are searching from.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Foursquare Business Directory"
                image={listings.nodes[11].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Foursquare</span>
                  <span>Active Monthly Users: 10M</span>
                </h3>
                <p className="text-lg">
                  Foursquare is a location-based mobile platform that guides
                  real-world experience by allowing users to share their
                  location with friends and bookmark information about venues
                  that they want to visit. It currently has over 20 million
                  users worldwide and over 750,000 merchants actively managing
                  their businesses on the Foursquare network. Foursquare
                  Merchants and brands leverage the Foursquare platform by
                  utilizing a set of tools to obtain, engage, and retain
                  customers and audiences.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Superpages Business Directory"
                image={listings.nodes[12].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Superpages</span>
                  <span>Active Monthly Users: 7M</span>
                </h3>
                <p className="text-lg">
                  Superpages is a top online resource for finding information
                  and insights on businesses and retailers. Every month, it
                  helps millions of consumers find valuable local business
                  information from driving directions and hours of operation to
                  Web links and customer reviews.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Waze Business Directory"
                image={listings.nodes[13].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Waze</span>
                  <span>Active Monthly Users: 50M</span>
                </h3>
                <p className="text-lg">
                  Waze is the community-driven GPS app that will put your
                  clients’ businesses on the map. This unique app sources
                  traffic information from its users and its software learns
                  from it, so that it can provide your clients’ customers
                  routing and real-time traffic updates.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="AirYell Business Directory"
                image={listings.nodes[14].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>AirYell</span>
                  <span>Active Monthly Users: 1M</span>
                </h3>
                <p className="text-lg">
                  AirYell is the advanced business directory search app for
                  iPhone and iPad. You can look at business reviews, search for
                  daily deals, and even use voice navigation.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="AmericanTowns Business Directory"
                image={listings.nodes[15].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>AmericanTowns.com</span>
                  <span>Active Monthly Users: 2.3M</span>
                </h3>
                <p className="text-lg">
                  By organizing a town’s resources in one place,
                  AmericanTown.com helps people quickly find out what’s
                  happening in their local government, schools, libraries, and
                  community groups. Small businesses and groups can easily
                  create their own content - whether it’s posting to the events
                  calendar, publishing a press release, or providing sale
                  information.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="AroundMe Business Directory"
                image={listings.nodes[16].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>AroundMe</span>
                  <span>Active Monthly Users: 3M</span>
                </h3>
                <p className="text-lg">
                  AroundMe allows consumers to search for the nearest
                  restaurants, banks, gas stations, book a hotel or find a movie
                  schedule nearby. The AroundMe app is available for iPhone,
                  iPad, Android, and Windows Phone and powers 25 million local
                  searches per month.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Bizwiki Business Directory"
                image={listings.nodes[17].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Bizwiki.com</span>
                  <span>Active Monthly Users: 100,000</span>
                </h3>
                <p className="text-lg">
                  Bizwiki is the USA’s free business listing site. Bizwiki is
                  changing the way online business information works by
                  combining user-edited records and crowd-sourced detail with
                  the power of advanced web-spiders and structured data.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Brownbook Business Directory"
                image={listings.nodes[18].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Brownbook.net</span>
                  <span>Active Monthly Users: 1M</span>
                </h3>
                <p className="text-lg">
                  Based in the UK, Brownbook.net displays listing information
                  for over 30 million businesses across over 200 countries
                  worldwide.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="ChamberofCommerce Business Directory"
                image={listings.nodes[19].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>ChamberofCommerce.com</span>
                  <span>Active Monthly Users: 450,000</span>
                </h3>
                <p className="text-lg">
                  ChamberofCommerce.com is a platform with a focus on
                  facilitating connectivity between local business and more than
                  7,000 Chambers of Commerce worldwide. It helps small
                  businesses grow by allowing members to promote themselves in
                  the Chamber directory.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Citysearch Business Directory"
                image={listings.nodes[20].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Citysearch</span>
                  <span>Active Monthly Users: 12M</span>
                </h3>
                <p className="text-lg">
                  Citysearch is an online local guide that enables consumers to
                  stay connected with access to neighborhood restaurants, bars,
                  shopping, beauty, and professional services across every zip
                  code in the US. Citysearch is a desktop and mobile app.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="CitySquares Business Directory"
                image={listings.nodes[21].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>CitySquares</span>
                  <span>Active Monthly Users: 250,000</span>
                </h3>
                <p className="text-lg">
                  CitySquares provides small, independent businesses an
                  opportunity to reach a qualified, local consumer audience
                  through a search engine optimized profile on its highly
                  trafficked, consumer-facing website.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Credibility Review Business Directory"
                image={listings.nodes[22].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Credibility Review</span>
                  <span>Active Monthly Users: 500,000</span>
                </h3>
                <p className="text-lg">
                  Dun &amp; Bradstreet’s Credibility Review includes over 20
                  million business records in one directory with a focus on
                  unique insights including business credit reports, competitive
                  landscape, industry benchmarks, company revenue, and much
                  more.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="CYLEX Business Directory"
                image={listings.nodes[23].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>CYLEX</span>
                  <span>Active Monthly Users: 30M</span>
                </h3>
                <p className="text-lg">
                  CYLEX operates over 30 online business directories, visited by
                  more than 1 million unique users daily, that reach 5
                  continents and millions of customers worldwide. CYLEX provides
                  fast and simple ways for users to find the right service
                  anywhere and for businesses to showcase their locations.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="DexKnows Business Directory"
                image={listings.nodes[24].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>DexKnows</span>
                  <span>Active Monthly Users: 2M</span>
                </h3>
                <p className="text-lg">
                  DexKnows.com is the expert when it comes to online business
                  listings. Each month, they help connect millions of consumers
                  with local businesses and provide them with the information
                  they’re looking for - from phone numbers and driving
                  directions to ratings, reviews, and special offers.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="eLocal Business Directory"
                image={listings.nodes[25].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>eLocal</span>
                  <span>Active Monthly Users: 250,000</span>
                </h3>
                <p className="text-lg">
                  eLocal aims to help consumers connect with local merchants
                  across all major niche consumer oriented business categories.
                  Their comprehensive business profiles provide useful
                  information that is category specific to the products and
                  services their industry provides.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="EZlocal Business Directory"
                image={listings.nodes[26].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>EZlocal</span>
                  <span>Active Monthly Users: 500,000</span>
                </h3>
                <p className="text-lg">
                  EZLocal is a local search marketing company focused on helping
                  small businesses connect with people who are actively
                  searching online for products and services in their area.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Factual Business Directory"
                image={listings.nodes[27].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Factual</span>
                  <span>Active Monthly Users: 1M</span>
                </h3>
                <p className="text-lg">
                  Factual is an open data platform that enables personalized and
                  contextually relevant mobile experiences. Factual’s real-time
                  data stack builds and maintains data on a global scale,
                  covering 65 million local businesses and points of interest in
                  50 countries. Factual also provides location-based mobile
                  personalization and ad-targeting solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="GoLocal247 Business Directory"
                image={listings.nodes[28].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>GoLocal247.com</span>
                  <span>Active Monthly Users: 450,000</span>
                </h3>
                <p className="text-lg">
                  GoLocal247 is the fastest growing hyper-local network of
                  directories with community portals. Users have the ability to
                  locate thousands of in-depth profiles on local businesses,
                  rate and review them, and utilize money-saving coupons. Users
                  can also post free classified ads, view and add events to the
                  community calendar as well as view the latest local sports and
                  entertainment news.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Insider Pages Business Directory"
                image={listings.nodes[29].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Insider Pages</span>
                  <span>Active Monthly Users: 750,000</span>
                </h3>
                <p className="text-lg">
                  Insider Pages was created to help people find the best local
                  businesses through recommendations from their friends and
                  neighbors with a focus on local service providers like
                  dentists, hairstylists, pediatricians, or even
                  hypnotherapists. At Insider Pages, people share reviews of
                  local businesses and find great services they can trust.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="The Internet Chamber of Commerce Business Directory"
                image={listings.nodes[30].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>The Internet Chamber of Commerce</span>
                  <span>Active Monthly Users: 100,000</span>
                </h3>
                <p className="text-lg">
                  The Internet Chamber of Commerce is a dynamic, independent
                  business network that lists vital information about over
                  100,000 businesses, companies, and organizations across the
                  United States. Its mission is to be an essential tool for any
                  growing business.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Kudzu Business Directory"
                image={listings.nodes[31].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Kudzu.com</span>
                </h3>
                <p className="text-lg">
                  Kudzu.com, named after the kudzu vine, is a place where users
                  can get honest, uncensored feedback about millions of
                  businesses from other users and thousands of money-saving
                  deals in every major U.S. city — quickly.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Local Business Directory"
                image={listings.nodes[32].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Local.com</span>
                  <span>Active Monthly Users: 10M</span>
                </h3>
                <p className="text-lg">
                  Local.com provides users with targeted, relevant local search
                  results that include special offers from local businesses,
                  user reviews, local businesses, website links, maps, driving
                  directions, and more. The company’s Keyword DNA and patented
                  local web indexing technologies power the site.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="LocalDatabase Business Directory"
                image={listings.nodes[33].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>LocalDatabase.com</span>
                  <span>Active Monthly Users: 100,000</span>
                </h3>
                <p className="text-lg">
                  LocalDatabase.com is a local guide designed to offer targeted
                  in-depth information to US based communities. The platform is
                  continuously growing and scaling information from multiple
                  data sources such as public data, open business listings,
                  social input and integrated local service offerings.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="LocalPages Business Directory"
                image={listings.nodes[34].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>LocalPages</span>
                  <span>Active Monthly Users: 350,000</span>
                </h3>
                <p className="text-lg">
                  LocalPages is a local directory that helps connect people with
                  businesses through the US. Their users benefit from the daily
                  deals offered by many of the businesses listed.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="LocalStack Business Directory"
                image={listings.nodes[35].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>LocalStack</span>
                  <span>Active Monthly Users: 600,000</span>
                </h3>
                <p className="text-lg">
                  LocalStack (formerly MojoPages) is an online directory geared
                  towards rating small businesses based on an analysis of their
                  online reviews. This data helps thousands of consumers find
                  the best small businesses in their city every month.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="MerchantCircle Business Directory"
                image={listings.nodes[36].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>MerchantCircle</span>
                  <span>Active Monthly Users: 1M</span>
                </h3>
                <p className="text-lg">
                  Merchant Circle is an online network of local business owners,
                  combining social networking features with customizable web
                  listings that allow local merchants to attract new customers.
                  A growing network dedicated to connecting neighbors and
                  merchants online to help build real relationships between
                  local business owners and their customers.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="My Local Services Business Directory"
                image={listings.nodes[37].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>My Local Services</span>
                  <span>Active Monthly Users: 50,000</span>
                </h3>
                <p className="text-lg">
                  My Local Services is a comprehensive, nationwide online
                  business directory where visitors can search, review, and add
                  business listings. The directory is broken down by State with
                  an easy-to-use interface that allows visitors to find what
                  they are looking for quickly.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="n49 Business Directory"
                image={listings.nodes[38].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>n49</span>
                  <span>Active Monthly Users: 300,000</span>
                </h3>
                <p className="text-lg">
                  n49 helps consumers engage with the best businesses in their
                  communities by reading, writing, and sharing reviews of local
                  businesses. n49 is the leading way to find and rate local
                  restaurants, dentists, salons, plumbers, mechanics, and more.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Navmii Business Directory"
                image={listings.nodes[39].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Navmii</span>
                  <span>Active Monthly Users: 600,000</span>
                </h3>
                <p className="text-lg">
                  Navmii is a completely free, voice-guided, turn-by-turn
                  navigation app. It uses crowd-sourced OpenStreetMap (OSM) data
                  and is constantly improved by a global community of over
                  850,000 contributors.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="HERE Business Directory"
                image={listings.nodes[40].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>HERE</span>
                  <span>Active Monthly Users: 5M</span>
                </h3>
                <p className="text-lg">
                  HERE combines highly accurate and fresh maps with cloud
                  technology to enable rich, real-time location experiences in a
                  broad range of connected devices. HERE allows users to search,
                  navigate, or get directions around the world — even without
                  internet connection. Interactive and personalized maps can be
                  saved and continue to work offline.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Opendi Business Directory"
                image={listings.nodes[41].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Opendi</span>
                  <span>Active Monthly Users: 9M</span>
                </h3>
                <p className="text-lg">
                  Opendi is a local directory that contains over 20 million
                  local businesses across the globe. In addition to business
                  pages, Opendi houses thousands of reviews to help searchers
                  find exactly what they’re looking for.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="PointCom Business Directory"
                image={listings.nodes[42].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>PointCom</span>
                  <span>Active Monthly Users: 100,000</span>
                </h3>
                <p className="text-lg">
                  PointCom lists the top rated places on the web. Each site they
                  review is given a stamp of approval that they have quality
                  content that would be essential for any visitor to check out.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Public Reputation Business Directory"
                image={listings.nodes[43].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Public Reputation</span>
                </h3>
                <p className="text-lg">
                  Public Reputation is a full-service directory site dedicated
                  to helping local businesses in the United States manage their
                  reviews, fix their online listings, and leverage their online
                  reputation to drive more business. Local business listed on
                  Public Reputation can manage and update the facts that
                  consumers are searching for, including hours of operation,
                  menus, events, staff bios, and more. Business can also monitor
                  customer reviews, to stay informed, responsive, and foster
                  better customer relationships.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="ShowMeLocal Business Directory"
                image={listings.nodes[44].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>ShowMeLocal.com</span>
                  <span>Active Monthly Users: 750,000</span>
                </h3>
                <p className="text-lg">
                  ShowMeLocal.com gives local business owners the tools to
                  promote their business online and local consumers a place to
                  go to learn about businesses in their area while finding great
                  deals. ShowMeLocal.com’s directory powers consumer-based sites
                  such as search engines, online classifieds, and local
                  directories.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Soleo Business Directory"
                image={listings.nodes[45].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Soleo</span>
                  <span>Active Monthly Users: 3.4M</span>
                </h3>
                <p className="text-lg">
                  Soleo is one of fastest-growing local search and digital media
                  advertising companies in North America. The company has a
                  unique ecosystem of software as a service, coupled with the
                  asset of more than 4 billion local business searches a year.
                  Soleo has built sophisticated algorithms that match the intent
                  of consumers to relevant choices, particularly if the user is
                  looking for a business in a local area.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Switchboard Business Directory"
                image={listings.nodes[46].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Switchboard</span>
                  <span>Active Monthly Users: 2.7M</span>
                </h3>
                <p className="text-lg">
                  Switchboard.com is an online directory for finding contact
                  information for businesses and people. Switchboard is part of
                  the White Pages network of sites that has powered over 2
                  billion searches.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Telenav Business Directory"
                image={listings.nodes[47].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Telenav</span>
                  <span>Active Monthly Users: 5M</span>
                </h3>
                <p className="text-lg">
                  Telenav is a wireless location-based service company whose
                  mission is to help reduce stress, improve productivity, and
                  make life more fun for people on the go. Telenav’s
                  personalized navigation services help people make smarter
                  decisions about where to go, what to do, when to leave, and
                  how to get there.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="TomTom Business Directory"
                image={listings.nodes[48].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>TomTom</span>
                  <span>Active Monthly Users: 7M</span>
                </h3>
                <p className="text-lg">
                  TomTom is a global leader in navigation and mapping products.
                  Every day, millions of people around the world depend on
                  TomTom to make smarter decisions. TomTom created the first
                  Portable Navigation Device in 2004 and continues to develop
                  innovative products like GPS sports watches and fleet
                  management solutions to keep people moving toward their goals.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Topix Business Directory"
                image={listings.nodes[49].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Topix</span>
                  <span>Active Monthly Users: 6M</span>
                </h3>
                <p className="text-lg">
                  Topix is the leading community news website in the US,
                  connecting over ten million users a month to the information
                  and discussions that matter to them in every city and town. In
                  addition to creating a platform on which to read and discuss
                  local news, Topix has built an impressive local directory that
                  has proved immensely popular amongst its many users.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Tupalo Business Directory"
                image={listings.nodes[50].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Tupalo</span>
                  <span>Active Monthly Users: 2M</span>
                </h3>
                <p className="text-lg">
                  Tupalo is an online community of thousands of people that
                  discover, review and share their favorite spots and let others
                  know where and where not to go.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="USCity Business Directory"
                image={listings.nodes[51].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>USCity.net</span>
                  <span>Active Monthly Users: 450,000</span>
                </h3>
                <p className="text-lg">
                  USCity.net is one of the oldest and most trusted business
                  directories on the web. USCity.net was acquired by Duke
                  Investments and launched a complete redesign in May 2012 with
                  a renewed focus on category search.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="VotefortheBest Business Directory"
                image={listings.nodes[52].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>VotefortheBest.com</span>
                  <span>Active Monthly Users: 50,000</span>
                </h3>
                <p className="text-lg">
                  VotefortheBest.com is a straightforward business directory
                  that ranks businesses in every town in the US based on a
                  simple yet powerful voting system. VotefortheBest.com is
                  quickly becoming the go-to destination to find out what
                  businesses are popular in any city.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Where To Business Directory"
                image={listings.nodes[53].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Where To?</span>
                  <span>Active Monthly Users: 1M</span>
                </h3>
                <p className="text-lg">
                  Where To? provides an easy way to find the closest steakhouse,
                  bank branch, billiard club or anything else you might be
                  looking for in seconds. Where To? provides photos, videos,
                  descriptions, special offers, business hours and more.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="White &amp; Yellow Pages Business Directory"
                image={listings.nodes[54].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>White &amp; Yellow Pages</span>
                  <span>Active Monthly Users: 1M</span>
                </h3>
                <p className="text-lg">
                  White &amp; Yellow combines the best of local and mobile
                  search in a single app. Search for people by name, phone
                  number, and business. Results include GPS driving directions,
                  save favorites, and track history.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="Yalwa Business Directory"
                image={listings.nodes[55].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>Yalwa</span>
                  <span>Active Monthly Users: 500,000</span>
                </h3>
                <p className="text-lg">
                  Yalwa is a fast-growing global online business directory that
                  provides local businesses with free local advertising in over
                  60 countries worldwide and across 5 languages.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="YaSabe Business Directory"
                image={listings.nodes[56].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>YaSabe</span>
                  <span>Active Monthly Users: 1M</span>
                </h3>
                <p className="text-lg">
                  YaSabe is America’s largest and fastest growing local search
                  destination that caters to Hispanic consumers. YaSabe has
                  connected millions of users to online listings, cultural
                  content, and community-sourced information. YaSabe offers
                  access to the 53 million US Hispanics who speak English and
                  Spanish.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="YellowMoxie Business Directory"
                image={listings.nodes[57].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>YellowMoxie.com</span>
                  <span>Active Monthly Users: 2M</span>
                </h3>
                <p className="text-lg">
                  YellowMoxie.com is the local expert and a top online resource
                  for finding information and insights on local businesses and
                  retailers – from driving directions and hours of operation, to
                  Web links and customer reviews.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="YellowPageCity Business Directory"
                image={listings.nodes[58].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>YellowPageCity.com</span>
                  <span>Active Monthly Users: 150,000</span>
                </h3>
                <p className="text-lg">
                  YellowPageCity.com is the world’s largest network of Yellow
                  Page Directories with over 2,600 online phone books. They
                  offer easily accessible interactive listings of local
                  businesses and a local community page that includes
                  information of weather, movies, and local events.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start p-3">
              <GatsbyImage
                alt="YellowPagesGoesGreen Business Directory"
                image={listings.nodes[59].childImageSharp.gatsbyImageData}
              />
              <div className="w-4/5 pl-4">
                <h3 className="font-RalewayBold text-xl text-themeOrange-400 pb-3 flex flex-col lg:flex-row justify-center lg:justify-between">
                  <span>YellowPagesGoesGreen.org</span>
                  <span>Active Monthly Users: 150,000</span>
                </h3>
                <p className="text-lg">
                  YellowMoxie.com is the local expert and a top online resource
                  for finding information and insights on local businesses and
                  retailers – from driving directions and hours of operation, to
                  Web links and customer reviews.
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      <FreeQuoteForm />
      <ContactForm />
    </Layout>
  )
}

export default DirectoryListingPage

export const pageQuery = graphql`
  query DirectoryListingPageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
      slug
      seo {
        fullHead
        schemaDetails
      }
    }
    dSubmission: file(
      name: { regex: "/directory-network-mainimage/" }
      relativeDirectory: { eq: "directory-listing" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    listings: allFile(
      filter: {
        name: { regex: "/-listing/" }
        relativeDirectory: { eq: "directory-listing" }
      }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 100
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`
