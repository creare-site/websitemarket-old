import React from 'react';

import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO'
import CtaBottom from '../../../components/CtaBottom'

const IndexPage = () => (
  <Layout>

    <SEO title="Site Firma - Pagina Coming Soon" 
         description="Site de prezentare potrivit firmelor. Produs digital WebsiteMarket." /> 

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://site-firma-coming-soon.websitemarket.ro/">Site Firma - Coming Soon</a>
        </h1>

        <p>
            Acest design simplu si modern are un format potrivit firmelor si companiilor mici. 
        </p>

        <div className="row">
            <section>
                <p>
                    <span className="image">
                    <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-firma-coming-soon-intro.gif"
                         alt="Site firma, Pagina Coming Soon - Un produs Websitemarket" />
                    </span>
                </p>
            </section>
        </div>

        <p>
          <b>Site firma - Coming Soon</b> cu un design simplu si modern:{' '}
          <b><a href="https://site-firma-coming-soon.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/site-firma-coming-soon/">codul sursa</a></b>
        </p>

        <br />

        <CtaBottom/>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
