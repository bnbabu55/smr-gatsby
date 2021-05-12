/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import parse, { domToReact } from "html-react-parser"

const Seo = seoData => {
  const { wp, site } = useStaticQuery(
    graphql`
      query {
        wp {
          generalSettings {
            title
            description
          }
        }
        site {
          siteMetadata {
            siteUrl
            description
          }
        }
      }
    `
  )

  const baseUrl = site?.siteMetadata?.siteUrl

  const options = {
    replace: domNode => {
      if (!domNode.attribs) {
        return
      }

      if (domNode.name === "title") {
        return (
          <title itemProp="name" lang="en">
            {domToReact(domNode.children, options)}
          </title>
        )
      }

      if (domNode.name === "link" && domNode.attribs.rel === "canonical") {
        return <link rel="canonical" href={baseUrl + domNode.attribs.href} />
      }

      if (domNode.name === "meta" && domNode.attribs.property === "og:url") {
        return (
          <meta property="og:url" content={baseUrl + domNode.attribs.content} />
        )
      }
    },
  }

  const yoastSeo = seoData?.seoData?.fullHead
    ? parse(seoData?.seoData?.fullHead, options)
    : { title: wp.title, description: wp.description }

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      defaultTitle="Website SEO, Design and Development Company | Search Marketing Resource LLC"
    >
      {yoastSeo}
      <base target="_blank" href={baseUrl} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <script type="application/ld+json" class="yoast-schema-graph">
        {seoData?.seoData?.schemaDetails}
      </script>
      <meta
        name="google-site-verification"
        content="jHCzuZ3kfOlADsKx9UCN0RJtdRjkrb9RGzyBVIBHl9A"
      />
      <link rel="profile" href="http://gmpg.org/xfn/11" />
    </Helmet>
  )
}

export default Seo
