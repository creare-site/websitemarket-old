import React from 'react';

import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO'

import intro_site  from '../../../assets/images/site-web-bucuresti-restaurant-intro.gif';

const IndexPage = () => (
  <Layout>

    <SEO title="Creare Site Restaurant Bucuresti - Site de Prezentare" 
         description="Site de prezentare pentru restaurante si cafenele in Bucuresti. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://site-web-bucuresti-restaurant.websitemarket.ro/">Site Restaurant Bucuresti</a>
        </h1>

        <p>
            Esti din <strong>Bucuresti</strong>, detii un restaurant sau o cafenea si ai nevoie de un website? 
            <br />
            {' '}Acceseaza <strong><a href="https://site-web-bucuresti-restaurant.websitemarket.ro/">DEMO</a>-ul</strong>
            {' '}site-lui si in cazul in care iti place
            {' '}tot ce trebuie sa faci este sa trimiti un email pe adresa <strong>hello @ websitemarket.ro</strong> pentru mai multe informatii.                 
        </p>

        <div className="row">
            <section>
                <p>
                    <span className="image">
                        <img src={intro_site} alt="Site Restaurant Bucuresti - Un produs Websitemarket" />
                    </span>
                </p>
            </section>
        </div>

        <br />

        <div className="row">
            <p>
                Ai nevoie de mai multe informatii?, nu ezita sa ne contactezi pe adresa de mail {' '}
                <strong><a href="mailto:hello@websitemarket.ro">hello @ websitemarket.ro</a></strong>
            </p>
        </div>

        <br />

        <blockquote>
            <h5>WebsiteMarket</h5>
            Hai pe net! Acum este simplu!
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
