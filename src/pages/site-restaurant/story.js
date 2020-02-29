import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'
import CtaBottom from '../../components/CtaBottom'

const IndexPage = () => (
  <Layout>

    <SEO title="Site Restaurant - Site de Prezentare cu design Story" 
         description="Site de prezentare potrivit restaurantelor si cafenelelor. Produs digital WebsiteMarket." /> 

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://site-restaurant-story.websitemarket.ro/">Site Restaurant Story</a>
        </h1>

        <p>
            Acest design simplu si modern are un format potrivit restaurante si cafenelelor. 
            <br />
            Cu o afisare impecabila pe orice dispozitiv, acest site restaurant iti va informa non-stop viitorii clienti fara ca tu sa aloci o 
            {' '}resursa umana pentru acest lucru.
        </p>

        <div className="row">
            <section>
                <p>
                    <span className="image">
                    <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-restaurant-story-intro.gif"
                         alt="Site restaurant, Design Story - Un produs Websitemarket" />
                    </span>
                </p>
            </section>
        </div>

        <p>
          <b>Site restaurant Story</b> cu un design simplu si modern:{' '}
          <b><a href="https://site-restaurant-story.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/site-restaurant-story/">codul sursa</a></b>
        </p>

        <br />

        <CtaBottom/>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
