import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'

import intro_site  from '../../assets/images/site-prezentare-paradigm-intro.gif';

const IndexPage = () => (
  <Layout>

    <SEO title="Site Prezentare - Design Paradigm" 
         description="Site de prezentare cu design Paradigm. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://site-prezentare-paradigm.websitemarket.ro">Site Prezentare Paradigm</a>
        </h1>

        <p>
            Website de prezentare, cu un design simplu si modern.
            <br />
            <strong>Acceseaza <a href="https://site-prezentare-paradigm.websitemarket.ro">DEMO</a></strong> sau comanda acest site printr-un simplu email la adresa {' '}
            <strong><a href="mailto:hello@websitemarket.ro">hello @ websitemarket.ro</a></strong>.
        </p>

        <div className="row">
            <section>
                <p>
                    <span className="image">
                    <img src={intro_site} alt="Site Prezentare, Design Paradigm - Un produs Websitemarket" />
                    </span>
                </p>
            </section>
        </div>

        <br />

        <div className="row">
            <p>
                In cazul in care intampini dificultati, nu ezita sa ne contactezi pe adresa de mail {' '}
                <strong><a href="mailto:hello@websitemarket.ro">hello @ websitemarket.ro</a></strong>
            </p>
        </div>

        <br />

        <blockquote>
            <h5>WebsiteMarket</h5>
            Hai pe net! Acum este simplu utilizand un <a href="https://github.com/creare-site/site-prezentare-paradigm/">Site de prezentare</a> {' '}
             oferit de WebsiteMarket.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
