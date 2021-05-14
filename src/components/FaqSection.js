import React from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const FaqSection = () => {
  const { faqImage, mySiteUrl } = useStaticQuery(graphql`
    query FaqQuery {
      faqImage: allFile(
        filter: { relativeDirectory: { eq: "faq" } }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 974
              placeholder: BLURRED
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      mySiteUrl: site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return (
    <>
      <section id="page-title" className="bg-white py-10">
        <h1 className="text-themeOrange-400 text-5xl font-BebasNeue text-center uppercase">
          SEO FREQUENTLY ASKED QUESTIONS
        </h1>
      </section>

      <section className="w-11/12 mx-auto py-10" id="faq-questions">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  What Is The Difference Between Search Engine Marketing (SEM) &
                  Search Engine Optimization (SEO)
                </span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    Search Engine Marketing is the umbrella for all the services
                    that better align your website with the Search Engine
                    algorithms, or the calculators the Search Engines use to
                    determine keyword search hierarchy or rankings.
                  </p>
                  <p>
                    This includes website optimization but also Social Media
                    posts, Blogging, optimized Press Releases, keyword tagged
                    images and videos, Business Directory listings, Sponsored
                    search campaigns and Reputation Management. Whereas, Search
                    Engine Optimization is specific only to the SEO attributes
                    of a website such as meta attributes, Blog posts and page
                    copy.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>How Long Before A SEO Program Generates Traffic</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    Results will vary depending on how competitive your market
                    is, how well your competition has or is running their online
                    marketing program and the amount of page content your site
                    has. However, with all things being equal, a full-service
                    Search Marketing campaign will begin to increase your
                    keyword search rankings within 60-90 days.
                  </p>
                  <p>
                    We consistently see a group of phrases jump from a 7th page
                    position to a 3rd or 2nd page ranking in that time frame
                    with more popular terms taking longer. Remember, search
                    optimization is cumulative, the longer the duration of the
                    program, the more effective it will be in moving your core
                    business phrases to top ranking positions and maintaining
                    these positions against your competitors.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What Are Best Search Marketing Services</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    An effective Search Marketing program is constantly evolving
                    to incorporate the latest updates that Google, Yahoo and
                    Bing use in determining the keyword search ranking position
                    of your business and your competitors. Your SEO services
                    company should be optimizing your website with all the
                    current basic attributes needed but expanding the program as
                    new Search Engine algorithms are adopted.
                  </p>
                  <p className="pb-5">Services should include:</p>
                  <div className="flex flex-col md:flex-row justify-around">
                    <ul className="list-square">
                      <li>SEO Website Analysis</li>
                      <li>Keyword Phrase Research</li>
                      <li>Competitor Review</li>
                      <li>Webpage Copy Optimization</li>
                      <li>SEO Attributes Added/Updated</li>
                      <li>Business Directory Updates</li>
                    </ul>
                    <ul className="list-square">
                      <li>News (Blog) Articles</li>
                      <li>Social Media Management</li>
                      <li>Weekly SEO Reports</li>
                      <li>Optimized Press Releases</li>
                      <li>Pinterest/Instagram Posts</li>
                      <li>Site Traffic Analytics </li>
                    </ul>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is Search Optimized Webpage Copy</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    The content on all pages of your website are Search Engine
                    optimized by rewriting the copy to add ‘longtail’ keyword
                    phrases your targeted audience are using in their search
                    queries. Longtail means phrases of 3 words or more and that
                    are written to be similar to how your products and services
                    are searched for by End Users. The closer your webpage copy
                    matches a search query, the higher your rankings will be.
                  </p>
                  <p className="pb-5">
                    There are other text attributes the Search Engines
                    understand as a certain phrase or word is more important
                    than other text on the page. A header phrase tagged as a h1
                    to h6, signifies a higher level of importance for the words
                    in the header than the text contained in the paragraph
                    below. Or adding a hyperlink (anchor link) to a keyword
                    phrase also identifies the words as having more
                    significance. Even bold text has a higher value in the
                    Search Engine algorithms.
                  </p>
                  <p>
                    However, the challenge is to write engaging copy to retain
                    the attention of the End User while incorporating the
                    keyword phrases targeted in the SEO program. This is the
                    talent of an experienced SEO Manager.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span> What is Meta Content</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    The Search Engines not only scan the forward-facing copy of
                    your webpages when they ‘crawl’ your site every 10 days but
                    also the meta attributes are viewed as well. These are
                    contained in the coding of your pages and should include -
                  </p>
                  <p className="pb-5">
                    <u>Title Tag:</u> This is the introduction to the Search
                    Engines of what each page is specifically about.{" "}
                  </p>
                  <p className="pb-5">
                    <u>Meta Description:</u> This description further expands on
                    the Title Tag. This description is also what is presented in
                    search results under the company header name.
                  </p>
                  <p className="pb-5">
                    <u>Image Names:</u> Each image should be named with a
                    keyword phrase but that also describes the image.
                  </p>
                  <p className="pb-5">
                    <u>Image Alt Text:</u> Images have an added opportunity to
                    include a 4-5 word description.
                  </p>
                  <p className="pb-5">
                    <u>Header Tag:</u> The header tag indicates to the Search
                    Engines the phrasing is important and is starting a new
                    section of informative text.
                  </p>
                  <p className="pb-5">
                    <u>Anchor Links:</u> Text on a page that has a link to
                    another page within the site signifies to the Search Engines
                    this is an important group of words about your products and
                    services.
                  </p>
                  <p>
                    These, and other attributes, are what your SEO Manager will
                    update as part of the SEO program. Of note, in a website
                    redesign, it is important to have a seasoned SEO Content
                    Editor review and edit all forward-facing page copy as well
                    as the meta content. It is seldom a website development firm
                    will have this skillset.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>The Importance Of SEO Keyword Selection</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    The keyword selection process is core to the success of the
                    SEO program. The keyword phrases, or search terms, you
                    optimize the forward-facing copy of your webpages, the meta
                    content and Blog (News) posts determines when your site will
                    be presented to End Users when they perform a search.
                    Choosing the ‘longtail’ search terms (3-5 word strings) that
                    most closely match the search terms your target audience
                    uses will generate higher rankings and prequalify who clicks
                    through to your site.
                  </p>
                  <p className="pb-5">
                    If you use generic or vague one or two word phrases, you may
                    generate an increase in site traffic but many of these
                    visitors will ‘bounce’, not staying on the site or clicking
                    to interior pages because the Search Engines will presenting
                    your site in search results that are not really related to
                    your products or services.
                  </p>
                  <p className="pb-5">
                    Your keyword optimization list should contain 40-60 keyword
                    phrases that are assembled from researching your
                    competitors’ websites, using Google’s Keyword tool and
                    spending time really understanding how your targeted
                    audience conducts their online searches.
                  </p>
                  <p>
                    A studied and quality list will prequalify the End User who
                    clicks on your SERP. Example, if you optimize your site for
                    ‘stainless steel’ but you actually service, repair and sell
                    ‘stainless steel food refrigeration motors’, you will
                    receive many erroneous click throughs from visitors
                    searching for ‘stainless steel _________’ fill in the blank
                    searches.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do You Need To Post Blog (News) Articles</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    Content is the most important aspect of an effective SEO
                    program. Meaning, if you have a 25 page website that is
                    search optimized with keyword phrases but your next
                    competitor has a 50 page site nicely optimized, most likely
                    they will outrank you in keyword searches due to their site
                    has more keyword ‘weight’ and ‘density’.
                  </p>
                  <p className="pb-5">
                    This is why having an active Blog (News) writing campaign is
                    significant as each article posted, creates another search
                    optimized page on your website. In our Search Marketing
                    programs, each month, we write 2-4 keyword ‘heavy’ articles
                    about topics being proprietary to your products and
                    services. Each post adds a new webpage to our client’s
                    website, including all meta content. So, at the end of a
                    year, we have created up to 50 new pages to the site, which
                    all will be crawled and indexed by the Search Engines.
                  </p>
                  <p>
                    Secondly, you want to add an ‘opt-in’ form field so all End
                    Users can submit their email address to receive an alert
                    each time a new Blog post is added. You can then build a
                    newsletter list from these opt-ins to use in your email
                    marketing campaigns.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Why Is Social Media Important</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    Google, Yahoo and Bing promote websites in search rankings
                    that are active in their industries. Your Social Media
                    venues should be routinely promoted (Twitter, Google My
                    Business, Facebook, Yelp, LinkedIn) with new posts added
                    each week or monthly.
                  </p>
                  <p className="pb-5">
                    The content needs to contain similar messaging and keyword
                    phrases as found on your webpages. Each post should have
                    ‘links’ (backlinks) referring viewers back to the
                    appropriate content pages of your site. Also, every site,
                    including Press Release syndications and Social Media pages
                    that refer to your pages transmits a degree of link
                    ‘authority’. Link authority can be considered as a kind of
                    vote for quality of your page and the entire website.
                    Generally, the more links you generate, the higher your
                    website will rank.
                  </p>
                  <p>
                    And, now that the Search Engines are using reviews as part
                    of the ranking level in search results, having active Social
                    Medial venues will promote engagement form your followers
                    and customers. Occasionally, Social Media posts are
                    presented in search results as well, so you will generate
                    ‘referred’ website traffic as well.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>How To Publish Optimized Press Releases For SEO</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    In our SEO programs, we routinely write and publish
                    optimized Press Releases that are submitted through
                    Newswires having an extensive syndication network. Before
                    writing the PR, your SEO Manager works with your team to
                    determine the topic of the PR.
                  </p>
                  <p className="pb-5">
                    Once the subject of the Press Release is determined, an
                    initial proof is written, typically five to six paragraphs
                    in length. SEO Manager may include images or videos in the
                    content as well. The draft is submitted to you for review
                    and final approval. The copy will contain keyword phrases
                    focused on in the SEO program but will maintain a balance
                    between Search Engine optimization and engaging copy for End
                    Users.
                  </p>
                  <p className="pb-5">
                    Once approved, the press release will be submitted to our
                    online news partner and distributed to 100’s of
                    syndications. Included in the Release are company contact
                    details including the website URL, logo, phone number and
                    address.
                  </p>
                  <p>
                    Press Releases are very effective in creating backlinks from
                    websites where the Search Engines have accredited with
                    having ‘authority’, generating further validation of your
                    NAP (name, address, phone) details and generating site
                    traffic from the embedded return links in the PR copy.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Why Are Backlinks Important & How To Create Them</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    Google, and other Search Engines, want to be sure the
                    companies they promote in search results are 100% existing
                    entities. Because there is much fraud online, the Search
                    Engines use various algorithms to quantify if your website
                    is of an actual company doing business. The main validators
                    are –
                  </p>
                  <ul className="second-ul p-0 pb-5">
                    <li>- Business Directory accuracy</li>
                    <li>
                      - Backlinks (your website URL) in copy found on other
                      sites
                    </li>
                    <li>- Reviews/Replies on Social Media sites</li>
                  </ul>
                  <p className="pb-5">
                    By adding links (URL’s) in any copy you post on other venues
                    such as Newswire Press Releases, LinkedIn, Twitter and
                    Facebook, you continue to add to your backlink count. If the
                    links are found by the Search Engines on what are deemed
                    ‘qualified’ or reputable websites, then your website is
                    granted higher ‘authority’ or validated as a business to be
                    trusted as real, which equates to higher rankings.
                  </p>
                  <p>
                    And, as End Users share Blog posts or other articles on
                    venues they visit, this will also generate more backlinks on
                    sites that their contacts and friends are active on and
                    sharing.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Importance Of Business Directories & NAP Details</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    The Search Engines look to many sources to crosscheck the
                    NAP (name, address, phone) details of your business.
                    Hundreds of ‘authority’ sites like Yelp, GMB, Manta, Yellow
                    Pages, Chamber of Commerce and many others are indexed by
                    Google and the business information is compared to the
                    contact information presented on your website.
                  </p>
                  <p className="pb-5">
                    If the NAP information is inconsistent or missing, the
                    Search Engines will be less inclined to return your website
                    in a search query as compared to a business whose
                    information is correct and verified. This will not only
                    negatively affect typical Google, Yahoo or Bing searches but
                    also voice search with Siri, Cortana and Alexa. And will
                    impact if your company is displayed on GPS devices as well.
                  </p>
                  <p className="pb-5">
                    In our SEO programs, we update all authority Business
                    Directory listings websites, so your NAP details are
                    consistent in each listing.
                  </p>

                  <p className="pb-5">
                    <u>Improve Local Search Rankings</u> - Over 75% of people
                    who use local search visit a business whose services were
                    queried within 2 days. Your address needs to be 100%
                    accurate to appear in the right location on the different
                    online maps.
                  </p>
                  <p className="pb-5">
                    <u>Generate More Business Inquiries</u> - Directories allow
                    users to search for services and filter by location,
                    category and reviews. If your listing is current, it will be
                    searchable in the directories most end users access.
                  </p>
                  <p className="pb-5">
                    <u>Strengthen Your Business Reputation</u> - Consumers
                    search for information about the businesses they intend to
                    purchase from. Having your company appear in a multitude of
                    listings increases your opportunity of being selected and
                    contacted.
                  </p>
                  <p className="pb-5">
                    <u>Increased Brand Awareness</u> - Every encounter a person
                    has with your business increases their awareness with your
                    brand. Being active in directories and Social Media can
                    provide a significant advantage ahead of your competition.
                  </p>
                  <p>
                    <u>Increase Your SEO Visibility</u> - The Search Engines
                    need to be trusted by its users, so Google, Yahoo and Bing
                    will only provide top search rankings for those businesses
                    they can 100% confirm are ‘real’. The more accurate and
                    consistent your online information, the more the Search
                    Engines will promote your business ahead of your
                    competition.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Tracking The Success Of Your SEO Program</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    There are many metrics used to measure how successful a
                    Search Marketing program is. Prior to the launch of a SEO
                    campaign, baseline studies should be completed for future
                    comparison of increases in keyword search rankings, organic
                    search traffic and backlinks created.
                  </p>
                  <p className="pb-5">
                    During the first 60 days to 6 months of the program is when
                    the highest percentage of rankings increases will be
                    generated, then the numbers will slow to an ongoing month by
                    month improvement. A successful campaign, once a keyword
                    phrase has been moved to the 1st page of Google, then the
                    continued SEO efforts will maintain this ranking position
                    against competitors.
                  </p>
                  <p className="pb-5">
                    In our SEO programs, we deliver a weekly report of all
                    activity experienced compared to a previous timeline or the
                    from the start of the SEO services. The information is also
                    available 24/7 in a SEO Performance dashboard. The metrics
                    tracked include –
                  </p>
                  <div className="ul-left pb-5 flex flex-col md:flex-row justify-evenly">
                    <ul className="m-0 list-square">
                      <li>Keyword Phrase Search Rankings </li>
                      <li>
                        Website Traffic
                        <ul className="list-none">
                          <li>- Direct</li>
                          <li>- Referred</li>
                          <li>- Organic</li>
                        </ul>
                      </li>
                      <li>Competitor Site Performance</li>
                      <li>Full Website Error Audit</li>
                    </ul>
                    <ul className="m-0 list-square">
                      <li>
                        Social Media Activity
                        <ul className="list-none">
                          <li>- Facebook</li>
                          <li>- LinkedIn</li>
                          <li>- Twitter</li>
                          <li>- Google My Business</li>
                        </ul>
                      </li>
                      <li>Backlinks Created</li>
                    </ul>
                  </div>
                  <p>
                    The SEO Manager for the program will typically schedule a
                    call to discuss the performance of the campaign to date and
                    provide an overview of the action items planned for that
                    week and month.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  Why You Need A Search Marketing Company & SEO Manager
                </span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    An effective Search Marketing program is comprised of many
                    ongoing efforts including all site copy updated, SEO page
                    attributes added, blog posts, managing Social Media venues
                    (posts & reviews), Press Releases, Business Directory
                    listings and then continually monitor the various analytics
                    to understand what action items need changed or added to SEO
                    mix.{" "}
                  </p>
                  <p className="pb-5">
                    For most small to medium sized business, they do not have
                    the internal resources, or someone trained in Search Engine
                    Optimization ‘best practices’. Retaining the services of an
                    acknowledged Search Marketing firm who can demonstrate real
                    world successful SEO programs and client sites as references
                    will deliver a SEO program that generates an ongoing R.O.I.
                    with the increase of keyword rankings, website traffic,
                    emails and phone inquiries.{" "}
                  </p>
                  <p>
                    With our Search Marketing campaigns, a tenured SEO Manager
                    is assigned to your team and works directly with you month
                    after month to achieve the best results in the shortest
                    amount of time possible. A weekly recap of all SEO services
                    completed is provided and then reviewed to understand what
                    efforts are performing well and where any adjustments may be
                    needed.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  How To Qualify Your Website Traffic – Higher Conversion Rates
                </span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    For a SEO program to be successful, a chain of events needs
                    to occur –
                  </p>
                  <ol className="pb-5 list-decimal list-inside ml-2">
                    <li>Significantly increase your keyword search rankings</li>
                    <li>
                      Generate more ‘click throughs’ (organic traffic) to your
                      site as a result of higher-level search rankings
                    </li>
                    <li>
                      The site visitors ‘convert’ meaning they complete the
                      contact form on your site or call
                    </li>
                  </ol>
                  <p className="pb-5">
                    All 3 events need to happen for your Search Marketing
                    program to deliver a ROI (Return on Investment). Number 3 is
                    the most important as of course this activity equates to new
                    revenue. However, this requires that the increased site
                    visitors have through based on your website copy being
                    optimized with specific, long tail keyword phrases (3-5
                    words in length), that prequalify the end user.
                  </p>
                  <p className="pb-5">
                    Many SEO companies will add vague or generic keywords to
                    your site content and these phrases may increase your search
                    rankings and site traffic, but your conversions will be low,
                    and the Bounce Rate will increase. An example would be a
                    company that manufactures ‘industrial stainless steel
                    electric food processing motors’. This is a great long tail
                    keyword phrase. But, what if the site is optimized for
                    keyword phrases like ‘stainless steel’ or ‘electric motors’
                    or ‘industrial manufacturer’, Google rankings may increase
                    for these search terms but they are far to generic and the
                    end user will most likely bounce from the site as the
                    products or services they are looking for are not
                    represented.
                  </p>
                  <p>
                    A much better approach is to optimize the page copy and meta
                    data with keyword phrases that are very specific to the
                    products and services the company offers. The site traffic
                    may be less than when using generic search terms, but the
                    conversions will be much higher as the website is being
                    presented in search queries that are 100% aligned with the
                    site copy and the end users interests.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>
                  Measuring The Business Leads Generated By Your Website
                </span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    Redesigning your website to be more Search Engine friendly
                    or launching a SEO program are significant steps to
                    generating new business opportunities and increasing your
                    online visibility. However, how do you know the amount of
                    activity is being generated by these new marketing efforts.
                    What percentage of the daily phone calls and emails you
                    receive are generated from your website, Social Media posts
                    or Business Directories.
                  </p>
                  <p className="pb-5">
                    After spending the time and money to update your site,
                    manage your Social Media accounts and maintaining an ongoing
                    Search Marketing campaign, you should know what the results
                    are, not just to continue grouping all sales activity
                    together.
                  </p>
                  <ol className="pb-5 list-decimal list-outside ml-6">
                    <li>
                      Website Traffic. With a redesign and the Search Engine
                      optimization of your website, your site traffic should
                      increase by 30% or more within the first 90 days of the
                      SEO program. Knowing the traffic counts of your site
                      before the redesign or SEO campaign was launched is
                      helpful to understanding how effective this work has been.
                      An example would be if your site averages 2,000 visits per
                      month and this equates to 10 phones calls and 20 contact
                      form inquiries, then with 600 new visits (30% more), you
                      should have a corresponding increase in new leads. Using
                      Google analytics, you can view the percentage of increase
                      in site traffic as compared to previous time frames. This
                      helps you calculate the R.O.I of your online marketing
                      spend divided by the new business generated.
                    </li>
                    <li>
                      Website Conversions. Beyond the increase in website
                      traffic, it is important to track and count the number of
                      conversions being generated, meaning calls and emails from
                      your site separating the leads from any other marketing
                      you are doing and normal business calls. A couple of
                      recommendations:
                    </li>
                  </ol>
                  <p className="pb-5">
                    - Click-to-Call services. This is a low-cost way to track
                    calls to your company that are from your website only so at
                    the end of the week or month, you know that 25% of your
                    business calls were generated from website visits. The same
                    can be applied to your Social Media pages.
                  </p>
                  <p className="pb-5">
                    - Website Contact forms. These email inquiries should be
                    counted separately from other emails received asking about
                    your products and services. Again, tracking these as unique
                    to inbound marketing leads, allows you to determine how well
                    your online marketing plan is performing.
                  </p>
                  <p>
                    The bottom line, if your monthly SEO program spend is
                    $700.00 per month and your site is generating 30 new
                    business inquiries, and your close ratio is 40%, you can do
                    the math. Without tracking the activity your website is
                    generating, you may be overlooking how important your site
                    is to the overall growth of your company.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Understanding SEO Terms – What Do They Mean</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    Understanding some of the basic requirements used to
                    optimizing your webpages for Google, Yahoo and Bing use to
                    determine what ranking position your company will be given
                    in a keyword search, could be fundamental to maintaining a
                    high level of online visibility.
                  </p>
                  <p className="pb-5">
                    Even if you have a Search Marketing firm managing the day to
                    day optimization work, knowing the names SEO attributes
                    should be applied to your site pages and why these changes
                    will have an effect with your search rankings, is helpful
                    for you to be more effective in communicating with the SEO
                    team.
                  </p>
                  <GatsbyImage
                    image={faqImage?.nodes[0]?.childImageSharp?.gatsbyImageData}
                    alt="SEO Terms & Phrases"
                  />
                  <p className="pb-5">
                    Each month, our SEO managers review and discuss all services
                    being provided and the ‘cause and effect’ of the work being
                    completed. A cursory knowledge of the following should be
                    provided by your SEO program manager:
                  </p>
                  <table className="w-full text-left pb-5">
                    <tr>
                      <td>- Title Tags</td>
                      <td>- Header Tags</td>
                    </tr>
                    <tr>
                      <td>- Meta Descriptions</td>
                      <td>- Backlinks</td>
                    </tr>
                    <tr>
                      <td>- Long Tail Keywords</td>
                      <td>- Broken Links</td>
                    </tr>
                    <tr>
                      <td>- Anchor Links</td>
                      <td>- Sub Directories</td>
                    </tr>
                    <tr>
                      <td>- Keyword Density</td>
                      <td>- Business Directories</td>
                    </tr>
                  </table>
                  <p className="pt-5">
                    A half hour conversation reviewing these optimization terms
                    would be beneficial for you to better understand how your
                    website is indexed with the Search Engines and the
                    importance of each.
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="my-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-themeBlue-text bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>How Well Is Your Website Search Engine Optimized</span>
                <ChevronDownIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-xl text-themeGray-300"
                >
                  <p className="pb-5">
                    As Google, Yahoo and Bing continually change or add to the
                    indexing algorithms (calculators) used to determine your
                    website ranking position, it is important to routinely
                    monitor the SEO health of your webpages. Especially if you
                    are routinely adding new content or pages to your site.{" "}
                  </p>
                  <GatsbyImage
                    className="mx-auto"
                    image={faqImage?.nodes[1]?.childImageSharp?.gatsbyImageData}
                    alt="Free SEO Site Audit"
                  />
                  <p className="pb-5">
                    As new browser functionality is incorporated into the search
                    engines, your site should be tested to see if it is in
                    compliance with the new features. Just in the past few
                    years, several significant browser algorithms were added
                    that have a significant impact on how well your website
                    performs in keyword search results such as:
                  </p>
                  <p className="pb-5">
                    <u>HTTPS Designation</u> - Google requires all websites that
                    collect any personal data to be secure, meaning having a SSL
                    Certificate installed.
                  </p>
                  <p className="pb-5">
                    <u>Page Load Times</u> - Google promotes websites with fast
                    page load times ahead of sites that resolve slowly. You can
                    test your site here{" "}
                    <a
                      style={{ overflowWrap: "break-word" }}
                      className="text-themeBlue-text"
                      href="https://developers.google.com/speed/pagespeed/insights/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://developers.google.com/speed/pagespeed/insights/
                    </a>
                    .
                  </p>
                  <p className="pb-5">
                    <u> Responsive Theme</u> – Google scans your webpages to
                    determine if they render well on mobile devices without the
                    end user having adjust the screen in anyway to view the
                    content. This is referred to as having a ‘Responsive Theme’.
                  </p>
                  <p>
                    If interested, we would be glad to run a SEO site audit
                    providing a complete analysis of any issues or recommended
                    repairs you might consider. Just request here
                    <Link
                      to="/#inline2"
                      className="text-themeBlue-text"
                    >{` ${mySiteUrl?.siteMetadata?.siteUrl}/#inline2`}</Link>
                    .
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </section>
    </>
  )
}

export default FaqSection
