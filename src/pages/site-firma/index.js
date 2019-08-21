import React from 'react';

import Layout from '../../components/Layout';

import intro_reflex from '../../assets/images/creare-site-reflex-intro.gif';
import intro_lens   from '../../assets/images/creare-site-lens-intro.gif';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://ro.wikipedia.org/wiki/Site_web">Site</a> Firma
        </h1>

        <p>
        Firma site content
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
