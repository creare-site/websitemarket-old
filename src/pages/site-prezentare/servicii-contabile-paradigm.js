import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'
import CtaBottom from '../../components/CtaBottom'

const IndexPage = () => (
  <Layout>

    <SEO title="Site Servicii Contabile - Design Paradigm" 
        description="Site de prezentare servicii contabile design Paradigm. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://servicii-contabile-paradigm.websitemarket.ro/">Site Servicii Contabile</a>
        </h1>

        <p>
            Oferi servicii in zona contabila? Alege sa fii mai aproape de viitorii clienti printr-un site simplu si cu un design modern.
            <br />
            <strong>Acceseaza <a href="https://servicii-contabile-paradigm.websitemarket.ro">DEMO</a></strong> sau comanda acest site printr-un simplu email la adresa {' '}
            <strong><a href="mailto:hello@websitemarket.ro">hello @ websitemarket.ro</a></strong>.
        </p>

        <div className="row">
            <section>
                <p>
                    <span className="image">
                    <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/servicii-contabile-paradigm-intro.gif"
                         alt="Site Servicii Contabile, Design Paradigm - Un produs Websitemarket" />
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

        <CtaBottom/>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
