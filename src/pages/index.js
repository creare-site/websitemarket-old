import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO'

import categ_site_gratuit      from '../assets/images/site-gratuit-websitemarket.jpg';
import categ_site_prezentare   from '../assets/images/site-prezentare-websitemarket.jpg';
import categ_design            from '../assets/images/creare-site-reflex.jpg';

import categ_site_medical      from '../assets/images/site-medical-coming-soon.jpg';
import categ_site_restaurant   from '../assets/images/site-medical-coming-soon.jpg';
import categ_site_fitness      from '../assets/images/site-fitness-parallelism.jpg';

import categ_site_pensiuni     from '../assets/images/creare-site-reflex.jpg';
import categ_site_bucuresti    from '../assets/images/creare-site-bucuresti-websitemarket.jpg';
import categ_site_soon         from '../assets/images/site-fitness-coming-soon.jpg';

const IndexPage = () => (
  <Layout>

    <SEO title="Site-uri de Prezentare - Servicii Hosting" 
         description="Hai pe net! Acum este simplu cu servciul nostru." />

    <div id="main">
      <div className="inner">
        <header>
          
          <h1>
            Site Prezentare 249Ron
          </h1>
          
          <p>
            Site-uri rapide cu un design modern. 
            Exemple: <a href="https://site-medical-hyperbolic.websitemarket.ro/"><strong>clinica</strong> medicala</a>, 
            {' '}<a href="https://site-fitness-ethereal.websitemarket.ro/">site <strong>fitness</strong></a>,
            {' '}<a href="https://site-restaurant-reflex.websitemarket.ro/"><strong>restaurant</strong></a>,
            {' '}<a href="https://site-firma-coming-soon.websitemarket.ro/">pagina <strong>coming soon</strong></a>, 
            {' '}<a href="https://site-consultant-financiar.websitemarket.ro/"><strong>consultant</strong></a> 
          </p>
          
          <p>
            Servicii: <strong>Hosting 9Ron</strong> / luna, <strong>Site - 249Ron</strong> (pret unic). 
            <br />
            Hai sa stam de vorba: <strong> <a href="mailto:hello@websitemarket.ro"> hello [ @ ] websitemarket.ro </a> </strong>
          </p>
        </header>

        <hr />

        <div className="row">
          <section>
            <p>
              <span className="image left">
                <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/emag-site-prezentare-pensiune-x1000-intro.gif" 
                     alt="Creare Site, Lens design - Un produs Websitemarket" />
              </span>
              
              <h2> 
                Oferte
              </h2>
              <p>
                <strong>Promo Site</strong> - Include Domeniu (RO) si Hosting 1an - <strong>299Ron</strong>.
                <br />
                <strong>Promo Hosting</strong> - Include Domeniu (RO) si Pagina Coming Soon - <strong>199Ron</strong>.
                <br />
                <br />
                <strong>Interesat?</strong>: trimite o comanda la adresa de mail 
                {' '}<strong><a href="mailto:hello@websitemarket.ro"> hello [ @ ] websitemarket.ro </a></strong>. 
              </p>
          </p>
          </section>
        </div>

        <hr />
        
        <div className="row">
          <section className="tiles">

            <article className="style1">
              <span className="image">
                <img src={categ_site_gratuit} alt="Site-uri Gratuite - Oferite de WebsiteMarket." />
              </span>
              <a href="/site-gratuit/">
                <h2>Site-uri Gratuite</h2>
                <div className="content">
                  <p>
                    WebsiteMarket
                  </p>
                </div>
              </a>
            </article>

            <article className="style2">
              <span className="image">
                <img src={categ_site_prezentare} alt="Site-uri Prezentare - Oferite de WebsiteMarket." />
              </span>
              <a href="/site-prezentare/">
                <h2>Site-uri de Prezentare</h2>
                <div className="content">
                  <p>
                    Pret 249Ron
                  </p>
                </div>
              </a>
            </article>

            <article className="style3">
              <span className="image">
                <img src={categ_design} alt="Creare Site Design - Produse WebsiteMarket." />
              </span>
              <a href="/creare-site/design/">
                <h2>Website Design</h2>
                <div className="content">
                  <p>
                    Pret 249Ron 
                  </p>
                </div>
              </a>
            </article>

            <article className="style4">
              <span className="image">
                <img src={categ_site_medical} alt="Site Medical - Produse WebsiteMarket." />
              </span>
              <a href="/site-medical/">
                <h2>Site Medical</h2>
                <div className="content">
                  <p>
                    Pret 249Ron 
                  </p>
                </div>
              </a>
            </article>

            <article className="style5">
              <span className="image">
                <img src={categ_site_restaurant} alt="Site Restaurant - Produse WebsiteMarket." />
              </span>
              <a href="/site-restaurant/">
                <h2>Site Restaurant</h2>
                <div className="content">
                  <p>
                    Pret 249Ron 
                  </p>
                </div>
              </a>
            </article>

            <article className="style6">
              <span className="image">
                <img src={categ_site_fitness} alt="Site Fitness - Produse WebsiteMarket." />
              </span>
              <a href="/site-fitness/">
                <h2>Site Fitness</h2>
                <div className="content">
                  <p>
                    Pret 249Ron 
                  </p>
                </div>
              </a>
            </article>

            <article className="style1">
              <span className="image">
                <img src={categ_site_pensiuni} alt="Site Pensiuni - Produse WebsiteMarket." />
              </span>
              <a href="/creare-site/pensiuni/">
                <h2>Site Pensiuni</h2>
                <div className="content">
                  <p>
                    Pret 249Ron 
                  </p>
                </div>
              </a>
            </article>

            <article className="style2">
              <span className="image">
                <img src={categ_site_bucuresti} alt="Site Bucuresti - Produse WebsiteMarket." />
              </span>
              <a href="/creare-site/bucuresti/">
                <h2>Site Bucuresti</h2>
                <div className="content">
                  <p>
                    Pret 249Ron 
                  </p>
                </div>
              </a>
            </article>

            <article className="style3">
              <span className="image">
                <img src={categ_site_soon} alt="Site Coming Soon - Produse WebsiteMarket." />
              </span>
              <a href="/creare-site/coming-soon/">
                <h2>Coming Soon</h2>
                <div className="content">
                  <p>
                    Pret 249Ron
                  </p>
                </div>
              </a>
            </article>

          </section>

          </div>
        </div>
    </div>
  </Layout>
);

export default IndexPage;
