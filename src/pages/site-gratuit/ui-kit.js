import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'
import CtaBottom from '../../components/CtaBottom'

const IndexPage = () => (
  <Layout>

    <SEO title="Site Gratuit - Site de Prezentare cu design UI Kit" 
        description="Site simplu de prezentare, gratuit. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://site-gratuit-ui-kit.websitemarket.ro">Site Gratuit UI Kit</a>
        </h1>

        <p>
            Esti un antreprenor la inceput de drum si nu ai un site? Avem o veste buna  pentru tine, pentru ca site-ul prezentat aici este gratuit.
            Tot ce trebuie sa faci este sa accesezi demo-ul site-ului gratuit si sa cobori sursele. Pasii pe care trebuie sa ii urmezi mai departe sunt:
            <ul>
                <li>
                    Acceseaza <strong><a href="https://site-gratuit-ui-kit.websitemarket.ro">Demo Site Gratuit</a></strong>
                </li>
                <li>Coboara sursele (butonul Download)</li>
                <li>Editeaza textele fisierului index.html</li>
                <li>Editeaza pozele</li>
                <li>Urca site-ul pe un server public</li>
            </ul>  
        </p>

        <div className="row">
            <section>
                <p>
                    <span className="image">
                    <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-gratuit-ui-kit-intro.gif"
                         alt="Site Gratuit, Design UI Kit - Un produs Websitemarket" />
                    </span>
                </p>
            </section>
        </div>

        <br />

        <div className="row">
            <p>
                Alte resurse:
                <ul>
                    <li>
                        Cod sursa <a href="https://github.com/creare-site/site-gratuit-ui-kit">Site Gratuit UI Kit</a>
                    </li>
                    <li>
                        Articol de Blog <a href="https://medium.com/@websitemarketro/site-gratuit-site-prezentare-cu-design-now-ui-websitemarket-8db36766959f">Site Gratuit — Site Prezentare cu design Now UI</a>
                    </li>
                    <li>
                        Prezentare Video <a href="https://www.youtube.com/watch?v=LwldEcGhMAw">Site Gratuit UI Kit</a>
                    </li>
                </ul>  
            </p>
        </div>

        <br />

        <CtaBottom/>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
