import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'
import CtaBottom from '../../components/CtaBottom'

const IndexPage = () => (
  <Layout>

    <SEO title="Site Fitness - Site de Prezentare cu design Ethereal" 
         description="Site de prezentare potrivit salilor de fitness. Produs digital WebsiteMarket." /> 

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://site-fitness-ethereal.websitemarket.ro/">Site Fitness Ethereal</a>
        </h1>

        <p>
            Acest design simplu si modern are un format potrivit salilor de fitness si wellness. 
            <br />
            Cu o afisare impecabila pe orice dispozitiv, acest site fitness iti va informa non-stop viitorii pacienti fara ca tu sa aloci o 
            {' '}resursa umana pentru acest lucru.
        </p>

        <div className="row">
            <section>
                <p>
                    <span className="image">
                    <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-fitness-ethereal-intro.gif"
                         alt="Site fitness, Design Ethereal - Un produs Websitemarket" />
                    </span>
                </p>
            </section>
        </div>

        <p>
          <b>Site fitness Ethereal</b> cu un design simplu si modern:{' '}
          <b><a href="https://site-fitness-ethereal.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/site-fitness-ethereal/">codul sursa</a></b>
        </p>

        <br />

        <CtaBottom/>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
