import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'

import intro_photon  from '../../assets/images/site-gratuit-photon-intro.gif';

const IndexPage = () => (
  <Layout>

    <SEO title="Site Gratuit - Site de Prezentare cu design Photon" 
         description="Site simplu de prezentare, gratuit. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://site-gratuit-photon.websitemarket.ro">Site Gratuit Photon</a>
        </h1>

        <p>
            Esti un antreprenor la inceput de drum si nu ai un site? Avem o veste buna  pentru tine, pentru ca site-ul prezentat aici este gratuit.
            Tot ce trebuie sa faci este sa accesezi demo-ul site-ului gratuit si sa cobori sursele. Pasii pe care trebuie sa ii urmezi mai departe sunt:
            <ul>
                <li>
                    Acceseaza <strong><a href="https://site-gratuit-photon.websitemarket.ro">Demo Site Gratuit</a></strong>
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
                    <img src={intro_photon} alt="Site Gratuit, Design Photon - Un produs Websitemarket" />
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
            Hai pe net! Acum este simplu utilizand un <a href="https://github.com/creare-site/site-gratuit-photon">Site Gratuit</a> {' '}
             oferit de WebsiteMarket.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
