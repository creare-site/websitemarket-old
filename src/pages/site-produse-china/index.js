import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'

const IndexPage = () => (
  <Layout>

    <SEO title="Site Produse China - Site-uri de Prezentare" 
         description="Site-uri de prezentare produse China. Produse digitale WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://ro.wikipedia.org/wiki/Site_web">Site</a> Produse China
        </h1>

        <p>
        Produse China site content
        </p>

        <hr />

        <blockquote>
            <h5>WebsiteMarket</h5>
            Hai pe net! Acum este simplu.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
