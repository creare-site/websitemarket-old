import React from 'react'
import Helmet from 'react-helmet'

const SEO = props => {
  
  const siteTitle = 'WebsiteMarket - Site-uri de Prezentare';
  const siteDescription = 'Hai pe net! Acum este simplu si accesibil cu serviciul nostru.';

  const title = props.title ? `${props.title} | WebsiteMarket` : siteTitle
  const description = props.description || siteDescription

  return (
    <Helmet title={title}>
      {/* General tags */}
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default SEO
