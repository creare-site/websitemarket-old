import React from 'react';

import Layout from '../../components/Layout';

import intro_site  from '../../assets/images/servicii-curatenie-paradigm-intro.gif';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://servicii-curatenie-paradigm.websitemarket.ro/">Site Servicii Curatenie</a>
        </h1>

        <p>
            Oferi servicii in zona contabila? Alege sa fii mai aproape de viitorii clienti printr-un site simplu si cu un design modern.
            <br />
            <strong>Acceseaza <a href="https://servicii-curatenie-paradigm.websitemarket.ro">DEMO</a></strong> sau comanda acest site printr-un simplu email la adresa {' '}
            <strong><a href="mailto:hello@websitemarket.ro">hello @ websitemarket.ro</a></strong>.
        </p>

        <div className="row">
            <section>
                <p>
                    <span className="image">
                    <img src={intro_site} alt="Site Servicii Curatenie, Design Paradigm - Un produs Websitemarket" />
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
            Hai pe net! Acum este simplu utilizand un <a href="https://github.com/creare-site/servicii-curatenie-paradigm/">Site de prezentare</a> {' '}
             oferit de WebsiteMarket.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
