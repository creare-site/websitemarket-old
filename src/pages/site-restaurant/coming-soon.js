import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'
import CtaBottom from '../../components/CtaBottom'

const IndexPage = () => (
  <Layout>

    <SEO title="Site Restaurant - Pagina Coming Soon" 
         description="Site de prezentare potrivit cabinetelor restaurante. Produs digital WebsiteMarket." /> 

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://site-restaurant-coming-soon.websitemarket.ro/">Site Restaurant - Coming Soon</a>
        </h1>

        <p>
            Acest design simplu si modern are un format potrivit cabinetelor restaurante si centrelor de asistenta. 
        </p>

        <div className="row">
            <section>
                <p>
                    <span className="image">
                    <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-restaurant-coming-soon-intro.gif"
                         alt="Site restaurant, Pagina Coming Soon - Un produs Websitemarket" />
                    </span>
                </p>
            </section>
        </div>

        <p>
          <b>Site restaurant - Coming Soon</b> cu un design simplu si modern:{' '}
          <b><a href="https://site-restaurant-coming-soon.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/site-restaurant-coming-soon/">codul sursa</a></b>
        </p>

        <br />

        <CtaBottom/>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
